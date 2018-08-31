import {Types} from '../action-types';
import { call, put,take} from 'redux-saga/effects';
import {treeFetchSuccess,treeFetchError } from './actions';
import {fetchTree} from '../../lib/fetchTree'
import { Tree } from '../../models/tree.model';

export function* fetchTreeSaga() {
  try {
    const result: Array<Tree> = yield call(fetchTree);
    yield put(treeFetchSuccess(result));
  } catch (err) {
    yield put(treeFetchError(err));
  }
}


export function* sampleWatcher() {
  while (true) {
    yield take(Types.tree_FetchFull);
    yield call(fetchTreeSaga);
  }
}