
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


const makeHeader = (name: string , index: number, setSortable: Function) => {
  if (!name.length)
    return '';
  return (<div
    style={{ display: 'flex' }}>
    {name}
    <FilterList
      style={{ paddingLeft: 3, marginTop: -4 }}
      onClick={(e: any) => {
        e.stopPropagation();
        setSortable(index)
      }}
    >
    </FilterList>
  </div>)
}


const conf = {

  columns: [
    {
      name: 'Timestamp',
      accessor: "time",
      filterable: false,
      Cell: (row: any) => moment(row.value).format("DD/MM/YY HH:mm:ss")
    },
    {
      name: "Duration",
      accessor: "duration",
      filterable: false,
      //Cell: (row: any) => <div style={{ color: 'red' }}>Timestamp</div>
    },
    {
     
      accessor: "id",
      filterable: false,
      width: 30,
      Cell: (row: any) => <IconChartSharp onClick={() => console.log(row.value)}></IconChartSharp>
    }
    ,
    {
      name: "Location",
      accessor: "location",
      filterable: false,
    }
    ,
    {
      name: "Message",
      accessor: "message",
      filterable: false,
    }
    ,
    {
      name: "Status",
      accessor: "status",
      filterable: false,
    },
  ],
  showPaginationTop: true,
  showPaginationBottom: false,
  style: { height: '500px' },
  defaultPageSize: 10,
  className: "-highlight",
  resizable: false,
  filterable: false,
  loadingText: <Logo />
}





class Table extends React.Component<any, any, any> {

  constructor(props: any) {
    super(props);
    //console.log(props.classes.ReactTable)
    this.state = {
      data: loaded,
      conf: this.getConf(conf)
    };
    this.toggleColumnFilterable = this.toggleColumnFilterable.bind(this);
    this.getConf = this.getConf.bind(this);
  }

  getConf(conf:any) {
   return {
      ...conf, columns: conf.columns.map((col :{name:string}, index:number) => {
        return { ...col, Header: makeHeader(col.name ||'', index, this.toggleColumnFilterable) }
      })
    }
  }

  toggleColumnFilterable = (index: number) =>  {
    const conf = {...this.state.conf}
    conf.columns[index].filterable = !conf.columns[index].filterable;
    conf.filterable = conf.columns.some((column: any) => column.filterable)
    this.setState({ conf })
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
    return (<ReactTable
      data={data}
      {...propsIn}
    />
    );
  }
}

const styles = ({ palette, spacing }: Theme) => {
  //console.log(palette)
  return createStyles({
    root: {
      fontFamily: 'Roboto',
      fontSize: '0.75em',
      height: '500px'
    },
    bar: {
      backgroundColor: palette.background.paper,
    }
  })
};

export default Table;