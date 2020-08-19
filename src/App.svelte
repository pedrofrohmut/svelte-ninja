<script>
import { v4 as uuid } from "uuid"

import Header from "./components/Header.svelte"
import Footer from "./components/Footer.svelte"
import Tabs from "./shared/Tabs.svelte"
import PollList from "./components/PollList.svelte"
import AddPollForm from "./components/AddPollForm.svelte"

const items = Object.freeze(["Current Polls", "Add New Poll"])

let activeItem = items[0]
let polls = [
  {
    id: uuid(),
    question: "Python or JavaScript?",
    answerA: "Python",
    answerB: "JavaScript",
    votesA: 9,
    votesB: 15
  },
  {
    id: uuid(),
    question: "Do you like cinnamon?",
    answerA: "Yes",
    answerB: "No",
    votesA: 7,
    votesB: 2
  },
  {
    id: uuid(),
    question: "How do you like your heath care?",
    answerA: "Public",
    answerB: "Private",
    votesA: 16,
    votesB: 18
  },
  {
    id: uuid(),
    question: "What is your favorite fish for sushi?",
    answerA: "Salmon",
    answerB: "Tuna",
    votesA: 25,
    votesB: 79
  }
]

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
    <PollList on:vote={handleVote} {polls} />
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
