import { createStore, compose, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["cart"],
  blacklist: ["todo"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware());

// export const store = createStore(rootReducer, enhancer);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
