<script>
import { createEventDispatcher } from "svelte"
import { v4 as uuid } from "uuid"

import Button from "../shared/Button.svelte"

const fields = { question: "", answerA: "", answerB: "" }
const errors = { question: "", answerA: "", answerB: "" }

const dispatch = createEventDispatcher()

const getQuestionErrors = (q) => q.trim().length < 5 ? "Question must be at least 5 characters long" : ""

const getAnswerAErrors = (a) => a.trim().length < 1 ? "Answer A cannot be empty" : ""

const getAnswerBErrors = (a) => a.trim().length < 1 ? "Answer B cannot be empty" : ""

const validateFormByErrors = (errors) => {
  const values = Object.values(errors)
  const errorMessages = values.filter(e => e !== "")
  return errorMessages.length === 0
}

const handleSubmit = (e) => {
  e.preventDefault()
  errors.question = getQuestionErrors(fields.question)
  errors.answerA = getAnswerAErrors(fields.answerA)
  errors.answerB = getAnswerBErrors(fields.answerB)
  const isValidForm = validateFormByErrors(errors)
  if (isValidForm) {
    const poll = { ...fields, id: uuid() , voteA: 0, voteB: 0 }
    dispatch("add", poll)
  }
}
</script>

<!--
<pre>{JSON.stringify(fields, null, 4)}</pre>
<pre>{JSON.stringify(errors, null, 4)}</pre>
-->

<form on:submit="{handleSubmit}">
  <div class="form-group">
    {#if errors.question}
      <div class="error">{errors.question}</div>
    {/if}
    <input type="text" id="question" bind:value="{fields.question}" />
    <label for="question">Poll Question</label>
  </div>
  <div class="form-group">
    {#if errors.answerA}
      <div class="error">{errors.answerA}</div>
    {/if}
    <input type="text" id="answer-a" bind:value="{fields.answerA}" />
    <label for="answer-a">Answer A</label>
  </div>
  <div class="form-group">
    {#if errors.answerB}
      <div class="error">{errors.answerB}</div>
    {/if}
    <input type="text" id="answer-b" bind:value="{fields.answerB}" />
    <label for="answer-b">Answer B</label>
  </div>
  <Button type="primary">Add Poll</Button>
</form>

<style>
form {
  width: 400px;
  margin: 0 auto;
  color: var(--gray);
}

.form-group {
  padding: 0 0 23px 0;
  display: flex;
  flex-direction: column-reverse;
}

label {
  padding-bottom: 8px;
}

input[type="text"]:focus + label {
  color: var(--red);
}

input[type="text"] {
  background-color: var(--gray);
  border: 2px solid transparent;
  border-radius: 3px;
  width: 100%;
  padding: 7px 12px;
  outline: none;
  margin-bottom: 0.4rem;
}

input[type="text"]:hover,
input[type="text"]:focus {
  background-color: var(--lightGray);
  border-color: var(--lightGray);
  box-shadow: 0px 0px 0px 3px var(--red);
}

.error:before {
  content: "*";
  position: relative;
  top: 2px;
  margin-right: 6px;
}

.error {
  color: var(--red);
  opacity: 0.9;
}
</style>
