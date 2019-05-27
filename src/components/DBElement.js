import React from "react";
import Button from "react-bootstrap/Button";

class DBElement extends React.Component {
    render() {
        return <tr className='element'>
            <th>{this.props.id}</th>
            <th>{this.props.field}</th>
            <th>
                <Button variant="dark" onClick={() => this.props.onDelete(this.props.id)}>remove</Button>
            </th>
        </tr>
    }
}

export default DBElement;