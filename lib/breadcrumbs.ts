export interface BreadcrumbItem {
  title: string;
  href: string;
}

export const getBreadcrumbs = (path: string): BreadcrumbItem[] => {
  const baseBreadcrumbs: BreadcrumbItem[] = [
    { title: 'Portfolio', href: '/' }
  ];

  switch (path) {
    case '/projects':
      return [
        ...baseBreadcrumbs,
        { title: 'Projects', href: '/projects' }
      ];
    case '/experience':
      return [
        ...baseBreadcrumbs,
        { title: 'Experience', href: '/experience' }
      ];
    default:
      return baseBreadcrumbs;
  }
};