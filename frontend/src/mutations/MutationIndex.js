export default {
  update: (state, props) => props.mutation(
    props._id,
    state.description,
    state.answers,
    state.theme,
    state.correctAnswer,
    () => props.history.replace('/')
  ),
  create: (state, props) => props.mutation(
    state.description,
    state.answers,
    state.theme,
    state.correctAnswer,
    () => props.history.replace('/')
  )
};
