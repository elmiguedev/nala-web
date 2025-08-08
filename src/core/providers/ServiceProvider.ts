import { AuthService } from "../domain/auth/AuthService";
import { NalaApiAuthService } from "../infrastructure/nala-api/services/NalaApiAuthService";

const g = globalThis as any;

export function getAuthService(): AuthService {
  if (!g._authService) {
    g._authService = new NalaApiAuthService();
  }
  return g._authService;
}
