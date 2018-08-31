import {Node} from '../models/tree.model'
import data  from '../devData/treeNodes'


export const fetchTree =  (): Promise<Node[]> => {
    return new Promise<Node[]>((resolve,reject) =>{
            setTimeout(()=>{
                  resolve(data)},50)
    })  
}