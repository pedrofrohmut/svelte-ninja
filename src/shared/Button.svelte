<script>
export let type = "primary"
export let inverse = false
</script>

<button class={type} class:inverse={inverse}>
  <slot></slot>
</button>

<style>
button {
  font-weight: 600;
  border-style: solid;
  border-width: 2px;
  border-radius: 3px;
  padding: 6px 30px;
  font-size: 1.1rem;
  outline: none;
  cursor: pointer;
}

.primary {
  background-color: var(--darkGray);
  color: var(--lightGray);
  border-color:  var(--lightGray);
}

.primary:hover,
.primary:focus {
  color: var(--red);
  border-color: var(--red);
  box-shadow: 0px 0px 0px 2px var(--red);
}

.secondary {
  background-color: var(--darkGray);
  color: var(--gray);
  border-color: var(--gray);
}

.secondary:hover,
.secondary:focus {
  color: var(--lightGray);
  border-color: var(--lightGray);
  box-shadow: 0px 0px 0px 2px var(--lightGray);
}

.primary.inverse {
  background-color: var(--lightGray);
  color: var(--darkGray);
  border-color:  var(--lightGray);
}

.primary.inverse:hover,
.primary.inverse:focus {
  color: var(--lightGray);
  background-color: var(--red);
  border-color: var(--red);
  box-shadow: 0px 0px 0px 2px var(--red);
}

.secondary.inverse {
  background-color: var(--gray);
  color: var(--darkGray);
  border-color: var(--gray);
}

.secondary.inverse:hover,
.secondary.inverse:focus {
  color: var(--darkGray);
  background-color: var(--lightGray);
  border-color: var(--lightGray);
  box-shadow: 0px 0px 0px 2px var(--lightGray);
}
</style>
