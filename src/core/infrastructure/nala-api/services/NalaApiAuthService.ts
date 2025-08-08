import { AuthLoginParams } from "@/core/domain/auth/AuthLoginParams";
import { AuthRegistrationParams } from "@/core/domain/auth/AuthRegistrationParams";
import { AuthService } from "@/core/domain/auth/AuthService";
import { AuthTokenResponse } from "@/core/domain/auth/AuthTokenResponse";
import { NalaApiConnector } from "../connector/NalaApiConnector";

export class NalaApiAuthService implements AuthService {
  private connector: NalaApiConnector = new NalaApiConnector();

  public async login(params: AuthLoginParams): Promise<AuthTokenResponse> {
    const response = await this.connector.login(params);
    return {
      id: response.id,
      accessToken: response.token,
      refreshToken: response.refreshToken
    }
  }
  public async register(params: AuthRegistrationParams): Promise<AuthTokenResponse> {
    const response = await this.connector.register(params);
    return {
      id: response.id,
      accessToken: response.token,
      refreshToken: response.refreshToken
    }
  }

  public async googleLogin(params: any): Promise<AuthTokenResponse> {
    const response = await this.connector.googleLogin(params);
    return {
      id: response.id,
      accessToken: response.token,
      refreshToken: response.refreshToken
    }
  }
}