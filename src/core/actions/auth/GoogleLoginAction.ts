
import { CredentialResponse } from "@react-oauth/google";
import { Action } from "../common/Action";
import { AuthTokenResponse } from "@/core/domain/entities/auth/AuthTokenResponse";
import { AuthRepository } from "@/core/domain/repositories/AuthRepository";

export class GoogleLoginAction implements Action<CredentialResponse, AuthTokenResponse> {
  constructor(
    private readonly authRepository: AuthRepository
  ) { }
  execute(params: any): Promise<AuthTokenResponse> { // TODO: change DTO
    return this.authRepository.googleLogin(params);
  }
}