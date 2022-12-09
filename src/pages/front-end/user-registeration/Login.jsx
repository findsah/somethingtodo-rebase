import React from 'react'
import logo from "../../../assets/logo.png";
import CustomButton from '../../../components/form/CustomButton';

export default function Login() {
  return (
    <div className='container-fluid main-login'>
      <div className="row top-sec">

        <div className="col-5">

          <img className="img-fluid" src={logo} alt="logo" />
        </div>
        <div className="col-6">
          <h2>Login</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-9">
          <div className="row  form-sec">
            <div className="col-12">
              <h2>INSERT NAME</h2> <br />
              <input type="text" placeholder="Text" />
            </div>
            <div className="col-6">
              <h2>PASSWORD</h2> <br />
              <input type="password" placeholder="Password" />
            </div>
            <div className="col-6">
              <h2>RE - ENTER</h2> <br />
              <input type="password" placeholder="Password" />
            </div>
            <div className="col-12">
              <h2>BUSSINES NAME</h2> <br />
              <input type="text" placeholder="Text" />
            </div>
            <div className="col-12">
              <h2>PHONE</h2> <br />
              <input type="text" placeholder="Text" />
              {/* <input type="text" placeholder="Text" /> */}

            </div>
            <div className="col-12">
              <h2>EMAIL</h2> <br />
              <input type="text" placeholder="Text" />
            </div>
            <div className="col-12">
              <h2>LOCATION</h2> <br />
              <input type="text" placeholder="Text" />
            </div>
            <CustomButton text='view all' />
          </div>
        </div>

        {/* <div className="col-5">

          <input type="text" placeholder="Text" />
        </div> */}

      </div>
      <div className="container">

      </div>
    </div>
  )
}
