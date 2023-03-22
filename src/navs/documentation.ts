import { createPageList } from '@/utils/createPageList';

// map our documentation files to a page
const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
);

export const documentationNav = {
  'Getting Started': [
    {
      title: 'Installation',
      href: '/docs/installation',
      match: /^\/docs\/(installation|guides)/,
    },
    pages['configuration'],
  ],
}
