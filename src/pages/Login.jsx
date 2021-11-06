import React from 'react'
import google_logo_white from '../assets/google_logo_white.png';
import tech_fun_horizontal_300 from '../assets/tech_fun_horizontal_300.png';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div>
          <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-form p-l-55 p-r-55 p-t-178">
              <span className="login100-form-title">
                Sistema de Gestión de Ventas <br />Tech &amp; Fun
              </span>
              <div className="validate-input">
                Bienvenido
              </div>
              <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                <input className="input100" type="text" name="username" placeholder="Username" />
                <span className="focus-input100" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Please enter password">
                <input className="input100" type="password" name="pass" placeholder="Password" />
                <span className="focus-input100" />
              </div>
              <div className="text-right p-t-13 p-b-23">
                <span className="txt1">
                  Forgot
                </span>
                <a href="#" className="txt2">
                  Username / Password?
                </a>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Sign in
                </button>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  <div>
                    <Link to='/Users'>
                      <img className="google_logo" src={google_logo_white} /> Ingresa con tu cuenta de Google
                    </Link>
                  </div>
                </button>
              </div>
              <div className="footer">
                <img className="footer_logo" src={tech_fun_horizontal_300} />
              </div>
            </div>
          </div>
        </div>
      </div>  
        </div>
    )
}

export default Login
