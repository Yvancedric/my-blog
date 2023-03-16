import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Nav() {

    return(

        <nav className="nav sticky-top shadow">
            <Container className="mt-1 rounded p-2">
                <Row>
                    <Col>
                       <a href="http://localhost:3000/"
                        className="text-decoration-none mylink">
                       <span 
                       className="text-white"
                       >Par
                       </span>
                       <span className="text-dark">cours</span>
                       <span className="text-white">
                        Dev
                        </span>
                        <FontAwesomeIcon icon= {faStar} className="ps-1 text-white"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Nav;