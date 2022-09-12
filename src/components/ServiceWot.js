import { Button, Container, FormLabel, Stack } from "@mui/material";
import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Home from "./Home";


export default class ServiceWot extends Component {
    constructor(props) {
        super(props);


        this.state = {

        };
    }
    render() {
        return (
            <div>
                <Home />
                <Container centered sx={{ p: 1, mb: 2, gap: 1 }}>
                    <Container className="p-4 mb-1 bg-light rounded-3">
                        <Form>
                            <FormLabel>ИБИС РЛИС</FormLabel>
                            <Row>
                                <Col xs={7}>

                                    <Row className="p-2">
                                        <Form.Group as={Col} controlId="formGridStatus">
                                            <Form.Label>Статус сервиса</Form.Label>
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Время работы</Form.Label>
                                            <Form.Control type="time" />
                                        </Form.Group>
                                    </Row>
                                    <label>Информация о БД</label>
                                    <Row className="p-2">
                                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Имя БД</Form.Label>
                                            <Form.Control placeholder="mis3" />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                                            <Form.Label>IP</Form.Label>
                                            <Form.Control placeholder="192.168.1.1" />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress3">
                                            <Form.Label>Порт</Form.Label>
                                            <Form.Control placeholder="5432" />
                                        </Form.Group>
                                    </Row>
                                    <label>Инфо</label>
                                    <Form.Group className="mb-2 p-2" controlId="formGridAddress2">
                                        <Form.Label>Занимаемая память</Form.Label>
                                        <Form.Control placeholder="500Mb" />
                                    </Form.Group>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="contained" >
                                            Обновить
                                        </Button>
                                        <Button variant="contained" >
                                            Перезапустить
                                        </Button>
                                        <Button variant="contained">
                                            Остановить
                                        </Button>
                                        <Button variant="contained" onClick={this.cancelClick}>
                                            Запустить
                                        </Button>
                                        <Link className="btn btn-danger" to='/Service'>
                                            Назад
                                        </Link>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Row className="p-2">
                                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Тут будет график</Form.Label>
                                            <Form.Control placeholder="mis3" />
                                        </Form.Group>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Container>
            </div>
        );
    }
}