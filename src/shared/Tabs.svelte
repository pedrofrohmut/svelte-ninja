<script>
import { createEventDispatcher } from "svelte"

export let items
export let activeItem

const dispatch = createEventDispatcher()
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li>
        <div
          class={item === activeItem ? "active" : ""}
          on:click={() => dispatch("tabChange", item)}
        >
          {item}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
.tabs {
  margin-bottom: 40px;
}

ul {
  display: flex;
  justify-content: center;
  padding: 0;
  list-style-type: none;
  font-size: 1.45rem;
  color: var(--gray);
}

li {
  margin-right: 45px;
  cursor: pointer;
}

li:last-child {
  margin-right: 0;
}

.active {
  color: var(--red);
  border-bottom: 2px solid var(--red);
  padding-bottom: 8px;
}
</style>
