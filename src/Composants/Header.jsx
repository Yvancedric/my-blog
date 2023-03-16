import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';

function Header() {

    return(

        <header className="myheader">
         <Container className='p-1 text-center'>
            <Row>
                <Col>
                <marquee direction="ltr">Vous aurez bientôt Quelques infos sur la tech</marquee>
                </Col>
            </Row>
        </Container>
        </header>
    );
}

export default Header;