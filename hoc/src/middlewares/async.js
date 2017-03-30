export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload or the payload does not have a .then property
    // Fuck this shit, tooooooo weird...
    if (!action.payload || !action.payload.then){
      return next(action);
    };

    action.payload
    .then(function(response){
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  }
}
