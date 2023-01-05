import React, { useState } from 'react'
import { MdVisibility } from 'react-icons/md';
import logo from "../../../assets/logo.png";
import CustomButton from '../../../components/form/CustomButton';
import LoginFinishModal from './components/LoginFinishModal';
import SignUpFinishModal from './components/SignUpFinishModal';

export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className='container-fluid main-login' >
      <div className="row top-sec">

        <div className="col-lg-5 col-11">

          <img className="img-fluid" src={logo} alt="logo" />
        </div>
        <div className="col-6">
          <h2>SIGN UP</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-9 col-12">
          <div className="row justify-content-center form-sec">
            <div className="col-11">
              <div className="row">
                <div className="col-lg-12 col-11">
                  <h2>INSERT NAME</h2> <br />
                  <input type="text" placeholder="Text" />
                </div>
                <div className="col-lg-6 col-11">
                  <h2>PASSWORD</h2> <br />
                  <div className="pass-wrapper">
                    <input
                      placeholder="Password"
                      type={passwordShown ? "text" : "password"}
                    />
                    <MdVisibility className='icon'
                      onClick={togglePasswordVisiblity}
                    />
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
                    />
                    <MdVisibility className='icon'
                      onClick={togglePasswordVisiblity}
                    />
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
                      <select name="catogories" id="catogories" className='select'>
                        <option>+44</option>
                        <option value="1"> +92</option>
                        <option value="1"> +92</option>
                        <option value="1"> +92</option>
                      </select>
                    </div>
                    <div className="col-lg-11 col-9">
                      <input className='phoneinput' type="text" placeholder="Text" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-11">
                  <h2>EMAIL</h2> <br />
                  <input type="text" placeholder="Text" />
                </div>
                <div className="col-lg-12 col-11">
                  <h2>LOCATION</h2> <br />
                  <input type="text" placeholder="Text" />
                </div>
                <div className="row mt-5 justify-content-center">
                  <div className="col-lg-2 col-5">
                    <CustomButton onClick={() => setModalShow(true)} text='FINISH' />
                  </div>
                </div>
              </div>
            </div>
            <div >
              <SignUpFinishModal modalShow={modalShow} setModalShow={setModalShow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
