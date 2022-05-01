import { Link } from "react-router-dom"
import { useAuth } from "../context/auth-context"
import { useUser } from "../context/user-context"

const Signup = () => {
    
    const {setEmail,setPassword,signupFunction,email,password} = useAuth()

    const {userDispatch} = useUser()

    return(
        <div className="flex flex-center height-100vh">
            <div className="container center-block half-width">
                <div className = "container auth-container center-block" style={{border:"1px solid black"}}>
                    <div className = "primary-text center-text text-m bold primary-colour">Signup</div>
                    <div className = "padding-s">
                        <label htmlFor="email-field" className="input-label">Email Address</label>
                        <input type = "email" id = "email-field" className = "input-field m2-top full-width" style = {{display: "block",width:"100%"}} placeholder="Please Enter Email Here" onChange = {(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="padding-s flex flex-column">
                        <label htmlFor="password-field" className="input-label">Enter Password</label>
                        <input type = "password" id = "password-field" className = "input-field m2-top full-width" style = {{display: "block",width:"100%"}} placeholder="Please Enter Password Here" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button className="btn btn-secondary full-width m2-top" onClick = {() => signupFunction(email,password,userDispatch)}>Sign Up</button>
    
                </div>
            </div>
        </div>
    )
}

export default Signup