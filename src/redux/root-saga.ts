import {sampleWatcher} from './tree/sagas';

export default function* rootSaga() {
  yield [
    sampleWatcher()
  ];
}