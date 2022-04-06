import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import { FaComments, FaUserAlt, FaCalendar } from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";
import Alert, {
    msjConfirmacion,
    titleConfirmacion,
    titleError,
    msjError,
    titleExito,
    msjExito,
} from "../../../shared/plugins/alert";
import axios from "../../../shared/plugins/axios";
import { AuthContext } from "../../auth/authContext";

export const IncidenceInfo = ({
    isOpenInfo,
    handleClose,
}) => {

    const handleCloseForm = () => {
        handleClose();
      };

    return (
        <>
            <Modal show={isOpenInfo} onHide={handleCloseForm} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Incidencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col className="col-md-6 col-lg-5 pb-3">
                                <img className="size" src="https://img.clasf.mx/2020/08/18/Laptop-Sony-Vaio-rosa-descompuesta-20200818084932.7086270015.jpg"></img>
                                <p className="text-center">"Resolvió mi problema, pero se tardó un poco"</p>
                            </Col>
                            <Col className="col-md-6 col-lg-7 pb-3">
                                <h2><span className="badge bg-danger">Cerrado</span></h2>
                                <p><FaUserAlt/> Luis Manuel Pozo DLT</p>
                                <p><FaCalendar/> 3 de marzo del 2022</p>
                                <p>Card has minimum height set but will expand if more space is needed for
                                    card body content. You can use Bootstrap to align multiple cards nicely in a row.</p>
                            </Col>
                            <hr></hr>
                            <h5 className="text-muted"><FaComments/> Comentarios</h5>
                            <Container>
                                <Row>
                                    <Col className="col-lg-1 text-end">
                                        <img className="imgRedonda" src="https://img.clasf.mx/2020/08/18/Laptop-Sony-Vaio-rosa-descompuesta-20200818084932.7086270015.jpg"></img>
                                    </Col>
                                    <Col className="col-lg-11">
                                        <span className="fw-bold">Luis Manuel Pozo </span>
                                        <span className="text-muted">12:00</span>
                                        <p>Some folks like to get away
                                            Take a holiday from the neighbourhood
                                            Hop a flight to Miami Beach
                                            Or to Hollywood
                                            But I'm taking a Greyhound
                                            On the Hudson River Line
                                            I'm in a New York state of mind
                                            I've seen all the movie stars
                                            In their fancy cars and their limousines
                                            Been high in the Rockies under the evergreens
                                            But I know what I'm needing
                                            And I don't want to waste more time
                                            I'm in a New York state of mind</p>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="col-lg-1 text-end">
                                        <img className="imgRedonda" src="https://img.clasf.mx/2020/08/18/Laptop-Sony-Vaio-rosa-descompuesta-20200818084932.7086270015.jpg"></img>
                                    </Col>
                                    <Col className="col-lg-11">
                                        <span className="fw-bold">Luis Manuel Pozo :</span>
                                        <br></br>
                                        <Form.Group className="mb-4">
                                            <Form.Control
                                                name="description"
                                                placeholder="Agrega un comentario"
                                                as="textarea"
                                                rows={4}
                                            />
                                        </Form.Group>
                                        
                                        
                                    </Col>
                                    <hr></hr>
                                    <Form.Group className="mb-4">
                                            <Row>
                                                <Col className="text-end">
                                                    <Button
                                                        variant="danger"
                                                        type="button"
                                                        onClick={handleCloseForm}
                                                    >
                                                        <FeatherIcon icon={"x"} />
                                                        &nbsp; Cerrar
                                                    </Button>
                                                    <Button
                                                        variant="success"
                                                        className="ms-3"
                                                        type="submit"
                                                    >
                                                        <FeatherIcon icon={"check"} />
                                                        &nbsp; Guardar
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                </Row>
                            </Container>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
};

