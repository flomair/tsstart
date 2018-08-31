import * as  React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Person from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment'
import {withSize} from 'react-sizeme'
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,

  },
  menuButton: {
    marginLeft: 12,
    paddingRight: 6,
    borderRight: '1px solid',
    fontSize: '36px',
  },
  time:{
    marginLeft: 12,
    width: '60px',
    lineHeight: '20px'
  }
};

function ButtonAppBar(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant='headline' color="inherit" className={classes.menuButton2}>
            Oerlikon
          </Typography>
          <div className={classes.flex} />
          <Typography variant="subheading" color="inherit" >
            Sylvia
          </Typography>
          <Person className={classes.menuButton} />
          {false&& <Typography variant="subheading" color="inherit" className={classes.time} >
            {moment().format("DD/MM/YY HH:mm:ss")}
          </Typography>}
        </Toolbar>


      </AppBar>
    </div>
  );
}


const Appp =  withStyles(styles)(ButtonAppBar)
export default withSize({ monitorHeight: true })(Appp);