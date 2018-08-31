import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';



import './App.css';


import AppBar from './views/components/appbar'
import Chart from './views/components/scatterChart'
import Tabbar from './views/components/tabbar'
import Footer from './views/components/footer'
//import Tree from './views/containers/controlledTree/index'
//import Table from './views/components/table';

import { SizeMe } from 'react-sizeme'

class App extends React.Component<any, any, any> {
  public render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar />

        <Tabbar className={this.props.classes.flex} />
        <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <Footer />
        </div>

      </div>
    );
  }
}

const styles = ({ palette, spacing }: Theme) => {
  //console.log(palette)
  return createStyles({
    root: {
      height: '100vh',
      flex: 'column'
    },
    flex: {
      height: '100%',
      backgroundColor: 'red'
    },
    footer: {

    }
  })
};

export default withStyles(styles)(App);
