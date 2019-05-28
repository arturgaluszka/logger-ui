import React from "react";
import DBElement from "../components/DBElement";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
import {changeFilter, loadData} from "../actions";
import {connect} from "react-redux";

class DataContainer extends React.Component {
    componentDidMount() {
        fetch('http://localhost:8080/pojo')
            .then(rs => rs.json())
            .then(data => {
                this.props.loadData(data);
                this.props.changeFilter('');
                // this.setState({data: data});
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
                    <th></th>
                    <th>
                        {/*<input value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}/>*/}
                    </th>
                    <th>
                        {/*<Button variant="dark" onClick={this.addPojo.bind(this,)}>ADD</Button>*/}
                    </th>
                </tr>
                {console.log('props DC', this.props)}
                {this.props.current.map((value, i) =>
                    <DBElement key={i} id={value.id} field={value.field} onDelete={this.deletePojo.bind(this)}/>)}
                </tbody>
            </Table>
        </div>
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    addPojo() {
        const postData = new URLSearchParams();
        postData.append('field', this.state.inputValue);
        console.log(this);
        fetch('http://localhost:8080/pojo/',
            {method: 'POST', body: postData})
            .then(response => response.json())
            .then(response => {
                console.log(this);
                this.setState(prevState => ({
                    data: [...prevState.data, response]
                }))
            })
    }

    deletePojo(id) {
        fetch('http://localhost:8080/pojo/' + id, {
            method: 'delete'
        }).then(
            () => {
                this.setState({
                    data: this.dataWithoutDeleted(id)
                });
            }
        );
    }

    dataWithoutDeleted(id) {
        return this.props.data.filter((value) => value.id !== id);
    }
}

const mapStateToProps = state => {
    console.log('state DC', state);
    return {
        current: state.data.current,
        filter: state.data.filter
    };
};

function mapDispatchToProps(dispatch) {
    return {
        loadData: (data) => dispatch(loadData(data)),
        changeFilter: (filter) => dispatch(changeFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);