<script lang="ts">
  import { onMount } from "svelte";
  import Intro from "./components/Intro.svelte";
  import Work from "./components/Work.svelte";
  import HideToggle from "./HideToggle.svelte";
  import {
    educations,
    experiences,
    fullVersionLink,
    introData,
    projects,
    activities,
    sourceLink,
    technologies,
  } from "./data";

  type ResumeDraft = {
    introData: typeof introData;
    technologies: typeof technologies;
    educations: typeof educations;
    experiences: typeof experiences;
    projects: typeof projects;
    activities: typeof activities;
  };

  const initialResumeData: ResumeDraft = {
    introData,
    technologies,
    educations,
    experiences,
    projects,
    activities,
  };

  function cloneDraftData(data: ResumeDraft): ResumeDraft {
    if (typeof structuredClone === "function") {
      return structuredClone(data);
    }

    return JSON.parse(JSON.stringify(data)) as ResumeDraft;
  }

  function createInitialDraft(): ResumeDraft {
    return cloneDraftData(initialResumeData);
  }

  function isNonNullObject(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
  }

  function isStringArray(value: unknown): value is string[] {
    return (
      Array.isArray(value) && value.every((item) => typeof item === "string")
    );
  }

  function isResumeDraft(value: unknown): value is ResumeDraft {
    if (!isNonNullObject(value)) {
      return false;
    }

    const intro = value.introData;
    if (!isNonNullObject(intro)) {
      return false;
    }

    const introKeys = [
      "name",
      "jobTitle",
      "phone",
      "email",
      "github",
      "linkedin",
      "location",
      "website",
    ] as const;

    if (!introKeys.every((key) => typeof intro[key] === "string")) {
      return false;
    }

    if (!Array.isArray(value.technologies)) {
      return false;
    }
    for (const tech of value.technologies) {
      if (
        !isNonNullObject(tech) ||
        typeof tech.section !== "string" ||
        !isStringArray(tech.details)
      ) {
        return false;
      }
    }

    if (!Array.isArray(value.educations)) {
      return false;
    }
    for (const education of value.educations) {
      if (
        !isNonNullObject(education) ||
        typeof education.head !== "string" ||
        typeof education.details !== "string"
      ) {
        return false;
      }
    }

    if (!Array.isArray(value.experiences)) {
      return false;
    }
    for (const experience of value.experiences) {
      if (
        !isNonNullObject(experience) ||
        typeof experience.position !== "string" ||
        typeof experience.company !== "string" ||
        typeof experience.date !== "string" ||
        !isStringArray(experience.details) ||
        typeof experience.url !== "string" ||
        typeof experience.github !== "string"
      ) {
        return false;
      }
    }

    if (!Array.isArray(value.projects)) {
      return false;
    }
    for (const project of value.projects) {
      if (
        !isNonNullObject(project) ||
        typeof project.name !== "string" ||
        typeof project.date !== "string" ||
        !isStringArray(project.details) ||
        typeof project.url !== "string" ||
        typeof project.github !== "string"
      ) {
        return false;
      }
    }

    if (!Array.isArray(value.activities)) {
      return false;
    }
    for (const activity of value.activities) {
      if (
        !isNonNullObject(activity) ||
        typeof activity.name !== "string" ||
        typeof activity.date !== "string" ||
        !isStringArray(activity.details)
      ) {
        return false;
      }
    }

    return true;
  }

  let editMode = false;
  let showHeader = false;
  let temporaryEditMode = false;
  let draftError = "";
  let resumeDraft: ResumeDraft = createInitialDraft();
  let draftJson = JSON.stringify(resumeDraft, null, 2);
  let reopenEditorAfterPrint = false;

  function toggleMode() {
    editMode = !editMode;
  }

  function toggleTemporaryEdit() {
    temporaryEditMode = !temporaryEditMode;
    draftError = "";

    if (temporaryEditMode) {
      draftJson = JSON.stringify(resumeDraft, null, 2);
    }
  }

  function applyTemporaryChanges() {
    let parsed: unknown;

    try {
      parsed = JSON.parse(draftJson);
    } catch (_error) {
      draftError = "Invalid JSON format. Please fix syntax and try again.";
      return;
    }

    if (!isResumeDraft(parsed)) {
      draftError =
        "Invalid resume schema. Keep keys and value types aligned with the current structure.";
      return;
    }

    resumeDraft = cloneDraftData(parsed);
    draftError = "";
  }

  function resetTemporaryChanges() {
    resumeDraft = createInitialDraft();
    draftJson = JSON.stringify(resumeDraft, null, 2);
    draftError = "";
  }

  function exportPdf() {
    reopenEditorAfterPrint = temporaryEditMode;
    temporaryEditMode = false;
    window.print();
  }

  onMount(() => {
    const onAfterPrint = () => {
      if (reopenEditorAfterPrint) {
        temporaryEditMode = true;
        reopenEditorAfterPrint = false;
      }
    };

    window.addEventListener("afterprint", onAfterPrint);

    return () => {
      window.removeEventListener("afterprint", onAfterPrint);
    };
  });
</script>

{#if showHeader}
  <div class="web-only absolute top-0 right-0 p-4 z-50">
    <button
      on:click={() => (showHeader = false)}
      class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded shadow"
    >
      Hide
    </button>
  </div>
  <header
    class="web-only text-center p-4 sm:p-6 bg-green-500 text-white w-screen"
  >
    <h1 class="text-4xl mb-3">Resumette</h1>
    <h3 class="flex flex-wrap justify-center gap-3">
      <button on:click={toggleMode} class="underline text-lg">
        {editMode ? "[View]" : "[Edit]"}
      </button>
      <button on:click={toggleTemporaryEdit} class="underline text-lg">
        {temporaryEditMode ? "[Close Temporary Edit]" : "[Temporary Edit]"}
      </button>
      <button on:click={exportPdf} class="underline text-lg">
        [Export PDF]
      </button>
    </h3>
    <p>
      Printer-friendly standard résumé template by
      <a href="https://github.com/narze/resume">narze</a> (used
      <a href="https://github.com/Leomotors/resumette">Leomotor</a>'s version of
      the template), any HTML tags with
      <code>web-only</code> CSS class will be hidden on print.
    </p>
    <p>
      You can toggle
      <button on:click={toggleMode} class="underline"> [Edit Mode] </button>
      to hide some sections before printing, or use
      <button on:click={toggleTemporaryEdit} class="underline">
        [Temporary Edit]
      </button>
      for session-only edits that reset on refresh.
    </p>
    (<a href={sourceLink} target="_blank" rel="noopener">Source</a>)
  </header>
{:else}
  <div class="web-only absolute top-0 right-0 p-4 z-50">
    <button
      on:click={() => (showHeader = true)}
      class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded shadow opacity-50 hover:opacity-100"
    >
      Menu
    </button>
  </div>
{/if}

{#if temporaryEditMode}
  <section class="web-only temporary-editor-panel">
    <h2 class="temporary-editor-title">Temporary Resume Editor</h2>
    <p class="temporary-editor-note">
      Changes are local to this tab and will not persist after refresh or
      closing the app.
    </p>
    <textarea bind:value={draftJson} spellcheck="false" />
    {#if draftError}
      <p class="temporary-editor-error">{draftError}</p>
    {/if}
    <div class="temporary-editor-actions">
      <button on:click={applyTemporaryChanges}>Apply Changes</button>
      <button on:click={resetTemporaryChanges}>Reset to Original</button>
      <button on:click={exportPdf}>Export PDF</button>
      <button on:click={toggleTemporaryEdit}>Close</button>
    </div>
  </section>
{/if}

<main
  class="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl {editMode
    ? 'edit-mode'
    : 'display-mode'}"
>
  <Intro {...resumeDraft.introData} />

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left mb-2">Skills</h2>
    <hr />

    <table class="text-left items-start table table-fixed">
      {#each resumeDraft.technologies as tech}
        <tr>
          <HideToggle />
          <td class="align-top pl-4 w-[11rem] print:w-36">
            <span class="w-36 print:w-32">• {tech.section}</span>
          </td>
          <td>
            {#each tech.details as item, index}
              {#if index > 0}
                •
              {/if}
              <span>
                {item}
              </span>
            {/each}
          </td>
        </tr>
      {/each}
    </table>
  </section>

  <!--
  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left mb-2">Work Experience</h2>
    <hr />

    {#each workExperiences as exp}
      <Work {...exp} />
    {/each}
  </section>
  -->

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left mb-2">Education</h2>
    <hr />

    <ul>
      {#each resumeDraft.educations as edu}
        <li>
          <HideToggle />
          <strong>{edu.head}</strong>, {edu.details}
        </li>
      {/each}
    </ul>
  </section>

  <!--
  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left mb-2">Certifications</h2>
    <hr />

    <div class="flex">
      {#each certs as cert}
        <HideToggle />
        <a href={cert.url} target="_blank">
          <img
            alt="aws"
            src={cert.image}
            class="print:h-20 print:w-20 h-28 w-28"
          />
        </a>
      {/each}
    </div>
  </section>
  -->

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left mb-2">Experience</h2>
    <hr />

    <ul>
      {#each resumeDraft.experiences as experience}
        <li class="mb-4">
          <HideToggle />
          <div class="flex justify-between items-baseline">
            <div class="text-left">
              <span class="font-bold text-lg leading-tight"
                >{experience.position}</span
              >
              <span class="mx-1 text-gray-500">|</span>
              <span class="text-base font-semibold text-gray-700">
                {#if experience.url !== ""}
                  <a
                    href={`${experience.url}`}
                    target="_blank"
                    rel="noreferrer"
                    class="hover:underline"
                  >
                    {experience.company}
                  </a>
                {:else}
                  {experience.company}
                {/if}
              </span>
            </div>
            <div class="italic text-sm shrink-0 text-right ml-4">
              {experience.date}
            </div>
          </div>

          <div class="mt-2 text-justify">
            {#if experience.details}
              <ul class="list-disc pl-5 space-y-1">
                {#each experience.details as detail}
                  <li>
                    <HideToggle />
                    <!-- <strong>•</strong> -->
                    <span class="print:text-sm">{detail}</span>
                  </li>
                {/each}
              </ul>
            {:else}
              No details provided.
            {/if}
          </div>
          {#if experience.github}
            <div class="mt-1">
              <a
                href="https://{experience.github}"
                target="_blank"
                rel="noreferrer"
                class="text-sm text-gray-500 hover:text-black"
              >
                GitHub: {experience.github}
              </a>
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left mb-2">Projects</h2>
    <hr />

    <ul>
      {#each resumeDraft.projects as project}
        <li>
          <HideToggle />
          {#if project.url !== ""}
            <a href={`${project.url}`} target="_blank" rel="noreferrer">
              <strong>{project.name}</strong>
            </a> <i>{project.date}</i>
          {:else}
            <strong>{project.name}</strong> <i>{project.date}</i>
          {/if}
          <p>
            {#if project.details}
              <ul>
                {#each project.details as detail}
                  <li>
                    <HideToggle />
                    <strong>•</strong>
                    {detail}
                  </li>
                {/each}
              </ul>
            {:else}
              No details provided.
            {/if}
          </p>
          <a href="https://{project.github}" target="_blank" rel="noreferrer">
            <strong>{project.github}</strong>
          </a>
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left mb-2">
      Activities & Awards
    </h2>
    <hr />

    <ul>
      {#each resumeDraft.activities as act}
        <li>
          <HideToggle />
          <strong>{act.name}</strong> <i>{act.date}</i>
          <ul>
            {#each act.details as detail}
              <li>
                <HideToggle />
                <strong>•</strong>
                {detail}
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </section>

  <!-- <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left mb-2">Interests</h2>
    <hr />

    <ul>
      {#each interests as interest}
        <li>
          <HideToggle />
          <strong>{interest.name}</strong> - <i>{interest.details}</i>
        </li>
      {/each}
    </ul>
  </section> -->

  <footer class="print-only">
    (See in <a href={fullVersionLink} target="_blank" rel="noopener">web</a>
    for a more updated version or view
    <a href={sourceLink} target="_blank" rel="noopener">source code</a>)
  </footer>
</main>

<style lang="postcss">
  main {
    overflow-x: hidden;
  }

  a {
    text-decoration: underline;
  }

  section {
    @apply my-4;
  }

  section h2 {
    @apply font-semibold;
  }

  section hr {
    @apply mt-0 mb-2;
    border-color: darkgrey;
  }

  section > ul {
    @apply text-left list-disc pl-8;
  }

  :global(.print-only) {
    display: none;
  }

  :global(main.display-mode .hide-toggle) {
    display: none;
  }

  li {
    margin: 10px;
  }

  .temporary-editor-panel {
    @apply max-w-screen-xl mx-auto my-4 p-4 rounded border border-gray-300 bg-gray-50 text-left;
  }

  .temporary-editor-title {
    @apply text-xl font-semibold;
  }

  .temporary-editor-note {
    @apply text-sm text-gray-700 mt-1 mb-3;
  }

  .temporary-editor-panel textarea {
    width: 100%;
    min-height: 300px;
    resize: vertical;
    border: 1px solid #9ca3af;
    border-radius: 0.375rem;
    padding: 0.75rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    font-size: 0.85rem;
    line-height: 1.35;
    background: #fff;
  }

  .temporary-editor-error {
    @apply text-sm text-red-600 mt-2;
  }

  .temporary-editor-actions {
    @apply mt-3 flex flex-wrap gap-2;
  }

  .temporary-editor-actions button {
    @apply px-3 py-1 rounded border border-gray-400 bg-white hover:bg-gray-100;
  }

  @media print {
    * {
      @apply text-xs;
    }

    :global(.print-only) {
      display: none;
    }

    :global(.web-only) {
      display: none;
    }

    ul {
      @apply pl-6;
    }

    section {
      @apply my-2;
    }

    section hr {
      @apply mt-0 mb-1;
    }

    main {
      margin: 0;
      padding: 10px;
    }

    li {
      margin: 10px;
    }

    @page {
      margin: 10px; /* Removes default margins for the printed page */
    }
  }
</style>
