
import * as React from "react"
import ReactTable from "react-table";
import './style.css'
import { SizeMe } from 'react-sizeme'
import { withStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import IconChartSharp from '@material-ui/icons/ShowChartSharp';
import FilterList from '@material-ui/icons/FilterList';
import * as  moment from 'moment'
import { makeData, Logo, Tips } from "./utils";



import loaded from './data'





const conf = {
  
  columns: [
    {
      Header:  (row: any,d:any,index:number) => <div>Hello<FilterList style={{paddingLeft:3, paddingBottom:2}} onClick={(e:any) => {
        
        e.stopPropagation();
        conf.columns[0].filterable != conf.columns[0].filterable
        console.log(row)
      }}></FilterList></div>,
      
      accessor: "time",
      filterable: false,
      Cell: (row: any) => moment(row.value).format("DD/MM/YY HH:mm:ss")
    },
    {
      Header: console.log ,//"Duration",
      accessor: "duration",
      filterable: false,
      //Cell: (row: any) => <div style={{ color: 'red' }}>Timestamp</div>
    },
    {
      Header: "",
      accessor: "id",
      filterable: false,
      width: 30,
     // Cell: (row: any) => <IconChartSharp onClick={() => console.log(row.value)}></IconChartSharp>
    }
    ,
    {
      Header: "Location",
      accessor: "location",
      filterable: false,
    }
    ,
    {
      Header: "Message",
      accessor: "message",
      filterable: false,
    }
    ,
    {
      Header: "Status",
      accessor: "status",
      filterable: false,
    },
  ],
  showPaginationTop: true,
  showPaginationBottom: false,
  style: { height:'500px' },
  defaultPageSize: 10,
  className: "-highlight",
  resizable:false,
  filterable : false,
  loadingText: <Logo />
}





class Table extends React.Component<any, any, any> {

  constructor(props: any) {
    super(props);
    //console.log(props.classes.ReactTable)
    this.state = {
      data: loaded,
      conf: { ...conf, ...this.props.conf }
    };
  }



  componentDidMount() {
    return
    const conf = this.state.conf;
    setInterval(() => {
      conf.loading = !conf.loading
      this.setState({ conf })

    }, 2000)
    return
    setInterval(() => {

      conf.columns[1].filterable = !conf.columns[1].filterable;
      conf.filterable = conf.columns.some((column: any) => column.filterable)


    }, 500)
  }





  render() {
    const propsIn = { ...conf, ...this.state.conf }
    const data = this.state.data.map((m: any) => m);
    return (
      <SizeMe>
       {({ size }:{size:{height:number}}) => {
         console.log(size)
       return <ReactTable 
          //style ={{flexGrow:1}}
          data={data}
          {...propsIn}
        />}}
      </SizeMe>
    );
  }
}

const styles = ({ palette, spacing }: Theme) => {
  //console.log(palette)
  return createStyles({
    root: {
      fontFamily:'Roboto',
      fontSize: '0.75em',
      height: '500px'
    },
    bar: {
      backgroundColor: palette.background.paper,
    }
  })
};

export default Table;