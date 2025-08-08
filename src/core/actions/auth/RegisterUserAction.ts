import { AuthTokenResponse } from "@/core/domain/auth/AuthTokenResponse";
import { Action } from "../common/Action";
import { AuthService } from "@/core/domain/auth/AuthService";

interface RegisterUserActionParams {
  email: string;
  password: string;
  repeatPassword: string
}

export class RegisterUserAction implements Action<RegisterUserActionParams, AuthTokenResponse> {
  constructor(
    private readonly authService: AuthService
  ) { }
  execute(params: RegisterUserActionParams): Promise<AuthTokenResponse> {
    return this.authService.register(params);
  }
}