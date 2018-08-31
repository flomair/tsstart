



export const getRowData = (row: Object, values: string[]) => {

    const rowOut: any[] = [];
    values.forEach(key => {
        if (!row.hasOwnProperty(key))
            rowOut.push(null);
        rowOut.push(row[key])
    })
    rowOut.push(row)
    return rowOut
}

export const groupArrayByKey = (data: any[], key: string, values: string[],seriesTmpl:any) => {
    const list = {}, series: any = [];

    /* group by key */
    data.forEach((row: any) => {
        if (!row.hasOwnProperty(key))
            return;

        if (!list[row[key]])
            list[row[key]] = {data: []};

        list[row[key]].data.push(getRowData(row, values))
    });


    /* get array key with template, lenght ,name  for each key */
    for (const key in list) {
        if (list.hasOwnProperty(key)) {
            list[key].length = list[key].data.length;
            list[key].name = key;

            series.push({ ...seriesTmpl,...list[key]})
        }
    }
    return series.sort((a: any, b: any) => b.length - a.length);
}



















const timePad = (time: number) => {
    return (time >= 10) ? time : `0${time}`
}


export const getTime = (dateIn: Date, withSeconds: boolean = false) => {

    const date = new Date(dateIn);


    return `${timePad(date.getHours())}:${timePad(date.getMinutes())}${withSeconds ? ':' + timePad(date.getSeconds()) : ''}`
}



export const getSeries = (data: any[], template: any) => {
    const series: any[] = [],
        ledgends: any[] = []

    data.forEach((element, id) => {
        series[id] = element.data;
        ledgends[id] = element.key
    });


    return series.map((data, index) => {
        return { ...template, data, name: ledgends[index] }
    })
}