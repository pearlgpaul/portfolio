import { getCollection, type CollectionEntry } from 'astro:content';

/** Prefix an internal path with the site's base path (e.g. /resume). */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export type Project = CollectionEntry<'projects'>;

/** Published projects: featured first, then newest first. Drafts only appear in dev. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export const statusLabel: Record<Project['data']['status'], string> = {
  template: 'Template',
  'in-progress': 'In progress',
  complete: 'Complete',
  archived: 'Archived',
};
