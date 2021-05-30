import {ChoppitNav} from "../components/ChoppitNav";
import React from "react";
import {Col, Container, Form, FormGroup, Row} from "react-bootstrap";

function Select() {
    return (
        <>
            <ChoppitNav/>
            <div className="App">
                <Container className="explainer py-2">
                    Choppit extracted the following text from the website.<br/>
                    Click an item to mark it as an ingredient or recipe step.<br/>
                    This helps Choppit understand what parts of the text you want to keep.
                </Container>
                <Container className="text-selection border border-2 border-light rounded" style={{minHeight: "20vh"}}>
                    <ul>
                        <li>This is where</li>
                        <li>the text will</li>
                        <li>go</li>
                        <li>when there is text to go</li>
                    </ul>
                </Container>
                <Container>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Control type="text"/>
                                    <Form.Label>Ingredient Text</Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Select;