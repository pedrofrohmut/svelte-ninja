<script>
import PollStore from "../stores/PollStore"
import PollListItem from "./PollListItem.svelte"
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <PollListItem {poll} />
  {/each}
</div>

<style>
.poll-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
}
</style>
