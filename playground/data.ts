import dataIn from '../src/views/components/scatterChart/data'



const getRowData = (row: Object,values: string[] ) =>{

   const rowOut :any[] =[];
    values.forEach(key =>{
        if(!Object.getOwnPropertyNames(row).includes(key))
            rowOut.push(null);
        rowOut.push(row[key])
    })
    return rowOut
}

const groupeArrayByKey= (data: any[],key:string,values: string[]) =>{
    const list = {};

    data.forEach((row :any) => {
        console.log(Object.getOwnPropertyNames(row).includes(key),Object.getOwnPropertyNames(row))
        if(!Object.getOwnPropertyNames(row).includes(key))
            return;

        if(list[row[key]]){
            list[row[key]].push(getRowData(row,values))
        }else{
            list[row[key]]= [getRowData(row,values)]
        }
    });
    console.log(list)
    return {data: Object.values(list), keys:Object.keys(list)};
}

const {data,keys} = groupeArrayByKey(dataIn,'position',['id','position','time','error'])




const seriesTmpl = {
    symbolSize: 2,
    type: 'scatter',
    symbol:'rect'
}


const series = data.forEach((type:any,index)=>{
    return {...seriesTmpl, data:type}
})



console.log(series,keys)