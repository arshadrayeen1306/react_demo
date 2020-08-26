import { createStore, combineReducers,compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import userReducer from './reducers/user'

const persistConfig = {
    key: 'root',
    whitelist: [
      'user',
    ],
    storage,
  };

const rootReducer = combineReducers({
    user: userReducer,
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let composeEnhancers = compose;


const store  = createStore(persistedReducer, composeEnhancers());
let persistor = persistStore(store);

export {store ,persistor}; 