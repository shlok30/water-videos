import { Link } from "react-router-dom"

const Login = () => {
    
    return(
        <div className="flex flex-center height-100vh">
            <div className="container center-block half-width">
                <div className = "container auth-container center-block" style={{border:"1px solid black"}}>
                    <div className = "primary-text center-text text-m bold primary-colour">Login</div>
                    <div className = "padding-s">
                        <label htmlFor="email-field" className="input-label">Email Address</label>
                        <input type = "email" id = "email-field" className = "input-field m2-top full-width" style = {{display: "block",width:"100%"}} placeholder="Please Enter Email Here" />
                    </div>

                    <div className="padding-s flex flex-column">
                        <label htmlFor="password-field" className="input-label">Enter Password</label>
                        <input type = "password" id = "password-field" className = "input-field m2-top full-width" style = {{display: "block",width:"100%"}} placeholder="Please Enter Password Here" />
                    </div>
                
        
                    <div className = "padding-s-block m2-top flex space-between">
                        <div className="flex gap-m align-center">
                            <input type = "checkbox" />
                            <p>Remember Me</p>
                        </div>
                        <a href="" className = "primary-text">Forgot Password</a>
                    </div>

                    <button className="btn btn-secondary full-width m2-top">Login</button>
                    <div className = "m2-top">
                        <Link to = "/signup " className = "primary-text">Create New Account?</Link>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Login