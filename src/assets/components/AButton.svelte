<script>
    export let text;
    export let link;
    export let textColor;
    export let buttonColor;
</script>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
</head>

<a href={link}><button style="--text-color: {textColor}; --button-color: {buttonColor}">{text}</button></a>

<style>
    button {
        color: var(--text-color);
        font-size: 1em;
        background-color: transparent;
        border-radius: 2em;
        border: solid;
        border-width: 3px;
        border-color: var(--button-color);
        text-align: center;
        padding: 0.5em 25px;
        width: 9rem;
        height: 3em;
        transition: all 0.5s;
        cursor: pointer;
        position: relative;
    }

    button:after {
        content: '»';
        color: var(--text-color);
        position: absolute;
        opacity: 0;  
        right: -1.4em;
        transition: 0.5s;
    }

    button:hover{
    padding-right: 24px;
    padding-left: 8px;
    }

    button:hover:after {
    opacity: 1;
    right: 10px;
    }
</style>
