import { AuthTokenResponse } from "@/core/domain/auth/AuthTokenResponse";
import { Action } from "../common/Action";
import { AuthService } from "@/core/domain/auth/AuthService";

interface LoginUserActionParams {
  email: string;
  password: string;
}

export class LoginUserAction implements Action<LoginUserActionParams, AuthTokenResponse> {
  constructor(
    private readonly authService: AuthService
  ) { }
  execute(params: LoginUserActionParams): Promise<AuthTokenResponse> {
    return this.authService.login(params);
  }
}