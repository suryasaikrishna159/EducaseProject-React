import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
    <div className="outer" >
        <div className="mainbody" style={{justifyContent:"flex-end"}}>
            <div className="innerdiv">
                <h1 className="heading">Welcome to PopX</h1>
                <p style={{color:"#7f7773"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <Link className="button" to="/createacc" style={{color:"#f7f8f9",backgroundColor:"#6c25ff"}}>Create Account</Link>
            <Link className="button" to="/login" style={{backgroundColor:"#e5d5f7",color:"#4d4d4d"}}>Already Registered? Login</Link>
        </div>
    </div>)
}
export default Home;