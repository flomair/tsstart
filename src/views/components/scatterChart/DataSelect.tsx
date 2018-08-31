import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import { WithStyles, createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';


const styles = ({ palette, spacing }: Theme) => createStyles({

  select:{
   // width: 120
   display:'block'
  }
});

interface Props extends WithStyles<typeof styles> {
    dataLength: number;
    setDataLength: (length: number) => void;
  }



const DataSelect = function(props:Props) {

    const { classes } = props;

    return (

          <NativeSelect
            className={classes.select}
            value={props.dataLength}
            onChange={(event) => props.setDataLength(parseInt(event.target.value))}
            inputProps={{
              name: 'dataLength',
              id: 'demo-controlled-open-select',
            }}
          >
            <option selected value={5}>5 leading faults</option>
            <option value={99999}>all faults</option>

          </NativeSelect>
  

    );
  
}



export default withStyles(styles)(DataSelect);