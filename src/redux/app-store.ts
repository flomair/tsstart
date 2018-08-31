import {applyMiddleware, createStore, Store} from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from "./root-saga"
import {state} from "./app-state";
import {AppState} from "./app-state.model";



const sagaMiddleware = createSagaMiddleware()


export const appStore : Store<AppState> = 
	createStore(state, composeWithDevTools(applyMiddleware(sagaMiddleware)));


	sagaMiddleware.run(rootSaga)