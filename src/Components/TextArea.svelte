<script>
  export let value;
  export let placeholder;
  export let label;
</script>

<label>
  <textarea cols="50" rows="8" bind:value={value}></textarea>
</label>

<style>
  input {
    height: 250px;
  }
</style>