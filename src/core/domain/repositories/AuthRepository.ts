import { AuthLoginParams } from "../entities/auth/AuthLoginParams";
import { AuthRegisterParams } from "../entities/auth/AuthRegisterParams";
import { AuthTokenResponse } from "../entities/auth/AuthTokenResponse";

export interface AuthRepository {
  login(params: AuthLoginParams): Promise<AuthTokenResponse>;
  register(params: AuthRegisterParams): Promise<AuthTokenResponse>;
  googleLogin(params: any): Promise<AuthTokenResponse>;
}