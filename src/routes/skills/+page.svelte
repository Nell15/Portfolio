<script>
    import lang_file from '$assets/components/langs.json';
    import SkillsTab from '../../assets/components/skills/SkillsTab.svelte';

    let categories = lang_file.categories;
    let langs = lang_file.langages;
    let path = '/langages/';
</script>

<main>
    <h1>Skills</h1>
    {#each categories as category}
        <SkillsTab category={category} langs={langs} path={path}></SkillsTab>
    {/each}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background-color: #fafbfe;
        gap: 2rem;
        margin-bottom: 5rem;
    }
</style>
