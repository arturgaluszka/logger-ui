import React from "react";
import {properties} from "../../properties";
import LogEntry from "./LogEntry";
import Table from "react-bootstrap/Table";

export default class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: []
        }
    }

    componentDidMount() {
        fetch(properties.logUrl)
            .then(value => value.json())
            .then(value => this.setState({logs: value}))
    }

    render() {
        console.log('Log init');
        return <div className={'log-container'}>
            <Table hover>
                <thead>
                <th>Time</th>
                <th>Type</th>
                <th>Message</th>
                </thead>
                <tbody>{this.state.logs.reverse().map((value, i) =>
                    <LogEntry key={i} value={value}/>)}</tbody>
            </Table>
        </div>
    }
}