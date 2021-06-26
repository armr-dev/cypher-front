<script>
    export let label = '';
    export let text = ''
</script>

<main>
    <div class="container">
        <span>{label}</span>
        <div class="p-wrapper">
            <p>{text}</p>
        </div>
    </div>
</main>

<style>
    .container {
        width: 510px;
        display: flex;
        flex-direction: column;
    }

    span {
        margin-bottom: 0.25rem;
        color: #333333;
        font-weight: 300;
    }

    .p-wrapper {
        font-family: Consolas, monaco, monospace;
        padding: 0.5rem;
        border: 1px #999999 dashed;
    }

    p {
        margin: 0;
        color: #333333;
        font-weight: 300;
    }
</style>