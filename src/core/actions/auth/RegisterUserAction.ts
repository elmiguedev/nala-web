import { AuthRepository } from "@/core/domain/repositories/AuthRepository";
import { Action } from "../common/Action"; import { AuthTokenResponse } from "@/core/domain/entities/auth/AuthTokenResponse";

interface RegisterUserActionParams {
  email: string;
  password: string;
  repeatPassword: string
}

export class RegisterUserAction implements Action<RegisterUserActionParams, AuthTokenResponse> {
  constructor(
    private readonly authRepository: AuthRepository
  ) { }
  execute(params: RegisterUserActionParams): Promise<AuthTokenResponse> {
    return this.authRepository.register({
      email: params.email,
      password: params.password,
      name: ""
    });
  }
}