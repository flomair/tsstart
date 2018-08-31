import * as React from "react";
import { withStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import * as ReactDOMServer from 'react-dom/server';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { getTime } from './utils'

const styled = (props: any) => ({ palette, spacing }: Theme) => createStyles({
        root: {
            // flexGrow: 1,
            padding: 10,
            backgroundColor: props.color,
            textAlign: 'start'
        }, '& after': {
            // jss-nested applies this to a child span
            fontWeight: 'bold' // jss-camel-case turns this into 'font-weight'
        }
    })



const Tooltip = (props: any) => {
    console.log(props)


    return (
        <Grid
            className={props.classes.root}
            container
            spacing={0}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            
        >
            <Grid item xs={12}>
                <Typography variant={'title'} color={'inherit'}>
                    {props.seriesName}
                </Typography>
            </Grid>
            <Grid item xs>
                <Grid
                    className={props.classes.description}
                    container
                    spacing={0}
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    alignContent='flex-start'
                //wrap='nowrap'
                >
                    <Grid item xs >
                        {'Position'}:
                    </Grid>
                    <Grid item xs>
                        {'Time'}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item xs>
                        {props.value[1]}
                    </Grid>
                    <Grid item xs>
                        {getTime(props.value[0], true)}
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );


}


export default (props: any) => {
    const withProps = styled(props)
    const DD = withStyles(withProps)(Tooltip);
    return ReactDOMServer.renderToString(<DD {...props} />)
}





