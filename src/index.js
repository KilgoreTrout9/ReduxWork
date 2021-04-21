import store from './store';
import * as actions from './actions';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
})

store.dispatch(actions.bugAdded('Bug1'));
store.dispatch(actions.bugFixed(1));
store.dispatch(actions.bugRemoved(1));

console.log(store.getState());
