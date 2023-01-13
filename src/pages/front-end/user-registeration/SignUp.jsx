import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdVisibility } from "react-icons/md";
import logo from "../../../assets/logo.png";
import CustomButton from "../../../components/form/CustomButton";
import LoginFinishModal from "./components/LoginFinishModal";
import SignUpFinishModal from "./components/SignUpFinishModal";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const formSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is mandatory"),
    email: Yup.string()
      .required("Email is mandatory")
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Enter a valid email address"
      ),
    password: Yup.string()
      .required("Password is mandatory")
      .min(8, "Password must be at 8 char long")
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character (!@#$*)"
      ),
    confirmPwd: Yup.string()
      .required("Password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
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
    <div className="container-fluid main-login">
      <div className="row top-sec">
        <div className="col-lg-5 col-11">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>
        <div className="col-6">
          <h2>SIGN UP</h2>
        </div>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9 col-12">
            <div className="row justify-content-center form-sec">
              <div className="col-11">
                <div className="row">
                  <div className="col-lg-12 col-11">
                    <h2>INSERT NAME</h2> <br />
                    <input
                      type="text"
                      placeholder="Text"
                      {...register("fullName", { required: true })}
                    />
                    <br />
                     {errors.fullName && <> &nbsp;<span style={{ color: "red" }}>{errors.fullName.message}</span></>}

                  </div>
                  <div className="col-lg-6 col-11">
                    <h2>PASSWORD</h2> <br />
                    <div className="pass-wrapper">
                      <input
                        placeholder="Password"
                        type={passwordShown ? "text" : "password"}
                        {...register("password", { required: true })}
                      />
                    
                      <MdVisibility
                        className="icon"
                        onClick={togglePasswordVisiblity}
                      />
                        <br />
                      {errors.password && <> &nbsp;<span style={{ color: "red" }}>{errors.password.message}</span></>}
                      
                    </div>
                    {/* <input type="password" placeholder="Password" /> */}
                  </div>
                  <div className="col-lg-6 col-11">
                    <h2>RE - ENTER</h2> <br />
                    {/* <input type="password" placeholder="Password" /> */}
                    <div className="pass-wrapper">
                      <input
                        placeholder="Password"
                        type={passwordShown ? "text" : "password"}
                        {...register("confirmPwd", { required: true })}
                      />
                      <MdVisibility
                        className="icon"
                        onClick={togglePasswordVisiblity}
                      />
                        <br />
                      {errors.confirmPwd && <> &nbsp;<span style={{ color: "red" }}>{errors.confirmPwd.message}</span></>}
                      
                    </div>
                  </div>
                  <div className="col-lg-12 col-11">
                    <h2>BUSSINES NAME</h2> <br />
                    <input type="text" placeholder="Text" />
                  </div>
                  <div className="col-lg-12 col-11">
                    <h2>PHONE</h2> <br />
                    {/* <input type="number" className='input1' placeholder="+44" /> */}
                    <div className="row">
                      <div className="col-lg-1 col-3">
                        <select
                          name="catogories"
                          id="catogories"
                          className="select"
                        >
                          <option>+44</option>
                          <option value="1"> +92</option>
                          <option value="1"> +92</option>
                          <option value="1"> +92</option>
                        </select>
                      </div>
                      <div className="col-lg-11 col-9">
                        <input
                          className="phoneinput"
                          type="text"
                          placeholder="Text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-11">
                    <h2>EMAIL</h2> <br />
                    <input type="text" placeholder="Text" 
                    {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && <> &nbsp;<span style={{ color: "red" }}>{errors.email.message}</span></>}
                  </div>
                  <div className="col-lg-12 col-11">
                    <h2>LOCATION</h2> <br />
                    <input type="text" placeholder="Text" />
                  </div>
                  <div className="row mt-5 justify-content-center">
                    <div className="col-lg-2 col-5">
                      {/* <CustomButton type="submit" onClick={() => setModalShow(true)} text='FINISH' /> */}
                      <CustomButton type="submit" text="FINISH" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <SignUpFinishModal
                  modalShow={modalShow}
                  setModalShow={setModalShow}
                />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
