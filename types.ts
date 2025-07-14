
export interface GitHubUser {
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}
