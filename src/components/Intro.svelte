<script lang="ts">
  export let name = "";
  export let jobTitle = "";
  export let phone = "";
  export let email = "";
  export let github = "";
  export let linkedin = "";
  export let location = "";
  export let website = "";
</script>

<div
  class="flex flex-wrap flex-col sm:flex-row print:flex-row
         items-start sm:items-start print:items-center
         text-sm sm:text-base gap-y-2 print:gap-y-0 w-full"
>
  <!-- ▸ Left block ---------------------------------------------------- -->
  <div
    class="flex-1 w-48 text-left leading-tight
           sm:py-4 print:py-0 print:text-[9pt]"
  >
    <p><a href="tel:{phone}">{phone}</a></p>
    <p><a href="mailto:{email}">{email}</a></p>
    <p>{location}</p>
  </div>

  <!-- ▸ Name ---------------------------------------------------------- -->
  <h2
    class="flex-none order-first sm:order-none print:order-none
           text-4xl sm:text-2xl md:text-3xl lg:text-6xl
           print:text-3xl print:leading-snug print:m-0 print:p-0
           text-center sm:text-left"
  >
    {name}
    <span class="block text-base lg:text-2xl print:text-base">
      {jobTitle}
    </span>
  </h2>

  <!-- ▸ Right block --------------------------------------------------- -->
  <div
    class="flex-1 w-48 text-left sm:text-right print:text-right
           leading-tight
           sm:py-4 print:py-0 print:text-[9pt]"
  >
    <p>
      <a href="https://github.com/{github}" target="_blank" rel="noreferrer">
        github.com/{github}
      </a>
    </p>
    {#if website}
      <p>
        <a href="https://{website}" target="_blank" rel="noreferrer">
          {website}
        </a>
      </p>
    {/if}
    <p>
      <a
        href="https://linkedin.com/in/{linkedin}"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </p>
  </div>
</div>

<style lang="postcss">
  a {
    text-decoration: underline;
  }

  /* ───────────────────────── PRINT ONLY ───────────────────────── */
  @media print {
    /* kill default paragraph spacing */
    p {
      margin: 0;
    }

    /* tighten vertical whitespace across the intro */
    .leading-tight {
      line-height: 1.15;
    }
  }
</style>
