"use client";

import React, { useState, useEffect } from "react";
import HideToggle from "@/components/HideToggle";
import {
  introData as initialIntro,
  technologies as initialTech,
  educations as initialEdu,
  experiences as initialExp,
  projects as initialProj,
  activities as initialAct,
  sourceLink,
  fullVersionLink,
} from "@/lib/data";

type ResumeDraft = {
  introData: typeof initialIntro;
  technologies: typeof initialTech;
  educations: typeof initialEdu;
  experiences: typeof initialExp;
  projects: typeof initialProj;
  activities: typeof initialAct;
};

const initialResumeData: ResumeDraft = {
  introData: initialIntro,
  technologies: initialTech,
  educations: initialEdu,
  experiences: initialExp,
  projects: initialProj,
  activities: initialAct,
};

export default function ResumePage() {
  const [editMode, setEditMode] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [temporaryEditMode, setTemporaryEditMode] = useState(false);

  const [draftError, setDraftError] = useState("");
  const [resumeDraft, setResumeDraft] =
    useState<ResumeDraft>(initialResumeData);
  const [draftJson, setDraftJson] = useState(() =>
    JSON.stringify(initialResumeData, null, 2),
  );

  // AI Tailor State
  const [apiKey, setApiKey] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isTailoring, setIsTailoring] = useState(false);

  useEffect(() => {
    const savedKey = localStorage.getItem("gemini_api_key");
    if (savedKey) setApiKey(savedKey);
  }, []);

  // The state to track if we need to reopen editor after printing
  const [reopenEditorAfterPrint, setReopenEditorAfterPrint] = useState(false);

  useEffect(() => {
    const handleAfterPrint = () => {
      if (reopenEditorAfterPrint) {
        setTemporaryEditMode(true);
        setReopenEditorAfterPrint(false);
      }
    };
    window.addEventListener("afterprint", handleAfterPrint);
    return () => window.removeEventListener("afterprint", handleAfterPrint);
  }, [reopenEditorAfterPrint]);

  const toggleMode = () => setEditMode(!editMode);

  const toggleTemporaryEdit = () => {
    const nextMode = !temporaryEditMode;
    setTemporaryEditMode(nextMode);
    setDraftError("");
    if (nextMode) {
      setDraftJson(JSON.stringify(resumeDraft, null, 2));
    }
  };

  const applyTemporaryChanges = () => {
    try {
      const parsed = JSON.parse(draftJson);
      // Skip deep schema validation for now, just apply it
      setResumeDraft(parsed);
      setDraftError("");
    } catch (e) {
      setDraftError("Invalid JSON format. Please fix syntax and try again.");
    }
  };

  const resetTemporaryChanges = () => {
    setResumeDraft(initialResumeData);
    setDraftJson(JSON.stringify(initialResumeData, null, 2));
    setDraftError("");
  };

  const exportPdf = () => {
    setReopenEditorAfterPrint(temporaryEditMode);
    setTemporaryEditMode(false);
    setTimeout(() => {
      window.print();
    }, 100); // Give React a moment to unmount temporary editor and header properly
  };

  const handleTailor = async () => {
    if (!apiKey || !jobDescription) return;

    setIsTailoring(true);
    setDraftError("");

    try {
      const response = await fetch("/api/ai-tailor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey,
          resumeDraft,
          jobDescription,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to tailor resume");
      }

      // Update both the JSON text and the actual draft state
      const updatedJson = JSON.stringify(data, null, 2);
      setDraftJson(updatedJson);
      setResumeDraft(data);
      setDraftError("");
    } catch (err: any) {
      setDraftError(
        err.message || "An unexpected error occurred during tailoring",
      );
    } finally {
      setIsTailoring(false);
    }
  };

  return (
    <>
      {showHeader ? (
        <>
          <div className="web-only absolute top-0 right-0 p-4 z-50">
            <button
              onClick={() => setShowHeader(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded shadow"
            >
              Hide
            </button>
          </div>
          <header className="web-only text-center p-4 sm:p-6 bg-green-500 text-white w-screen relative">
            <h1 className="text-3xl mb-3">FastResume</h1>
            <h3 className="flex flex-wrap justify-center gap-3">
              <button onClick={toggleMode} className="underline text-lg">
                {editMode ? "[View]" : "[Edit]"}
              </button>
              <button
                onClick={toggleTemporaryEdit}
                className="underline text-lg"
              >
                {temporaryEditMode
                  ? "[Close Temporary Edit]"
                  : "[Temporary Edit]"}
              </button>
              <button onClick={exportPdf} className="underline text-lg">
                [Export PDF]
              </button>
            </h3>
            <p className="mt-2 text-sm max-w-3xl mx-auto">
              Printer-friendly standard résumé template by{" "}
              <a href="https://github.com/narze/resume" className="underline">
                narze
              </a>{" "}
            </p>
            <p className="mt-1 text-sm max-w-3xl mx-auto">
              You can toggle{" "}
              <button onClick={toggleMode} className="underline">
                [Edit Mode]
              </button>{" "}
              to hide some sections before printing, or use{" "}
              <button onClick={toggleTemporaryEdit} className="underline">
                [Temporary Edit]
              </button>{" "}
              for session-only edits that reset on refresh.
            </p>
            <p className="mt-1 text-sm text-green-200">
              (
              <a
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Source
              </a>
              )
            </p>
          </header>
        </>
      ) : (
        <div className="web-only absolute top-0 right-0 p-4 z-50 fixed">
          <button
            onClick={() => setShowHeader(true)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded shadow opacity-50 hover:opacity-100"
          >
            Menu
          </button>
        </div>
      )}

      {temporaryEditMode && (
        <section className="web-only temporary-editor-panel relative z-10 bg-gray-50 border border-gray-300 mx-auto max-w-screen-xl mt-4 px-4 py-4 rounded shadow-sm">
          <h2 className="temporary-editor-title">Temporary Resume Editor</h2>
          <p className="temporary-editor-note">
            Changes are local to this tab and will not persist after refresh or
            closing the app.
          </p>

          {/* AI Tailor Panel */}
          <div className="bg-white border border-gray-300 p-4 mb-4 rounded shadow-sm">
            <h3 className="text-sm font-bold uppercase text-indigo-600 mb-2 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-[10px]">
                βeta
              </span>
              AI Tailor Tool
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Gemini API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value);
                    localStorage.setItem("gemini_api_key", e.target.value);
                  }}
                  placeholder="Paste your API key here..."
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <p className="text-[10px] text-gray-500 mt-1">
                  Stored locally in your browser for convenience.
                </p>
              </div>
              <div className="flex flex-col">
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Target Job Description
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the job requirements here to tailor your bullet points..."
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 h-24 resize-none"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                onClick={handleTailor}
                disabled={isTailoring || !apiKey || !jobDescription}
                className={`flex items-center gap-2 bg-indigo-600 text-white font-bold py-2 px-6 rounded transition-all shadow-md active:scale-95 ${isTailoring || !apiKey || !jobDescription ? "opacity-50 cursor-not-allowed grayscale" : "hover:bg-indigo-700 hover:shadow-lg"}`}
              >
                {isTailoring ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Tailoring...
                  </>
                ) : (
                  <>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    Tailor Resume
                  </>
                )}
              </button>
            </div>
          </div>

          <textarea
            value={draftJson}
            onChange={(e) => setDraftJson(e.target.value)}
            spellCheck="false"
            className="w-full min-h-[300px] border border-gray-400 rounded p-3 font-mono text-xs"
          />
          {draftError && (
            <p className="temporary-editor-error mt-2 text-red-500">
              {draftError}
            </p>
          )}
          <div className="temporary-editor-actions mt-3 flex gap-2">
            <button
              onClick={applyTemporaryChanges}
              className="border border-gray-400 bg-white px-3 py-1 rounded hover:bg-gray-100"
            >
              Apply Changes
            </button>
            <button
              onClick={resetTemporaryChanges}
              className="border border-gray-400 bg-white px-3 py-1 rounded hover:bg-gray-100"
            >
              Reset to Original
            </button>
            <button
              onClick={exportPdf}
              className="border border-gray-400 bg-white px-3 py-1 rounded hover:bg-gray-100"
            >
              Export PDF
            </button>
            <button
              onClick={toggleTemporaryEdit}
              className="border border-gray-400 bg-white px-3 py-1 rounded hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </section>
      )}

      <main
        className={`text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl ${editMode ? "edit-mode" : "display-mode"}`}
      >
        <div className="flex flex-wrap flex-col sm:flex-row print:flex-row items-start sm:items-start print:items-center text-sm sm:text-base gap-y-2 print:gap-y-0 w-full mb-2">
          <div className="flex-1 w-48 text-left leading-tight sm:py-4 print:py-0 print:text-[9pt]">
            <p className="m-0">
              <a href={`tel:${resumeDraft.introData.phone}`}>
                {resumeDraft.introData.phone}
              </a>
            </p>
            <p className="m-0">
              <a href={`mailto:${resumeDraft.introData.email}`}>
                {resumeDraft.introData.email}
              </a>
            </p>
            <p className="m-0">{resumeDraft.introData.location}</p>
          </div>
          <h2 className="flex-none order-first sm:order-none print:order-none text-3xl sm:text-2xl md:text-3xl lg:text-6xl print:text-2xl print:font-bold print:leading-[1.1] print:m-0 print:p-0 text-center sm:text-left">
            {resumeDraft.introData.name}
            {resumeDraft.introData.jobTitle && (
              <span className="block text-base lg:text-2xl print:text-base mt-2">
                {resumeDraft.introData.jobTitle}
              </span>
            )}
          </h2>
          <div className="flex-1 w-48 text-left sm:text-right print:text-right leading-tight sm:py-4 print:py-0 print:text-[9pt]">
            <p className="m-0">
              <a
                href={`https://github.com/${resumeDraft.introData.github}`}
                target="_blank"
                rel="noreferrer"
              >
                github.com/{resumeDraft.introData.github}
              </a>
            </p>
            {resumeDraft.introData.website && (
              <p className="m-0">
                <a
                  href={`https://${resumeDraft.introData.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {resumeDraft.introData.website}
                </a>
              </p>
            )}
            <p className="m-0">
              <a
                href={`https://linkedin.com/in/${resumeDraft.introData.linkedin}`}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <section className="my-[2px]">
          <HideToggle />
          <h2 className="text-2xl print:text-sm print:font-bold uppercase font-semibold text-left mb-0.5">
            Skills
          </h2>
          <hr className="mt-0 mb-0.5 border-[darkgrey]" />

          <table className="text-left items-start table table-fixed w-full">
            <tbody>
              {resumeDraft.technologies.map((tech, i) => (
                <tr key={i}>
                  <td className="align-top w-[11rem] print:w-36">
                    <HideToggle />
                    <span className="w-36 print:w-32 inline-block font-semibold">
                      • {tech.section}
                    </span>
                  </td>
                  <td>
                    {tech.details.map((item, index) => (
                      <span key={index}>
                        {index > 0 && " • "}
                        {item}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="my-[2px]">
          <HideToggle />
          <h2 className="text-2xl print:text-sm print:font-bold uppercase font-semibold text-left mb-0.5">
            Education
          </h2>
          <hr className="mt-0 mb-0.5 border-[darkgrey]" />

          <ul className="text-left list-disc pl-8">
            {resumeDraft.educations.map((edu, i) => (
              <li key={i} className="mb-2">
                <HideToggle />
                <strong>{edu.head}</strong>, {edu.details}
              </li>
            ))}
          </ul>
        </section>

        <section className="my-[2px]">
          <HideToggle />
          <h2 className="text-2xl print:text-sm print:font-bold uppercase font-semibold text-left mb-0.5">
            Experience
          </h2>
          <hr className="mt-0 mb-0.5 border-[darkgrey]" />

          <ul className="text-left list-disc pl-8">
            {resumeDraft.experiences.map((experience, i) => (
              <li key={i} className="mb-4">
                <HideToggle />
                <div className="flex justify-between items-baseline">
                  <div className="text-left">
                    <span className="font-bold leading-tight">
                      {experience.position}
                    </span>
                    <span className="mx-1 text-gray-500">|</span>
                    <span className="font-semibold text-gray-700">
                      {experience.url !== "" ? (
                        <a
                          href={experience.url}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          {experience.company}
                        </a>
                      ) : (
                        experience.company
                      )}
                    </span>
                  </div>
                  <div className="italic text-[8pt] shrink-0 text-right ml-4">
                    {experience.date}
                  </div>
                </div>

                <div className="mt-1 leading-tight text-justify">
                  {experience.details ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {experience.details.map((detail, j) => (
                        <li key={j} className="mb-0.5">
                          <HideToggle />
                          <span className="print:text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "No details provided."
                  )}
                </div>
                {/* Removed extra GitHub label to save space */}
              </li>
            ))}
          </ul>
        </section>

        <section className="my-[2px]">
          <HideToggle />
          <h2 className="text-2xl print:text-sm print:font-bold uppercase font-semibold text-left mb-0.5">
            Projects
          </h2>
          <hr className="mt-0 mb-0.5 border-[darkgrey]" />

          <ul className="text-left list-disc pl-8">
            {resumeDraft.projects.map((project, i) => (
              <li key={i} className="mb-4">
                <HideToggle />
                <div className="flex justify-between items-baseline mb-1">
                  <div>
                    {project.url !== "" ? (
                      <a href={project.url} target="_blank" rel="noreferrer">
                        <strong>{project.name}</strong>
                      </a>
                    ) : (
                      <strong>{project.name}</strong>
                    )}
                  </div>
                  <i className="italic text-sm shrink-0 text-right ml-4">
                    {project.date}
                  </i>
                </div>
                <div>
                  {project.details ? (
                    <ul className="list-disc pl-5 mt-1">
                      {project.details.map((detail, j) => (
                        <li key={j} className="mb-0.5">
                          <HideToggle />
                          <span className="print:text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No details provided.</p>
                  )}
                </div>
                {/* Removed extra GitHub label to save space */}
              </li>
            ))}
          </ul>
        </section>

        <section className="my-[2px] text-left">
          <HideToggle />
          <h2 className="text-2xl print:text-sm print:font-bold uppercase font-semibold text-left mb-0.5">
            Activities & Awards
          </h2>
          <hr className="mt-0 mb-0.5 border-[darkgrey]" />

          <ul className="text-left list-disc pl-8">
            {resumeDraft.activities.map((act, i) => (
              <li key={i} className="mb-2">
                <HideToggle />
                <div className="flex justify-between items-baseline mb-1">
                  <strong>{act.name}</strong>
                  <i className="italic text-gray-700 text-sm shrink-0 text-right ml-4">
                    {act.date}
                  </i>
                </div>
                <ul className="list-disc pl-5 mt-1">
                  {act.details.map((detail, j) => (
                    <li key={j} className="mb-1">
                      <HideToggle />
                      <span className="print:text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
