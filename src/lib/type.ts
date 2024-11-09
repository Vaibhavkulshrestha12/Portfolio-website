export interface Project {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
  }