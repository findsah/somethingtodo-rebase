import React, { useState } from 'react'
import { MdVisibility } from 'react-icons/md';
import logo from "../../../assets/logo.png";
import CustomButton from '../../../components/form/CustomButton';
import LoginFinishModal from './components/LoginFinishModal';
import LogoutModal from './components/LogoutModal';

export default function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className='container-fluid main-login'>
            <div className="row top-sec">

                <div className="col-lg-5 col-11">

                    <img className="img-fluid" src={logo} alt="logo" />
                </div>
                <div className="col-2 text-center">
                    <h2>LOG IN</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center" >
                <div className="col-lg-4 col-12">
                    <div className="row justify-content-center form-sec" >
                        <div className="col-12">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-10 col-11  text-center">
                                    <h2>INSERT NAME</h2> <br />
                                    <input type="text" placeholder="Text" />
                                </div>
                                <div className="col-lg-10 col-11 text-center ">
                                    <h2>PASSWORD</h2> <br />
                                    <div className="pass-wrapper">
                                        <input
                                            placeholder="Password"
                                            type={passwordShown ? "text" : "password"}
                                        />
                                        <MdVisibility className='icon2'
                                            onClick={togglePasswordVisiblity}
                                        />
                                        <div className="col-8">
                                            <p>Forgot you password ?</p>
                                        </div>
                                    </div>
                                    {/* <input type="password" placeholder="Password" /> */}

                                </div>
                                <div className="row mt-5 justify-content-center">
                                    <div className="col-lg-6 col-5 mb-5">
                                        {/* <CustomButton onClick={() => setModalShow(true)} text='FINISH' /> */}
                                        <CustomButton onClick={() => setModalShow(true)} text='FINISH' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            {/* <LoginFinishModal modalShow={modalShow} setModalShow={setModalShow} /> */}
                            <LoginFinishModal modalShow={modalShow} setModalShow={setModalShow} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
