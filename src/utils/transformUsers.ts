import { GitHubUser } from "../types";

export const transformUsers = (items: any[]): GitHubUser[] =>
  items.map(({ id, login, avatar_url, html_url }) => ({
    id,
    login,
    avatar_url,
    html_url,
  }));
