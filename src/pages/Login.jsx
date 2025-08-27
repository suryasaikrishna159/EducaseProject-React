
import {useState} from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    
    const [email,setemail]=useState("Marry@gmail.com");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
      
    
    const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all required fields.");
      return; 
    }

    
    localStorage.setItem("email", email);

    
    navigate("/success");
  };
    return (
    <div className="outer" >
      <div className="mainbody" style={{justifyContent:"flex-start"}}>
        <div>
          <div className="innerdiv" style={{paddingRight:"75px"}}>
            <h1 className="heading">Signin to your PopX account</h1>
            <p style={{color:"#7f7773"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          
        
          <div className="formpiece">
            <p className="label">Email address<span>*</span></p>
            <input type="text" onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter email address"/>
          </div>
          <div className="formpiece">
            <p className="label">Password<span>*</span></p>
            <input type="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter password"/>
          </div>

            
        </div>
        <button  className="button" onClick={handleLogin} style={{ color: "#f7f8f9", backgroundColor: "#c9c9c9",marginTop:"20px" }}>
            Login
        </button>

        
        
      </div>
    </div>
  );
}
export default Login;