import * as React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';



import { groupArrayByKey } from './utils'

import data from './data.js'
import getOptions from "./getOptions";







let echartsInstance: echarts.ECharts;


const tmpl = {
    itemStyle: {
        normal: {
            color: 'rgba(255,0,0,1)'
        }
    }
}
/*
const findPosition = ((data:any[],pos:number)=>{
    return data.find((serie: any) => serie.name == pos )
})
*/
var cats: any[] = [];








const makeRow = ((node: any) => {
    return node.data.map((value: any) => {

        const ind = cats.findIndex((cat: any) => cat[0] === value[0]);
        // console.log(~ind)
        if (! ~ind) {
            cats.push([value[0], 1])
            value[0] = cats.length - 1
        } else {
            cats[ind][1]++;
            value[0] = ind
        }


        return { ...node, value, data: {} }
    })
})



const seriesAllPre = groupArrayByKey({ data, key: 'position', values: ['error', 'time', 'position', 'id'], template: tmpl, sorter: ((a: any, b: any) => a.name - b.name) })

const seriesAll: any[] = [];

seriesAllPre.forEach((dat: any) => {
    makeRow(dat).forEach((line: any) => {
        seriesAll.push(line)
    })

})

//console.log(seriesAll)
//console.log(seriesJoined)
//const series = makeRow(findPosition(seriesAll,5)),
const series = seriesAll,

    categoriesPre = cats.sort((a: any, b: any): number => {

        return b[1] - a[1]
    }).map((cat) => cat.join('$$')),
    categories = categoriesPre.slice(0, 5),
    ledgend = cats.map(cat => cat[0])

//console.log(ledgend)

//console.log(categories)








const option = getOptions(series, categories, ledgend)




const setechartsInstanceIn = (echartsInstanceIn: any) => {
    echartsInstance = echartsInstanceIn;
    console.log(echartsInstance)
    const pp = echartsInstance.getOption()
    console.log(pp)
    /*
        setInterval((any) =>{
          const pp =   echartsInstance.dispatchAction({
                type: 'legendToggleSelect',
                // legend name
                name: 'Green'
            })
            console.log(pp)
        },1000)
        
            setInterval(()=>{
                const mm = Math.round(Math.random() * seriesAll.length );
                const mm2 = Math.round(Math.random() * mm );
                console.log(mm2,mm)
                const series = seriesAll.slice(mm2,mm)
                const opt = echartsInstance.getOption();
                echartsInstance.setOption({...opt, series},true)
            
            },500)
            */
}




const styles = ({ palette, spacing }: Theme) => createStyles({
    root: {
        flexGrow: 1,
        height: 300
    },
    paper: {
        padding: spacing.unit * 2,
        textAlign: 'center',
        color: palette.text.secondary,
    },
    container: {
        height: '50vh'
    }

});




class ScatterChart extends React.Component<any, any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dataLength: 5,
            option: {},
            // series,
            ledgendsUnselected: {}


        }
        this.setDataLength = this.setDataLength.bind(this)
        this.toggleSeries = this.toggleSeries.bind(this)
    }


    componentDidMount() {
        setTimeout(() => {
            this.setDataLength(9999)
        }, 500)
    }

    highlightSeries = (seriesName: string = "Green", show: boolean = true) => {
        console.log(seriesName, show)
        const type = show ? 'highlight' : 'downplay';

        echartsInstance.dispatchAction({
            type,
            seriesName
        })

    }

    setDataLength = (dataLength: number) => {
        const data = categoriesPre.slice(0, dataLength)
         echartsInstance.setOption({yAxis:[{data}]})
         //this.setState({ dataLength, data });
    }


    toggleSeries = (name: string) => {
        const ledgendsUnselected: {} = { ...this.state.ledgendsUnselected, [name]: !this.state.ledgendsUnselected[name] },
            type = this.state.ledgendsUnselected[name] ? 'legendSelect' : 'legendUnSelect';

        echartsInstance.dispatchAction({
            type,
            name
        })

        if (!ledgendsUnselected[name])
            this.highlightSeries(name);
        this.setState({ ledgendsUnselected });
    }





    render() {
        const { classes } = this.props;
        return (

            <div className={classes.root}>
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"

                >
                    <Grid item xs={12}>
                        <ReactEcharts
                            option={option}
                            notMerge={true}
                            style={{ flex: 1, height: 500 }}
                            lazyUpdate={false}
                            theme={"theme_name"}
                            onChartReady={setechartsInstanceIn}
                        // onEvents={onEvents}
                        />
                    </Grid>
                </Grid>
            </div>

        )
    }
}

export default withStyles(styles)(ScatterChart);





/*
    legend: {
        show : false,
        type: 'scroll',
        orient: 'vertical',
        right: 'right',
        top: 60,
        //bottom: 20,
        data: ledgends,
        //orient: 'vertical'
        textstyle:{
            width : 20
        }
    },

    setTimeout(() => {
    echartsInstance.dispatchAction({
        type: 'highlight',
        seriesName: "Green"
    });

}, 2000);


let onEvents = {
"legendselectchanged" : console.log,
  "legendselected" : console.log,
  "legendunselected" : console.log,

    /*
  "click" : console.log,
  "dblclick" : console.log,
  "mousedown" : console.log,
  "mousemove" : console.log,
  "mouseup" : console.log,
  "mouseover" : console.log,
  "mouseout" : console.log,
  
  "legendscroll" : console.log,
  "datazoom" : console.log,
  "datarangeselected" : console.log,
  "timelinechanged" : console.log,
  "timelineplaychanged" : console.log,
  
  "restore" : console.log,
  "dataviewchanged" : console.log,
  "magictypechanged" : console.log,
  "pieselectchanged" : console.log,
  "pieselected" : console.log,
  "pieunselected" : console.log,
  "mapselectchanged" : console.log,
  "mapselected" : console.log,
  "mapunselected" : console.log,
  "axisareaselected" : console.log,
  "focusnodeadjacency" : console.log,
  "unfocusnodeadjacency" : console.log,
  "brush" : console.log,
  "brushselected" : console.log,
  "finished" : console.log,
  
 // "rendered" : console.log,


 
  
  
}
*/