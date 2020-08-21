import { v4 as uuid } from "uuid"
import { writable } from "svelte/store"

const PollStore = writable([
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
])

export default PollStore
