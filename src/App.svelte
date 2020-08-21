<script>
import Header from "./components/Header.svelte"
import Footer from "./components/Footer.svelte"
import Tabs from "./shared/Tabs.svelte"
import PollList from "./components/PollList.svelte"
import AddPollForm from "./components/AddPollForm.svelte"

const items = Object.freeze(["Current Polls", "Add New Poll"])
let activeItem = items[0]

const handleTabChange = (customEvent) => {
  const newTab = customEvent.detail
  activeItem = newTab
}

const handleAdd = (customEvent) => {
  const newPoll = customEvent.detail
  polls = [ ...polls, newPoll ]
  activeItem = items[0]
}

const handleVote = (customEvent) => {
  const { votedOption, voteId } = customEvent.detail
  polls.forEach(poll => {
    if (poll.id === voteId) {
      if (votedOption === "a") poll.votesA++
      if (votedOption === "b") poll.votesB++
    }
  })
  polls = polls
}
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={handleTabChange}/>
  {#if activeItem === items[0]}
    <!-- <pre>{JSON.stringify(polls, null, 2)}</pre> -->
    <PollList on:vote={handleVote} />
  {/if}
  {#if activeItem === items[1]}
    <AddPollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
main {
  max-width: 960px;
  margin: 40px auto;
}
</style>
