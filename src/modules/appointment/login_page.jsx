import { useState } from "react";
import FormModel from "../../components/login/form_model";
import LoginForm from "../auth/login";
import SignupForm from "../auth/signup";

const LoginPage = () => {
  const [showFormModel, setFormModel] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const handleClose = () => {
    setFormModel(false);
  };

  const handleLoginSuccess = () => {
    handleClose();
  };

  return (
    <div>
      {/* <button onClick={() => setFormModel(true)}>Login</button> */}
      <FormModel show={showFormModel} onClose={handleClose}>
        {isLogin ? (
          <LoginForm
            onSwitch={toggleAuth}
            onLoginSuccess={handleLoginSuccess}
          />
        ) : (
          <SignupForm onSwitch={toggleAuth} onClose={handleClose} />
        )}
      </FormModel>
    </div>
  );
};

export default LoginPage;
