import React, {useState} from 'react'
import '../../assets/css/Login.css';
import img from '../../assets/images/team.jpg';
const Login = () => {
    const [details,setDetails]= useState({username:"",password:"",images:""});
    
    const handleSubmit = e => {
        e.preventDefault();
        Login(details);
    }
  return (
    <div className="wrapper">
        <div className="container-login">
            <div className="wrap">
                <div className="login-pic">
                <img src={img} alt="IMG"/>
                </div>
                <div className="login-form validate-form">
                    <div className="login-form-title">
                        <b>Đăng Nhập Hệ Thống</b>
                    </div>
                    <form  onSubmit={handleSubmit}>
                        <div className="login-input validate-input">
                            <input className="input"  type="text"  name="username"placeholder="Tài Khoản Quản Trị"onChange={ e => setDetails({...details,username: e.target.value})} value={details.username}/>
                            <div classname="focus-input"></div>
                            <div className="symbol-input">
                            <i class='bx bx-user'></i>
                            </div>
                        </div>
                        <div className="login-input validate-input">
                            <input  className="input" name="password"  placeholder="Mật Khẩu"type="password"onChange={ e => setDetails({...details,password: e.target.value})} value={details.password}/>
                            <div toggle="#password-field" classname="bx bx-hide fa-fw field-icon click-eye">
                                {/* <i class='bx bx-hide'></i> */}
                            </div>
                            <div classname="focus-input"></div>
                            <div className="symbol-input">
                                <i class='bx bx-key'></i>
                            </div>
                        </div>
                        <div classname="container-login100-form-btn">
                                <input type="submit" value="Đăng nhập" id="submit"  />
                        </div>
                            
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login