import React from 'react';
import { withRouter } from 'react-router';

import PaginationItem from './Item';
import PaginationItemIcon from './ItemIcon';

function* renderPages(pathname, pages, active, onPageChange) {
  for (let page = 1; page <= pages; page++)
    yield (
      <PaginationItem
        key={page}
        pathname={pathname}
        page={page}
        active={page === active}
        onClick={() => onPageChange(page)}
      />
    );
}

const Pagination = ({
  location: { pathname },
  label,
  pages,
  active,
  first,
  last,
  onPageChange
}) => {
  const prev = active - 1;
  const next = active + 1;

  return (
    <nav aria-label={label}>
      <ul className="pagination justify-content-end">
        <PaginationItemIcon
          pathname={pathname}
          page={1}
          label="Primeiro"
          icon="angle-double-left"
          disabled={first}
          onClick={() => onPageChange(1)}
        />
        <PaginationItemIcon
          pathname={pathname}
          page={prev}
          label="Anterior"
          icon="angle-left"
          disabled={first}
          onClick={() => onPageChange(prev)}
        />
        {[...renderPages(pathname, pages, active, onPageChange)]}
        <PaginationItemIcon
          pathname={pathname}
          page={next}
          label="Próximo"
          icon="angle-right"
          disabled={last}
          onClick={() => onPageChange(next)}
        />
        <PaginationItemIcon
          pathname={pathname}
          page={pages - 1}
          label="Último"
          icon="angle-double-right"
          disabled={last}
          onClick={() => onPageChange(pages)}
        />
      </ul>
    </nav>
  );
};

export default withRouter(Pagination);
