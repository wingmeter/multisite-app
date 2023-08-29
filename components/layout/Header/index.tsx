import { FC, useState, useEffect } from 'react';

import cx from 'classnames';
import Link from 'next/link';

import { Button, Image, Typography } from '@/components/UI';
import { HeaderContent } from '@/models/page/page';

import styles from './styles.module.scss';

interface IHeaderProps {
  siteType: 'formaggi' | 'koko' | 'rombaba';
  pageData: HeaderContent;
}

const Header: FC<IHeaderProps> = ({ siteType = 'formaggi', pageData }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${styles[siteType]}  ${
        scrolled ? styles['scrolled-header'] : ''
      }`}
    >
      <div className={cx(styles.container, styles.headerContainer)}>
        <div className={cx(styles.logoContainer, styles.columns)}>
          <div className={styles.logo}>
            <Image url={pageData.headerLogo} alt="logo" />
          </div>
          <div
            className={`${styles.contacts} ${styles[siteType]} ${
              styles.content
            } ${scrolled ? styles['scrolled-content'] : ''}`}
          >
            <Typography siteType={siteType} type="h2">
              {pageData.headerContacts}
            </Typography>
            <Typography siteType={siteType}>
              {pageData.headerDeliveryText}
            </Typography>
          </div>
          <nav
            className={`${styles.navbar} ${styles[siteType]} ${
              styles.content
            } ${scrolled ? '' : styles['scrolled-content']}`}
          >
            <ul className={styles.navList}>
              {pageData.headerNavLinks.map((el) => {
                return (
                  <li key={el.id}>
                    <Link href={el.route} className={styles[siteType]}>
                      {el.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${styles.cartContainer} ${styles[siteType]} ${styles.topCart} ${
              styles.columns
            } ${scrolled ? '' : styles['scrolled-content']} `}
          >
            <div className={cx(styles.priceAndCount, styles[siteType])}>
              {pageData.headerProductCount > 0 && (
                <Typography siteType={siteType} className={styles.price}>
                  {pageData.headerProductCount}
                </Typography>
              )}
              {pageData.headerProductTotalPrice > 0 && (
                <Typography siteType={siteType} className={styles.count}>
                  {pageData.headerProductTotalPrice}
                </Typography>
              )}
            </div>
            <Button
              theme="secondary"
              siteType={siteType}
            >
              КОРЗИНА
            </Button>
            {pageData.headerLogOutIcon && (
              <Image url={pageData.headerLogOutIcon} alt="log-out" />
            )}
          </div>
          {siteType === "rombaba" && (
            <div className={styles.switcherContainer}>Switcher</div>
          )}
        </div>
        <div className={cx(styles.navContainer, styles.columns)}>
          <nav
            className={`${styles.navbar} ${styles[siteType]} ${
              styles.content
            } ${scrolled ? styles['scrolled-content'] : ''}`}
          >
            <ul className={styles.navList}>
              {pageData.headerNavLinks.map((el) => {
                return (
                  <li key={el.id}>
                    <Link href="#" className={styles[siteType]}>
                      {el.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${styles.cartContainer} ${styles[siteType]} ${styles.columns} ${
              scrolled ? styles['scrolled-content'] : ''
            } `}
          >
            <div className={cx(styles.priceAndCount, styles[siteType])}>
              {pageData.headerProductCount > 0 && (
                <Typography siteType={siteType} className={styles.price}>
                  {pageData.headerProductCount}
                </Typography>
              )}
              {pageData.headerProductTotalPrice > 0 && (
                <Typography siteType={siteType} className={styles.count}>
                  {pageData.headerProductTotalPrice}
                </Typography>
              )}
            </div>
            <Button
              theme="secondary"
              siteType={siteType}
            >
              КОРЗИНА
            </Button>
            {pageData.headerLogOutIcon && (
              <Image url={pageData.headerLogOutIcon} alt="log-out" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
