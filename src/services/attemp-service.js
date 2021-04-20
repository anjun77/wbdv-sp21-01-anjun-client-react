const QUIZZES_URL = 'https://morning-depths-12919.herokuapp.com/api/quizzes'

const findAttemptsForQuiz = (qid) => {
  return fetch(`${QUIZZES_URL}/${qid}/attempts`)
  .then(response => response.json())
}

const api = {
  findAttemptsForQuiz
}

export default api;