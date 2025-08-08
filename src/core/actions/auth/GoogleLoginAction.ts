import { AuthTokenResponse } from "@/core/domain/auth/AuthTokenResponse";
import { Action } from "../common/Action";
import { AuthService } from "@/core/domain/auth/AuthService";
import { CredentialResponse } from "@react-oauth/google";

export class GoogleLoginAction implements Action<CredentialResponse, AuthTokenResponse> {
  constructor(
    private readonly authService: AuthService
  ) { }
  execute(params: any): Promise<AuthTokenResponse> { // TODO: change DTO
    return this.authService.googleLogin(params);
  }
}