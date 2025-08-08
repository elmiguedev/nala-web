import { GoogleLoginAction } from "../actions/auth/GoogleLoginAction";
import { LoginUserAction } from "../actions/auth/LoginUserAction";
import { RegisterUserAction } from "../actions/auth/RegisterUserAction";
import { getAuthService } from "./ServiceProvider";

const authService = getAuthService();

const ActionProvider = {
  login: new LoginUserAction(authService),
  register: new RegisterUserAction(authService),
  googleLogin: new GoogleLoginAction(authService)
};

export default ActionProvider;