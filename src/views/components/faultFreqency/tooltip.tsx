import * as React from "react";
import { getTime } from './utils'
import * as ReactDOMServer from 'react-dom/server';


export default (props: any) => {
    console.log(props)
    return ReactDOMServer.renderToString(
        <div style={{ backgroundColor: props.color, paddingLeft: 10, paddingRight: 10, textAlign: 'left' }}>
            <div style={{ fontSize: 15 }}>
            {props.value[4].error}
            </div>
            <br />
            <div style={{ fontSize: 10, width: 100 }}>
                Time:
            </div>
            <div style={{ fontSize: 10 }}>
                {getTime(props.value[1],true)}
            </div>
        </div>
    );
}