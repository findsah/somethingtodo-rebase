import React from 'react'
import { Modal, Toast, ToastContainer } from 'react-bootstrap';
import { IoMdClose } from "react-icons/io";
import done from "../../../../assets/icons/done_outline.svg";

export default function SignUpFinishModal({ modalShow, setModalShow }) {
    return (
        <div size={28}>
            <Modal
                size='sm'
                show={modalShow} onHide={() => {
                    setModalShow(false)
                }}

                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 d-flex- justify-content-end">
                            <IoMdClose
                                onClick={() => setModalShow(false)}
                                size={28}
                                className="icon-color"
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-9 col-md-6 col-sm-6 d-flex justify-content-center">
                            <div class="card-title text-center">
                                <h2 class="login-main-heading">
                                    You have successfully registered
                                    Thank you
                                </h2>
                                <img src={done} alt="" />
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
