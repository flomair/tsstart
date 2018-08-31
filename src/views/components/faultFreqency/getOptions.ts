import * as moment from 'moment'
import * as echarts  from "echarts";

import { getTime } from './utils'
import Tooltip from './tooltip';



function renderItem(params: any, api: any) {
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var height = api.size([0, 1])[1] * 0.8;

    return {
        type: 'rect',
        shape: echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - height / 2,
            width: 2,
            height: height
        }, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            }),
        style: api.style()
    };
}




export default (series: any[], categories: any[],ledgend:any[]) => {

    return {
        legend: {
           
           
        },
        tooltip: {
            backgroundColor: 'rgba(0,0,0,0)',
            formatter: Tooltip,
            axisPointer: {
                type: 'line',
                snap: true,
                axis:'x',
                label: {
                    precision: 0
                }
            }
        },
        dataZoom: [{
            type: 'slider',
            showDataShadow: false,
            labelFormatter: (value: Date) => getTime(value)

        }, {
            type: 'inside',
        },],
        grid: {
            left: 150,
           // height: 1500
           
        },
        xAxis: {
            type: 'time',
            min: moment(series[0].value[1]).startOf('day').add(2,'hours').toISOString(),
            max: moment(series[0].value[1]).endOf('day').add(2,'hours').add(1,'minutes').toISOString(),
            scale: true,
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: (value: Date) => getTime(value)
            },
            axisPointer: {
                label: {
                    formatter: ({ value }: { value: Date }) => getTime(value)
                }
            }

        },
        yAxis: {
            inverse: true,
            data: categories,
            scale: true,
            axisLabel:{
                width: 300,
               // backgroundColor: 'rgba(255,0,0,1)'
               formatter : (value : string, index:number) => {
                   const [name,count] = value.split('$$')
                    return `${index+1}. ${name}  (${count} x)`
               },
            },
            splitLine: {
                show: true,
                lineStyle:{
                    color: '#333',
                    width: 1,
                }
            },
            axisTick:{
                length: 150,
                
                lineStyle:{
                    color: '#333',
                    width: 1,
                }
            },
        },
        series: [{
            type: 'custom',
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    opacity: 1
                }
            },
            encode: {
                x: 1,
                y: 0
            },
            data: series
        }]
    };
}