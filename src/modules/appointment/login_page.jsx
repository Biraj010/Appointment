import { useState } from "react";
import LoginDisplay from "../../components/login/logindisplay";
import LoginForm from "../auth/login";
import SignupForm from "../auth/signup";

const LoginPage = () => {
  const [showLoginDisplay, setLoginDisplay] = useState(false); 
  const [isLogin, setIsLogin] = useState(true); 

  
  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  
  const handleClose = () => {
    setLoginDisplay(false); 
  };

  return (
    <div>
      <button onClick={() => setLoginDisplay(true)}>Login</button>{" "}
     
      <LoginDisplay
        show={showLoginDisplay}
        onClose={handleClose} 
      >
        
        {isLogin ? (
          <LoginForm onSwitch={toggleAuth} onClose={handleClose} />
        ) : (
          <SignupForm onSwitch={toggleAuth} onClose={handleClose} />
        )}
      </LoginDisplay>
    </div>
  );
};

export default LoginPage;
