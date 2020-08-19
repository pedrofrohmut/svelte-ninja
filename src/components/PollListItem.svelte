<script>
import { createEventDispatcher } from "svelte"

import Card from "../shared/Card.svelte"

export let poll

$: totalVotes = poll.votesA + poll.votesB

const dispatch = createEventDispatcher()

const handleVote = (votedOption, voteId) => {
  dispatch("vote", { votedOption, voteId })
}
</script>

<Card>
  <div class="poll">
    <div class="question">{poll.question}</div>
    <div class="total-votes">Total votes: {totalVotes}</div>
    <div class="answer" on:click={() => handleVote('a', poll.id)}>
      <div class="percent percent-a"></div>
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b"></div>
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
</Card>

<style>
.question {
  margin: 0 auto;
  color: var(--gray);
  font-size: 1.45rem;
  font-weight: 600;
}

.total-votes {
  margin-top: 6px;
  font-size: 1.1rem;
  color: #888;
  margin-bottom: 15px;
}

.answer {
  cursor: pointer;
  position: relative;
}

.answer:hover {
  opacity: 0.6;
}

span {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--gray);
}
</style>
