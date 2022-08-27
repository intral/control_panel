import React, { Component } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Stack, Button } from "react-bootstrap";
import Home from "./Home";
export default class ServiceWot extends Component {
    constructor(props) {
        super(props);
        

        this.state = {

        };
        this.cancelClick = this.cancelClick.bind(this);
    }
    cancelClick() {
        let navigane = useNavigate();
        navigane("/Service", { replace: true });
        //return <Navigate to='/Service' replace={true}/>;
        //return <Link  to='/Service'/>

    }
    render() {
        return (
            <div>
                <Home />
                <Container className="p-1">
                    <Container className="p-4 mb-1 bg-light rounded-3">
                        <Form>
                            <label>ИБИС РЛИС</label>
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
                            <Stack direction="horizontal" gap={2}>
                                <Button variant="primary" type="submit">
                                    Запросить Информацию
                                </Button>
                                <Button variant="primary" type="submit">
                                    Перезапустить
                                </Button>
                                <Button variant="primary" type="submit">
                                    Остановить
                                </Button>
                                <Button variant="primary" type="Cancel" onClick={this.cancelClick}>
                                    Запустить
                                </Button>
                                <Button variant="danger" type="Cancel" onClick={this.cancelClick}>
                                    Назад
                                </Button>
                            </Stack>
                        </Form>
                    </Container>
                </Container>
            </div>
        );
    }
}