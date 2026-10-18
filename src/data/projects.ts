import projectsData from './projects.json';

export type ProjectCategory = 'technical' | 'ai' | 'writing' | 'media' | 'freelance';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  details: string[];
  tags: string[];
  image: string;
  accent: string;
  links?: {
    github?: string;
    demo?: string;
    video?: string;
  };
  featured?: boolean;
}

export const technicalProjects: ProjectItem[] = projectsData.technicalProjects as ProjectItem[];
export const creativeProjects: ProjectItem[] = projectsData.creativeProjects as ProjectItem[];

export const allProjects: ProjectItem[] = [
  ...technicalProjects,
  ...creativeProjects,
];
