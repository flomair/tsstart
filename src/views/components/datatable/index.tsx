import * as React from "react"
import MUIDataTable from "mui-datatables";
import * as  moment from 'moment'

import { withStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import IconChartSharp from '@material-ui/icons/ShowChartSharp';

import { getRowData } from '../scatterChart/utils'
import loaded from './data'

const theme = {
    overrides: {
            MuiTableCell: {
                root: {
                    padding: "4px 10px" 
                }
            }
    }
}





const MuiTheme = createMuiTheme(theme as ThemeOptions);


const columns = [{
    name: "Timestamp",
    options: {
        filter: true,
        sort: false,
        customBodyRender: (value: string) => moment(value).format("DD/MM/YY HH:mm:ss")
    }
}, {
    name: 'Duration'
},

{
    name: 'Location'
}, {
    name: '',
    options: {
        display: true,
        filter: false,
        sort: false,
        customBodyRender: (value: string) => <IconChartSharp onClick={() => console.log(value)}></IconChartSharp>
    }
}
    ,
{
    name: 'Message'
},
    'Processing status',
    'Responsibility'
];

const data = loaded.map((dat: {}) => {
    const row = getRowData(dat, ['time', 'duration', 'location', 'id', 'message', 'status', 'responsibility'])
    return row.slice(0, columns.length)
})



//console.log(data)
const options = {
    filterType: 'checkbox',
    customToolbarSelect: () => { },
    onRowsSelect: (currentRowsSelected: any[], rowsSelected: any[]) => console.log,
    onRowClick: console.log
    // selectableRows :false
};


const Table = ((props: any) => {
    return (
        <MuiThemeProvider theme={MuiTheme}>
            <MUIDataTable
                
                //title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
            />
        </MuiThemeProvider>
    )
})

export default Table;