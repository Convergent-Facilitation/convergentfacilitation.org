import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import {useVisibleBlogSidebarItems} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';


export default function BlogSidebarDesktop({sidebar}) {
	
  const items = useVisibleBlogSidebarItems(sidebar.items);
  const location = useLocation();
  const pathname = location.pathname;
  const firstLevelPath = "/" + pathname.split('/')[1];

  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
              <Link
                to={firstLevelPath}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {sidebar.title}
              </Link>
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
