

import { Types } from '../action-types';
import {TreeAction,Tree} from '../../models/tree.model'
import {Loading} from '../../models/loading.model'


const initialState :Tree= {
  data: [],
  loading : <Loading>{
    fetching : false,
    failed: false,
    loaded:false,

  }
}

export default (state :Tree = initialState, action: TreeAction) => {
  //console.log(action)
  switch (action.type) {
    case Types.tree_FetchFull:

    return {...state, 
      loading:{
        fetching: true,
        loaded: false,
        failed: false,
        message: ''
       }
      }

   
    case Types.tree_FetchFullSucces:
  
    if(!action.payload)
       return state
    return {
      ...state,
      loading:{
        fetching: false,
        loaded: true,
        failed: false,
        message: ''
       },
       data:action.payload
      }
    
    //action.payload.map(d => d);

    default:
      return state;
  }
};