import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar'

export default function Users() {
    return (
        <>
       
            <div style={{paddingTop:"20px"}}>
                <a href="#">
                    <Container>
                        <Row>
                            <Col sm={4} > <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" /></Col>
                            <Col sm={8}>
                                <Row>
                                    <Col sm={8} style={{ textAlign: "left" }} > fmk;pxvijxfoi</Col>
                                    <Col sm={4}> 10:10</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </a>
            </div>
            <hr style={{backgroundColor:"#33383b"}}/>
            <div>
                <a href="#">
                    <Container>
                        <Row>
                            <Col sm={4} > <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" /></Col>
                            <Col sm={8}>
                                <Row>
                                    <Col sm={8} style={{ textAlign: "left" }} > fmk;pxvijxfoi</Col>
                                    <Col sm={4}> 10:10</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </a>
            </div>
        </>
    )
}
