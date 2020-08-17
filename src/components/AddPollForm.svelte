<script>
const fields = {
  question: "",
  answerA: "",
  answerB: ""
}

const handleSubmit = (e) => {
  e.preventDefault()
}
</script>

<form on:submit="{handleSubmit}">
  <div class="form-group">
    <label for="question">Poll Question</label>
    <input type="text" id="question" bind:value="{fields.question}" />
  </div>
  <div class="form-group">
    <label for="answer-a">Answer A</label>
    <input type="text" id="answer-a" bind:value="{fields.answerA}" />
  </div>
  <div class="form-group">
    <label for="answer-b">Answer B</label>
    <input type="text" id="answer-b" bind:value="{fields.answerB}" />
  </div>
  <input type="submit" value="Add Poll" />
</form>

<style>
form {
  width: 400px;
  margin: 0 auto;
  color: var(--gray);
}

.form-group {
  padding: 0 0 23px 0;
}

label {
  padding-bottom: 8px;
}

input[type="text"] {
  background-color: var(--gray);
  border: 2px solid transparent;
  width: 100%;
  padding: 7px 12px;
  outline: none;
}

input[type="text"]:hover,
input[type="text"]:focus {
  background-color: var(--lightGray);
  border-color: var(--lightGray);
  box-shadow: 0px 0px 0px 2px var(--lightGray);
}

input[type="submit"] {
  background-color: transparent;
  color: var(--gray);
  font-weight: 600;
  border: 2px solid var(--gray);
  padding: 6px 30px;
  font-size: 1.1rem;
  outline: none;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
  color: var(--lightGray);
  border-color: var(--lightGray);
  box-shadow: 0px 0px 0px 2px var(--lightGray);
}
</style>
