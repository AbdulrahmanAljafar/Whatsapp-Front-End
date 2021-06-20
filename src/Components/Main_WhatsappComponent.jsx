import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Chat from './ChatComponent'
import Search from './SearchComponent'

export default function Main_WhatsappComponeat() {
    return (
        <div style={{paddingTop:"50px"}} className="MainChat">
            <Container>
                <Row>
                    <Col sm={8} ><Chat /></Col>
                    <Col sm={4}><Search /></Col>
                </Row>
            </Container>
        </div>
    )
}
