import {Types} from '../action-types';
import { Tree } from '../../models/tree.model';


export const treeFetch = () => {
  return {
    type: Types.tree_FetchFull
  };
};

export const treeFetchSuccess = (result: Array<Tree>) => {
  return {
    type: Types.tree_FetchFullSucces,
    payload: result
  };
};

export const treeFetchError = (error: Error) => {
  return {
    type:Types.tree_FetchFullError,
    payload: error
  };
};