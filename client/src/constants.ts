export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:8000" : "";

export const BOARDS_URL = "/api/boards";
export const USERS_URL = "/api/users";
