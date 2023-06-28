export type User = {
  status?: string;
  requestDeletion?: string[];
};

export type Token = string;
export type TokenExpiration = number;

export type AuthResponse = {
  jwt: Token;
  jwtExpiresAt: TokenExpiration;
  refreshToken: Token;
  refreshTokenExpiresAt: TokenExpiration;
  user: User;
};

export type ErrorResponse = {
  message: string;
}[];

export type PendingGroup = "students" | "educators";
