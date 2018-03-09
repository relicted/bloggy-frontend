import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer , persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import storage from 'redux-persist/lib/storage';

import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middlewares = [thunk, promise];
//
// export default () => {
//
//   let store = createStore(
//     persistedReducer,
//     composeWithDevTools(applyMiddleware(...middlewares))
//   );
//   let persistor = persistStore(store);
//   return {store, persistor}
//
// }

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store)