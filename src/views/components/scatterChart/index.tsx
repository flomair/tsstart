import * as React from "react";
import ReactEcharts from "echarts-for-react";
import { ECharts } from "echarts";
import palette from 'google-palette';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';


import ErrorClassMenu from './ErrorClassMenu'
import { groupArrayByKey } from './utils'

import data from './data.js'
import getOptions from "./getOptions";




let echartsInstance: ECharts;
/*
const seriesTmpl = {
    symbolSize: 5,
    type: 'scatter',
    animationThreshold: 500,
    //animation : false
}
*/

const seriesTmpl2 = {
    symbolSize: 5,
    type: 'scatter',
    animationThreshold: 500,
    //animation : false
}


const seriesAll = groupArrayByKey(data, 'error', ['time', 'position', 'error', 'id'], seriesTmpl2);

const seq = palette('mpn65', seriesAll.length);
seriesAll.forEach((serie: any, index:number) =>{

    serie.itemStyle = {color: `#${seq[index]}`};
})

const series = seriesAll.slice(0, 5)

seriesAll.forEach((el: any) => {
    //   console.log(el.length,el.data.length)
});











const option = getOptions(series)

//console.log(option)




const setechartsInstanceIn = (echartsInstanceIn: any) => {
    echartsInstance = echartsInstanceIn;
    //console.log(echartsInstance)
    const pp = echartsInstance.getOption()
    //console.log(pp)
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
            series,
            ledgendsUnselected: {}


        }
        this.setDataLength = this.setDataLength.bind(this)
        this.toggleSeries = this.toggleSeries.bind(this)
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
        const series = seriesAll.slice(0, dataLength)
        const opt = echartsInstance.getOption();
        echartsInstance.setOption({ ...opt, series }, true)
        this.setState({ dataLength, series });
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
                    wrap='nowrap'
                >
                    <Grid item xs>
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
                    <Grid item xs={2}>
                        <ErrorClassMenu

                            toggleSeries={this.toggleSeries}

                            ledgendsUnselected={this.state.ledgendsUnselected}
                            highlightSeries={this.highlightSeries}
                            series={this.state.series}
                            dataLength={this.state.dataLength}
                            setDataLength={this.setDataLength}
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