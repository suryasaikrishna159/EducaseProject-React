
import profilePic from "../assets/profile.jpeg";

function Success() {

  const name=localStorage.getItem("name");
  const email=localStorage.getItem("email");
  return (
    <div className="outer2">
      <div className="mainbody2">
        <div className="successtop">Account Settings</div>

        <div className="profile-card">
          <div style={{ display: "flex" }}>
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <div className="profile-info">
              <h4 >{name}</h4>
              <p className="email">{email}</p>
            </div>
          </div>
          <div>
            <p className="desc">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
        <div className="empty-spacer"></div> 
        <div className="footer-border"></div> 
      </div>
    </div>
  );
}

export default Success;