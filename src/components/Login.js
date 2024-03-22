import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const [email, setemail] = useState('');
    const [Password, setpassword] = useState('');
    const [accept, setaccept] = useState(false);
    const [show, setshow] = useState(false);
    console.log(email)

    function submit(e) {
        e.preventDefault();
        setaccept(true)
    }
    function showpass() {
        setshow(!show)
    }

    return (
        <>
            <h1>SIGN IN</h1>
            <div className="card">
                <form onSubmit={submit}>


                    <div className="input-box">
                        <h4>Email</h4>
                        <input type="Email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <h4>Password</h4>
                        <input type={show?"text" :"Password" }
                            placeholder="Password"
                            required value={Password}
                            onChange={(e) => setpassword(e.target.value)}
                            id="pass"
                        />

                        {Password.length < 8 && accept && <h5 className="error">Password must be more than 8 characters</h5>}
                    </div>
                    
                    <p id="show" onClick={showpass}>{show ? <FontAwesomeIcon icon={faEyeSlash} />
                        : <FontAwesomeIcon icon={faEye} />}</p>
                    <button type="submit" className="btn">SIGN IN</button>
                    <p>Don't you have account?<Link to={'sign'}>Create One</Link></p>

                </form>
            </div>
        </>
    )
}
export default Login;