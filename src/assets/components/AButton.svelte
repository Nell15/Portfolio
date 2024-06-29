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
        font-family: 'Inter';
        font-size: 1em;
        padding: 9px 25px;
        background-color: transparent; 
        color: var(--text-color);
        border: solid;
        border-color: var(--button-color);
        border-radius: 50px;
        border-width: 3px;
        cursor: pointer;
        transition: all 0.3 ease 0s;
    }
</style>
