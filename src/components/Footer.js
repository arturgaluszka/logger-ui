import React from "react";
import {Navbar} from "react-bootstrap";

export default class Footer extends React.Component {
    render = () => <Navbar className={'footer'} bg="dark" variant="dark" sticky="bottom">
        <Navbar.Brand href="#home">
            <img
                alt=""
                src="/mongodb.svg"
                width="250"
                height="70"
                className="d-inline-block align-top"
            />
            {'This is just an simple app to prove my skills :)'}
        </Navbar.Brand>
    </Navbar>;
}