<script>
import { createEventDispatcher } from "svelte"

import Card from "../shared/Card.svelte"

export let poll

$: totalVotes = poll.votesA + poll.votesB
$: percentA = Math.floor((poll.votesA / totalVotes) * 100)
$: percentB = Math.floor((poll.votesB / totalVotes) * 100)

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
      <div class="percent percent-a" style="width: {percentA}%" />
      <div class="answer-text">{poll.answerA} ({poll.votesA})</div>
    </div>
    <div class="answer" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b" style="width: {percentB}%" />
      <div class="answer-text">{poll.answerB} ({poll.votesB})</div>
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
  margin-bottom: 12px;
  color: var(--lightGray);
  font-weight: 600;
}

.answer:hover {
  opacity: 0.6;
}

.answer-text {
  display: inline-block;
  padding: 12px 0 7px;
  z-index: -1;
}

.percent {
  position: absolute;
  top: calc(100% + 4px);
  height: 5px;
}

.percent-a {
  border-left: 4px solid var(--red);
  background-color: rgba(217, 27, 66, 0.7);
}

.percent-b {
  border-left: 4px solid var(--green);
  background-color: rgba(69, 196, 150, 0.7);
}
</style>
