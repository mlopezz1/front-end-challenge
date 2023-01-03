import { PageMetaFragment } from './../../Data/generated/pageMeta';

export const normalizePages = ({ total, page, pages }: PageMetaFragment) => ({
  total,
  page,
  pages,
});

export type Pages = ReturnType<typeof normalizePages>;
