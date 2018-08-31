import * as moment from 'moment'

import { getTime } from './utils'
import Tooltip from './tooltip';

export default (series: any[]) => {
    return  {
        legend: {
            show : false,
            type: 'scroll',
            orient: 'vertical',
            right: 'right',
            top: 60,
            //bottom: 20,
            data: series.map(serie =>{
                return serie.name
            }),
            //orient: 'vertical'
            textstyle:{
                width : 20
            }
        },
        grid:
        {
            x: '5%',
            y: '2%',
            width: '93%',
            //  height: '38%'
        },
    
        title: {
            show: false,
            height: 0
        },
    
        tooltip: {
            backgroundColor: 'rgba(255,0,0,1)',
            padding:0,
            position:'top',
            formatter: Tooltip,
            axisPointer: {
                type: 'cross',
                snap: true,
                label: {
                    precision: 0
                }
            }
        },
        xAxis: {
            type: 'time',
            splitNumber: 12,
            axisLabel: {
                formatter: (value: Date) => getTime(value)
            },
            min: moment(series[0].data[0][0]).startOf('day').toISOString(),
            max: moment(series[0].data[0][0]).endOf('day').toISOString(),
            axisPointer: {
                label: {
                    formatter: ({ value }: { value: Date }) => getTime(value)
                }
            }
        },
        yAxis: {
    
        },
        dataZoom: [
            {
                type: 'slider',
                xAxisIndex: 0,
                filterMode: 'empty',
                showDataShadow: false,
                labelFormatter: (value: Date) => getTime(value)
            },
            {
                type: 'slider',
                yAxisIndex: 0,
                filterMode: 'empty',
                showDataShadow: false,
                left: 10,
                labelFormatter: (value: Date) => getTime(value)
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                filterMode: 'empty',
                // 
            },
            {
                type: 'inside',
                yAxisIndex: 0,
                filterMode: 'empty'
            }
        ],
        series,
        useUTC: true,
    };
}