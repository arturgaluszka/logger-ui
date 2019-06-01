import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import {connect} from "react-redux";
import {changeFilter} from "../actions";
import {Button} from "react-bootstrap";

export class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    render() {
        return <Navbar className={'top-nav'} bg="dark" variant="dark">
            <Navbar.Brand href="/">Mongo CRUD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl value={this.state.searchInput} type="text" placeholder="Search" className="mr-sm-2" onChange={this.searchInputChange.bind(this)}/>
                    <Button variant="dark" onClick={this.clear.bind(this)}>clear</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>;
    }

    searchInputChange(event) {
        let fieldValue = event.target.value;
        this.setState({searchInput: fieldValue});
        this.props.doFilter(fieldValue);
    }

    clear(event) {
        this.setState({searchInput:''});
        this.searchInputChange(event);
    }

}
const mapStateToProps = state => {
    return {
        filter: state.filter
    };
};

function mapDispatchToProps(dispatch) {
    return {
        doFilter: (filter) => dispatch(changeFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);