<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class="p-4 border rounded-md border-opacity-80 border-indigo-900 hover:border-indigo-500 hover:bg-slate-800 transition-all duration-300">
  count is {count}
</button>
