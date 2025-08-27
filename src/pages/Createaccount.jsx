import { Link } from "react-router-dom";
import { useState } from "react";

function Createaccount() {
  const [name, setName] = useState("Marry Doe");
  const [email, setEmail] = useState("Marry@gmail.com");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleLogin = () => {
    if (!name || !email || !phone || !password || !company || !agency) {
      alert("Please fill in all required fields.");
      setIsValid(false);
      return;
    }

    
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    setIsValid(true); 
  };

  return (
    <div className="outer">
      <div className="mainbody">
        <div>
          <div className="innerdiv" style={{ paddingRight: "75px" }}>
            <h1 className="heading">Create your PopX account</h1>
          </div>

          <div className="formpiece">
            <p className="label">
              Full Name<span>*</span>
            </p>
            <input type="text"  onChange={(e) => setName(e.target.value)} placeholder="Enter Full Name"/>
          </div>

          <div className="formpiece">
            <p className="label">
              Phone number<span>*</span>
            </p>
            <input type="number"  onChange={(e) => setPhone(e.target.value)} placeholder="Phone number"/>
          </div>

          <div className="formpiece">
            <p className="label">
              Email address<span>*</span>
            </p>
            <input type="text"  onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email address"/>
          </div>

          <div className="formpiece">
            <p className="label">
              Password<span>*</span>
            </p>
            <input type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
          </div>

          <div className="formpiece">
            <p className="label">
              Company name<span>*</span>
            </p>
            <input type="text"  onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company Name"/>
          </div>

          <div>
            <p className="radiopara">
              Are you an Agency?<span style={{ color: "red" }}>*</span>
            </p>
            <div className="radio">
              <div className="innerradio">
                <input
                  name="agency"
                  type="radio"
                  checked={agency === "yes"}
                  onChange={() => setAgency("yes")}
                  style={{
                    accentColor: "#6c25ff",
                    transform: "scale(1.5)",
                    marginRight: "8px",
                  }}
                />
                <span>Yes</span>
              </div>
              <div className="innerradio">
                <input
                  name="agency"
                  type="radio"
                  checked={agency === "no"}
                  onChange={() => setAgency("no")}
                  style={{
                    accentColor: "#6c25ff",
                    transform: "scale(1.5)",
                    marginRight: "8px",
                  }}
                />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>

        
        <Link
          to={isValid ? "/success" : "#"}
          className="button"
          style={{ color: "#f7f8f9", backgroundColor: "#6c25ff" }}
          onClick={handleLogin}
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Createaccount;
