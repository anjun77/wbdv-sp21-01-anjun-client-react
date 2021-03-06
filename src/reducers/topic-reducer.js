const initialState = {
  topics: []
}

const topicReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_TOPIC":
      return {
        ...state,
        topics: [
          ...state.topics,
          action.topic
        ]
      }
    case "FIND_TOPICS_FOR_LESSON":
      return {
        ...state,
        topics: action.topics
      }

    case "DELETE_TOPIC":
      return {
        ...state,
        topics: state.topics.filter(topic => {
          if(topic._id === action.topicToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
    case "UPDATE_TOPIC":
      return {
        ...state,
        topics: state.topics.map(t => {
          if(t._id === action.updateTopic._id) {
            return action.updateTopic
          } else {
            return t
          }
        })
      }
    case "CLEAR_TOPIC":
      return {
        initialState
      }
    default:
      return state
  }
}
export default topicReducer