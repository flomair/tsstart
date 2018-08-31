import * as  React from 'react';
import { withStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import IconDashboard from '@material-ui/icons/Dashboard';
import IconDeviceHub from '@material-ui/icons/DeviceHub';
import IconViewModule from '@material-ui/icons/ViewModule';

const styles = ({ palette, spacing }: Theme) => {
    //console.log(palette)
   return  createStyles({

        root: {
            flexDirection: 'row',
            //flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center'

        },
        menuButton: {

            padding: '8px 40px',
            fontSize: '36px',
        },
        active: {
            backgroundColor :'rgba(255,255,255,0.3)'
        }
    })
};

function ButtonAppBar(props: any) {
    console.log(props)
    const { classes } = props;
    return (

            <AppBar position="static"  className={classes.root} >
                
                        <IconDashboard className={classes.menuButton}/>
                        <IconDeviceHub className={`${classes.menuButton} ${classes.active}`}/>
                        <IconViewModule className={classes.menuButton}/>

            </AppBar>
    );
}



export default withStyles(styles)(ButtonAppBar);