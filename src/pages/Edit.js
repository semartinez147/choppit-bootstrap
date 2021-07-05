import {ChoppitNav} from "../components/ChoppitNav";
import React, {useState} from "react";
import {Button, Col, Container, Form, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

function Recipe() {

    console.log('recipe')
    return (
        <>
            <ChoppitNav/>
            <div className='App'>
                <Container fluid >
                    <Row className='mb-2'><Col><Form.Control size='lg' placeholder='Recipe Title'/></Col><Col className='d-flex'><span className='display-6 align-self-end text-muted align-bottom'>www.recipeurl.com</span></Col></Row>
                    <Row>
                        <Col md={3} id='rec-ingredients'>
                            Ingredients
                            <ul>
                                <li><Form.Control placeholder='Ingredit 1'/></li>
                                <li><Form.Control placeholder='Ingrededt 2'/></li>
                                <li><Form.Control placeholder='Grinediet 3'/></li>
                                <li><Form.Control placeholder='Nigrnidet 4'/></li>
                                <li><Form.Control placeholder='Ingredietn 5'/></li>
                                <li><Form.Control placeholder='Ingredient 6'/></li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            Instructions
                            <ul>
                                <li><Form.Control placeholder='Step the first: Do the first step'/></li>
                                <li><Form.Control placeholder='Step the second: Do the second step'/></li>
                                <li><Form.Control placeholder='Step the third: Do the third step'/></li>
                                <li><Form.Control placeholder='Step the fourth: Do the fourth step'/></li>
                            </ul>
                        </Col>
                    </Row>
                </Container></div>
        </>
    )
}

export default Recipe