import React from "react";
import DBElement from "./DBElement";
import Table from "react-bootstrap/Table";
import {addData, changeAddInput, changeFilter, loadData, removeData} from "../actions/pojoActions";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import {properties} from "../../properties";

class DataContainer extends React.Component {
    componentDidMount() {
        fetch(properties.dataUrl)
            .then(rs => rs.json())
            .then(data => {
                this.props.loadData(data);
                this.props.changeFilter('');
            })
            .catch(reason => console.log('ERROR:', reason));
    }

    render() {
        return <div className={'data-container'}>
            <Table stripped hover>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>add</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th/>
                    <th>
                        <input value={this.props.addInput} onChange={this.props.changeAddInput.bind(this)}/>
                    </th>
                    <th>
                        <Button variant="dark" disabled={!this.props.addInput}
                                onClick={this.addPojo.bind(this)}>ADD</Button>
                    </th>
                </tr>
                {this.props.current.map((value, i) =>
                    <DBElement key={i} id={value.id} field={value.field} onDelete={this.deletePojo.bind(this)}/>)}
                </tbody>
            </Table>
        </div>
    }

    addPojo() {
        const postData = new URLSearchParams();
        postData.append('field', this.props.addInput);
        console.log(this);
        fetch(properties.dataUrl,
            {method: 'POST', body: postData})
            .then(response => response.json())
            .then(response => {
                console.log('added', this);
                this.props.add(response);
            })
    }

    deletePojo(id) {
        fetch(properties.dataUrl + '/' + id, {
            method: 'delete'
        }).then(
            () => {
                this.props.remove(id);
            }
        );
    }
}

const mapStateToProps = state => {
    console.log('state DC', state);
    return {
        current: state.data.current,
        filter: state.data.filter,
        addInput: state.addInput
    };
};

function mapDispatchToProps(dispatch) {
    return {
        loadData: (data) => dispatch(loadData(data)),
        changeFilter: (filter) => dispatch(changeFilter(filter)),
        changeAddInput: (event) => dispatch(changeAddInput(event.target.value)),
        add: (toAdd) => dispatch(addData(toAdd)),
        remove: (toRemove) => dispatch(removeData(toRemove))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);