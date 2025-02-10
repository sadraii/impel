<script>
  import { onMount } from 'svelte';
  
  let entries = [];
  
  async function createEntry() {
    try {
      const response = await fetch('/api/generatekv');
      const data = await response.json();
      entries = [...entries, data];
    } catch (error) {
      console.error('Failed to create entry:', error);
    }
  }
  
  onMount(() => {
    createEntry();
  });
</script>

<h1>KV Entry Generator</h1>

<div>
  <button on:click={createEntry}>Create New Entry</button>
  
  <ul>
    {#each entries as entry}
      <li>Key: {entry.key} - Value: {entry.value}</li>
    {/each}
  </ul>
</div>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 8px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
