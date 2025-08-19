import { AuthTokenResponse } from "@/core/domain/entities/auth/AuthTokenResponse";
import { Action } from "../common/Action";
import { AuthRepository } from "@/core/domain/repositories/AuthRepository";


interface LoginUserActionParams {
  email: string;
  password: string;
}

export class LoginUserAction implements Action<LoginUserActionParams, AuthTokenResponse> {
  constructor(
    private readonly authRepository: AuthRepository
  ) { }
  execute(params: LoginUserActionParams): Promise<AuthTokenResponse> {
    return this.authRepository.login(params);
  }
}