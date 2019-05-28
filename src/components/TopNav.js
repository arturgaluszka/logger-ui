import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {changeFilter} from "../actions";

export class TopNav extends React.Component {
    render() {
        return <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Mongo CRUD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange.bind(this)}/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>;
    }

    handleChange(event) {
        let fieldValue = event.target.value;
        this.props.doFilter(fieldValue);
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