import { AuthRepository } from "@/core/domain/repositories/AuthRepository";
import { NalaApiConnector } from "../connector/NalaApiConnector";
import { AuthLoginParams } from "@/core/domain/entities/auth/AuthLoginParams";
import { AuthTokenResponse } from "@/core/domain/entities/auth/AuthTokenResponse";
import { AuthRegisterParams } from "@/core/domain/entities/auth/AuthRegisterParams";

export class NalaApiAuthRepository implements AuthRepository {
  private connector: NalaApiConnector = new NalaApiConnector();

  public async login(params: AuthLoginParams): Promise<AuthTokenResponse> {
    const response = await this.connector.login(params);
    return {
      id: response.id,
      accessToken: response.token,
      refreshToken: response.refreshToken
    }
  }
  public async register(params: AuthRegisterParams): Promise<AuthTokenResponse> {
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