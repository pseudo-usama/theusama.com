import data from "./data";
import type { Project } from "./data";

export function getProjectData(slug: string): Project | undefined {
  return data.projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return data.projects.map(project => project.slug);
}