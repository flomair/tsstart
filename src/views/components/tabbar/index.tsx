import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import  {withSize} from 'react-sizeme'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import IconTableChart from '@material-ui/icons/TableChartSharp';
import IconScatterPlot from '@material-ui/icons/ScatterPlotSharp';
import IconFaultAllocation from '@material-ui/icons/LineStyleSharp';

import FaultFrequency from '../faultFreqency'
import ScatterChart from '../scatterChart'
import FaultTable from '../table'


function TabContainer(props: any) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}



const styles = ({ palette, spacing }: Theme) => {
  //console.log(palette)
  createStyles({
    root: {
      //flexGrow: 1,
      backgroundColor: palette.background.paper,
    },
    bar:{
      backgroundColor: palette.background.paper,
    }
  })
};

class SimpleTabs extends React.Component<any, any, any> {
  UNSAFE_componentWillUpdate(dd:any){
    console.log(dd)
  }
  state = {
    value: 0,
  };

  handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" >
          <Tabs value={value} onChange={this.handleChange}>
                    <Tab icon={<IconTableChart />}/>
                    <Tab icon={<IconFaultAllocation />} href="#basic-tabs" />
                    <Tab icon={<IconScatterPlot />} />
          </Tabs>
        </AppBar>
            {value === 0 && <FaultTable style={{height: '100%'}}/>}
            {value === 1 && <FaultFrequency />}
            {value === 2 && <ScatterChart />}
      </div>
    );
  }
}

const styled = withStyles(styles)(SimpleTabs)

export default withSize({ monitorHeight: true })(SimpleTabs);