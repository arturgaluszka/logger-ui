import * as React from "react";

export default class LogEntry extends React.Component {
    render() {
        return <tr className='log-entry'>
            <th>{new Date(this.props.value.time).toLocaleString()}</th>
            <th>{this.props.value.type}</th>
            <th>{this.props.value.value}</th>
        </tr>
    }
}