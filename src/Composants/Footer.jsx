import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Myfooter = () => {

    return(
        
      <footer style={{backgroundColor: "#A7DBF3"}}>
        <Container className="p-3 text-center">
            <Row>
                <Col>
                    <a href="https://www.linkedin.com/in/yvan-cedric-318727261/" title="linkedin" className="text-decoration-none text-white">
                        Linkedin
                    </a>
                </Col>
                <Col>
                    <a href="https://www.instagram.com/yvancedofficial/" title="instagram" className="text-decoration-none text-white">
                        Instagram
                    </a>
                </Col>
            </Row>
        </Container>
      </footer>

    );
}

export default Myfooter;