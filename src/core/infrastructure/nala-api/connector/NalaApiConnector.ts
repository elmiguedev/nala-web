import { getSessionFromCookie } from "@/helpers/auth/AuthUtils";
import { LoginRequest } from "../dtos/auth/LoginRequest";
import { LoginResponse } from "../dtos/auth/LoginResponse";
import { RegisterRequest } from "../dtos/auth/RegisterRequest";
import { CreatePetResponse } from "../dtos/pets/CreatePetResponse";
import { Pet } from "@/core/domain/entities/pets/Pet";

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

  public async createPet(params: any): Promise<CreatePetResponse> {
    console.log(">> entra al connector de create pet")
    const url = `${this.baseUrl}/pets/new`;
    const tokenInfo = await getSessionFromCookie();
    console.log(">> obtuvo la info del token", tokenInfo)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenInfo.accessToken}`,
      },
      body: JSON.stringify(params),
    });
    console.log(">> la respuesta de create pet", response)
    if (!response.ok) {
      throw new Error("Register failed");
    }
    return response.json();
  }

  public async getPets(): Promise<Pet[]> {
    const url = `${this.baseUrl}/pets`;
    const tokenInfo = await getSessionFromCookie();
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenInfo.accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Register failed");
    }
    return response.json();
  }

  public async getPet(id: string): Promise<Pet> {
    const url = `${this.baseUrl}/pets/${id}`;
    const tokenInfo = await getSessionFromCookie();
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenInfo.accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Get pet error");
    }
    return response.json();
  }
}