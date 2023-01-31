import React from 'react'
import { Button, Modal, Toast, ToastContainer } from 'react-bootstrap';
import { IoMdClose } from "react-icons/io";
import done from "../../../../assets/icons/done_outline.svg";
import logo from "../../../../assets/logo.png";

export default function LogoutModal({ modalShow, setModalShow }) {
    return (
        <div>
            <Modal
                show={modalShow} onHide={() => {
                    setModalShow(false)
                }}

                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-11">
                            <img className="img-fluid" src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-md-6 col-sm-6">
                            <div className="card-title text-center">
                                <h3 className=" login-main-heading" style={{ marginTop: '3rem' }}>
                                    Do you want to log out ?
                                </h3>
                                <Button className='btn-main' style={{ marginTop: '4rem' }}>Yes</Button>
                                <Button variant='outlined' style={{ marginTop: '1rem' }} className='outlined-btn'>No</Button>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
