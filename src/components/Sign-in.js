import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sign() {
    const [firstName, setfirstName] = useState('');
    const [secondName, setsecondName] = useState('');
    const [email, setemail] = useState('');
    const [Password, setpassword] = useState('');
    const [accept, setaccept] = useState(false);
    const [show, setshow] = useState(false);


    function submit(e) {
        e.preventDefault()
        setaccept(true)
    }
    function showpass() {
        setshow(!show)
    }

    return (
        <>
            <h1>Create your account</h1>
            <div className="card">

                <form onSubmit={submit}  >

                    <div className="input-box">
                        <h4>First Name</h4>
                        <input type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                        />
                        {firstName === '' && accept && <h5 className="error">firstName is empty</h5>}
                    </div>
                    <div className="input-box">
                        <h4>Second Name</h4>
                        <input type="text"
                            placeholder="Second Name"
                            value={secondName}
                            onChange={(e) => setsecondName(e.target.value)}

                        />
                        {secondName === '' && accept && <h5 className="error">secondName is empty</h5>}
                    </div>
                    <div className="input-box">
                        <h4>Email</h4>
                        <input type="Email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        {email === '' && accept && <h5 className="error">email is empty</h5>}
                    </div>
                    <div className="input-box">
                        <h4>Password</h4>
                        <input type={show ? "text" : "Password"}
                            placeholder="Password"
                            value={Password}
                            onChange={(e) => setpassword(e.target.value)}
                            id="passwor"
                        />
                        {Password.length < 8 && accept && <h5 className="error">Password must be more than 8 characters</h5>}
                    </div>
                    <p id="showw" on onClick={showpass}>{show?<FontAwesomeIcon icon={faEyeSlash}/>:<FontAwesomeIcon icon={faEye} /> }</p>
                    <button type="submit" className="btn">Create</button>
                    <p>Do you have account?<Link to={'/'}>Sign In</Link></p>

                </form>
            </div>
        </>
    )

}

export default Sign;