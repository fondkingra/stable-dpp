export type BreadcrumbItem = {
  label: string;
  /** Omit (or leave undefined) on the current page — rendered as plain text with aria-current. */
  href?: string;
};

type PageBreadcrumbProps = {
  items: BreadcrumbItem[];
};

/**
 * Visible breadcrumb trail above the page H1.
 * Last crumb is the current page (not a link). Earlier crumbs use real anchors.
 */
export function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  if (!items.length) return null;

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1 || !item.href;
          return (
            <li
              key={`${item.label}-${index}`}
              {...(isCurrent ? { "aria-current": "page" as const } : {})}
            >
              {isCurrent ? item.label : <a href={item.href}>{item.label}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
