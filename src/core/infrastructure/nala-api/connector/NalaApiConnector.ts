import { LoginRequest } from "../dtos/auth/LoginRequest";
import { LoginResponse } from "../dtos/auth/LoginResponse";
import { RegisterRequest } from "../dtos/auth/RegisterRequest";

export class NalaApiConnector {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NALA_API_BASE_URL || "";
  }

  public async login(params: LoginRequest): Promise<LoginResponse> {
    const url = `${this.baseUrl}/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }
    return response.json();
  }
  public async register(params: RegisterRequest): Promise<LoginResponse> {
    const url = `${this.baseUrl}/auth/register`;

    console.log()
    console.log(">> url", url)
    console.log(">> params", params)
    console.log()

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    if (!response.ok) {
      throw new Error("Register failed");
    }
    return response.json();
  }

  public async googleLogin(params: any): Promise<LoginResponse> {
    const url = `${this.baseUrl}/auth/google`;

    console.log()
    console.log(">> url", url)
    console.log(">> params", params)
    console.log()

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    if (!response.ok) {
      throw new Error("Register failed");
    }
    return response.json();
  }
}