<script>
  export let value;
  export let placeholder;
  export let label = 'Text';
</script>

<div class="container">
  <span>{label}</span>
  <label>
    <textarea cols="50" rows="8" bind:value={value}></textarea>
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
    color: #333333;
    font-weight: 300;
  }

  input {
    height: 250px;
  }
</style>