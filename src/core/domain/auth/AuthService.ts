import { AuthLoginParams } from "./AuthLoginParams";
import { AuthRegistrationParams } from "./AuthRegistrationParams";
import { AuthTokenResponse } from "./AuthTokenResponse";

export interface AuthService {
  login(params: AuthLoginParams): Promise<AuthTokenResponse>;
  register(params: AuthRegistrationParams): Promise<AuthTokenResponse>;
  googleLogin(params: any): Promise<AuthTokenResponse>;
}