<script lang="ts">
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

  let editMode = false;
  let showHeader = false;

  function toggleMode() {
    editMode = !editMode;
  }
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
    <h3>
      <button on:click={toggleMode} class="underline text-lg">
        {editMode ? "[View]" : "[Edit]"}
      </button>
      <button on:click={() => window.print()} class="underline text-lg">
        [Print]
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
      to hide some sections before printing.
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

<main
  class="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl {editMode
    ? 'edit-mode'
    : 'display-mode'}"
>
  <Intro {...introData} />

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left mb-2">Skills</h2>
    <hr />

    <table class="text-left items-start table table-fixed">
      {#each technologies as tech}
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
      {#each educations as edu}
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
      {#each experiences as experience}
        <li>
          <HideToggle />
          {#if experience.url !== ""}
            <a href={`${experience.url}`} target="_blank" rel="noreferrer">
              <strong>{experience.name}</strong>
            </a> <i>{experience.date}</i>
          {:else}
            <strong>{experience.name}</strong> <i>{experience.date}</i>
          {/if}
          <p>
            {#if experience.details}
              <ul>
                {#each experience.details as detail}
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
          {#if experience.github}
            <a
              href="https://{experience.github}"
              target="_blank"
              rel="noreferrer"
            >
              <strong>{experience.github}</strong>
            </a>
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
      {#each projects as project}
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
      {#each activities as act}
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
