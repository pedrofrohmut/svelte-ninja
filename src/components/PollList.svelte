<script>
import { fade, scale } from "svelte/transition"
import { flip } from "svelte/animate"

import PollStore from "../stores/PollStore"
import PollListItem from "./PollListItem.svelte"
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div class="style-wrapper" in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollListItem {poll} />
    </div>
  {/each}
</div>

<style>
.poll-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
}
</style>
