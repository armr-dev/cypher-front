<script>
  export let selectedValue;
  export let options;
</script>

<div class="container">
    <span>
        bacon
    </span>
    <label>
        <select bind:value={selectedValue}>
            {#each options as option}
                <option value={option.id}>
                    {option.text}
                </option>
            {/each}
        </select>
    </label>
</div>

<style>
    .container {
        width: fit-content;
        display: flex;
        flex-direction: column;
    }

    span {
        margin-bottom: 0.25rem;
        text-transform: capitalize;
        color: #333333;
        font-weight: 300;
    }

    select {
        min-width: 250px;
        background-color: white;
    }
</style>