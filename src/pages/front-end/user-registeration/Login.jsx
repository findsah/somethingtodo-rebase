import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { MdVisibility } from 'react-icons/md';
import logo from "../../../assets/logo.png";
import CustomButton from '../../../components/form/CustomButton';
import LoginFinishModal from './components/LoginFinishModal';
import LogoutModal from './components/LogoutModal';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from 'react-router-dom';

export default function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const [modalShow, setModalShow] = useState(false);
    const formSchema = Yup.object().shape({
        fullName: Yup.string().required("Full name is mandatory"),
        password: Yup.string()
          .required("Password is mandatory")
          .min(8, "Password must be at 8 char long")
          .matches(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character (!@#$*)"
          ),
      });
      const formOptions = { resolver: yupResolver(formSchema) };
      const {
        register,
        handleSubmit,
        resetField,
        watch,
        formState: { errors },
      } = useForm(formOptions);
      const onSubmit = () => {
        setModalShow(true);
             console.log('shahid');
        // let res = await axios.post(
        //     "https://next-server.nextgencrypto.org/api/user/signup",
        //     data
        // )
        // if (res.data.success) {
        //     navigate("/login")
        // }
        // setShowData(res.data.message)
        // setShow(true)
        // resetField("fullName");
        // resetField("email");
        // resetField("password")
        // resetField("confirmPwd")
      };
    return (
        <div className='container-fluid main-login'>
            <div className="row top-sec">

                <div className="col-lg-5 col-11">
                  <Link to='/'>
                    <img className="img-fluid" src={logo} alt="logo" />
                  </Link>
                </div>
                <div className="col-lg-2 col-6 text-center">
                    <h2>LOG IN</h2>
                </div>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>

            <div className="row d-flex justify-content-center" >
                <div className="col-lg-4 col-12">
                    <div className="row form-sec" >
                        <div className="col-12  d-flex justify-content-center m-auto" >
                            <div >
                            <h2>INSERT NAME</h2>
                            <input className='mt-3' type="text" placeholder="Text"
                             {...register("fullName", { required: true })}
                            />
                             <br />
                     {errors.fullName && <> &nbsp;<span style={{ color: "red" }}>{errors.fullName.message}</span></>}

                        <div className="col-12  d-flex justify-content-center m-auto">
                            <div>
                            <h2>PASSWORD</h2>
                            <div className="pass-wrapper mt-3">
                                        <input
                                            placeholder="Password"
                                            type={passwordShown ? "text" : "password"}
                                            {...register("password", { required: true })}

                                        />
                                        <MdVisibility className='icon2'
                                            onClick={togglePasswordVisiblity}
                                        />
                                        <br />
                      {errors.password && <> &nbsp;<span style={{ color: "red" }}>{errors.password.message}</span></>}
                      
                                        <div className="col-12 mt-1">
                                            <p>Forgot you password ?</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="row mt-5 justify-content-center">
                                    <div className="col-lg-8 col-5 mb-5">
                                        <CustomButton type="submit"  text='FINISH' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-10 col-11">
                                    <div className="col-11 d-flex justify-content-center">
                                    <h2>INSERT NAME</h2> 
                                    </div>
                                    <div className="col-12 mt-4 d-flex justify-content-center">
                                    <input type="text" placeholder="Text" />
                                    </div>
                                </div>
                                <div className="col-lg-10 col-11">
                                    <div className="col-10 d-flex justify-content-center">
                                    <h2>PASSWORD</h2> 
                                    </div>
                                    <div className="col-12 mt-4 d-flex justify-content-center">
                                    <div className="pass-wrapper">
                                        <input
                                            placeholder="Password"
                                            type={passwordShown ? "text" : "password"}
                                        />
                                        <MdVisibility className='icon2'
                                            onClick={togglePasswordVisiblity}
                                        />
                                        <div className="col-8 mt-1">
                                            <p>Forgot you password ?</p>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                       
                                <div className="row mt-5 justify-content-center">
                                    <div className="col-lg-6 col-5 mb-5">
                                        <CustomButton onClick={() => setModalShow(true)} text='FINISH' />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div >
                            <LoginFinishModal modalShow={modalShow} setModalShow={setModalShow} />
                        </div>
                    </div>
                </div>
            </div>
            </Form>
        </div>
    )
}
