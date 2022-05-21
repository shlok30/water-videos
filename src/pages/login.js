import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth-context"
import { useUser } from "../context/user-context"

const Login = () => {

    const {email,setEmail,password,setPassword,authFunction,authError,setAuthError} = useAuth()

    const {userDispatch} = useUser()

    const navigate = useNavigate()

    const location = useLocation()

    const from = location.state?.from
        
    return(
        <div className="flex flex-center height-100vh">
            <div className="container center-block half-width">
                <div className = "container auth-container center-block" style={{border:"1px solid black"}}>
                    <div className = "primary-text center-text text-m bold primary-colour">Login</div>
                    <div className = "padding-s">
                        <label htmlFor="email-field" className="input-label">Email Address</label>
                        <input type = "email" id = "email-field" className = "input-field m2-top full-width" style = {{display: "block",width:"100%"}} placeholder="Please Enter Email Here" value = {email} onChange = {(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="padding-s flex flex-column">
                        <label htmlFor="password-field" className="input-label">Enter Password</label>
                        <input type = "password" id = "password-field" className = "input-field m2-top full-width" style = {{display: "block",width:"100%"}} placeholder="Please Enter Password Here" value = {password} onChange = {(e) => setPassword(e.target.value)} />
                    </div>
                
        
                    <div className = "padding-s-block m2-top flex space-between">
                        <div className="flex gap-m align-center">
                            <input type = "checkbox" />
                            <p>Remember Me</p>
                        </div>
                        <a href="" className = "primary-text">Forgot Password</a>
                    </div>

                    <button className="btn btn-secondary full-width m2-top" onClick = {() => authFunction(email,password,userDispatch,navigate,"login",from,setAuthError)}>Login</button>
                    <div className = "m2-top">
                        <Link to = "/signup " className = "primary-text" state = {{from}}>Create New Account?</Link>
                    </div>

                    <p className="error-colour-text m2-top">{authError}</p>

                </div>

            </div>
        </div>
    )
}

export default Login