import  { Loading } from  './loading.model'

export interface Tree{
   readonly loading : Loading;
   readonly data : Node[];
  
}

export interface Node{
     id: any;
     name: string;
     children?: Node[],
     state?: {
        deletable?: boolean,
        favorite?: boolean,
        expanded? : boolean
      },
}


export interface TreeAction{
    type: string;
    payload? : Tree[];
    meta: object;
}