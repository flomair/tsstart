import * as  React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

import Grid from '@material-ui/core/Grid';


import { withStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';


import DataSelect from './DataSelect'



const styles = ({ palette, spacing }: Theme) => createStyles({
    root:{
        borderWidth: 1

        },
    list: {
        backgroundColor: palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 450,
        // marginTop: spacing.unit * 3,

    },
    select: {

        height: 50,
    },
    item: {
        // height: 24,
        padding: '12px 12px 12px 2px',
        alignContent: 'start'
    },
    cell: {
        padding: 0
    },
    colorBox: {
        width: '10px',
        height: 20
    },
    errorName:{
        lineHeight: '15px',
    }
});

function SimpleList(props: any) {
    const { classes, dataLength, setDataLength } = props;
    return (
        <div className={classes.root}>
            <DataSelect
                classname={classes.select}
                dataLength={dataLength}
                setDataLength={setDataLength} />

            <div className={classes.list}>

                <List className={classes.table}>
                    {props.series.map((serie: any) => {

                        return (
                            <ListItem
                                className= {classes.item}
                                style={{ opacity: props.ledgendsUnselected[serie.name] ? 0.3 : 1, }}

                                onClick={() => props.toggleSeries(serie.name)}
                                onMouseLeave={() => props.highlightSeries(serie.name, false)}
                                onMouseEnter={() => props.highlightSeries(serie.name)}>
                                <Grid
                                    container
                                    spacing={8}
                                    direction="row"
                                    justify="center"
                                    alignItems="flex-start"
                                    alignContent='flex-start'
                                    wrap='nowrap'

                                >
                                    <Grid item className={classes.colorBox}
                                        style={{ backgroundColor: serie.itemStyle.color }} />

                                    <Grid item xs={11} className={classes.errorName}>
                                        {`${serie.name} (${serie.length})`}
                                    </Grid>
                                </Grid>

                            </ListItem>
                        )

                    })}

                </List>
            </div>
        </div>
    );
}



export default withStyles(styles)(SimpleList);