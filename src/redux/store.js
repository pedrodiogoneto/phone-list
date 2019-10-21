import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

import createSagaMiddleware from 'redux-saga';
import phonesSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(phonesSaga);

	return store
}


