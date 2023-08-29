import { FC } from 'react';

import Link from 'next/link';
import cx from 'classnames';

import { Image, Typography } from '@/components/UI';
import { FooterContent } from '@/models/page/page';

import styles from './styles.module.scss';

interface IFooterProps {
  siteType: 'formaggi' | 'koko' | 'rombaba';
  pageData: FooterContent;
}

const Footer: FC<IFooterProps> = ({ siteType = 'formaggi', pageData }) => {
  return (
    <footer className={cx(styles.footer, styles[siteType])}>
      <div className={cx(styles.container, styles.footerContainer)}>
        <div className={cx(styles.topPartContainer, styles[siteType])}>
          <Typography
            type="h1"
            siteType={siteType}
            className={cx(styles.topPartTitle, styles[siteType])}
          >
            {pageData.topPart.topPartTitle}
          </Typography>
          <div className={cx(styles.topPartContent, styles[siteType])}>
            <div>
              <Typography
                siteType={siteType}
                className={styles.topPartContentTitle}
              >
                {pageData.topPart.topPartLeftTitle}
              </Typography>
              <ul className={styles.topPartList}>
                {pageData.topPart.topPartLeftList.map((el, idx) => (
                  <li
                    key={idx}
                    className={cx(styles.topPartListItem, styles[siteType])}
                  >
                    <Typography siteType={siteType}>{el}</Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Typography
                siteType={siteType}
                className={styles.topPartContentTitle}
              >
                {pageData.topPart.topPartRightTitle}
              </Typography>
              <ul className={styles.topPartList}>
                {pageData.topPart.topPartRightList.map((el, idx) => (
                  <li
                    key={idx}
                    className={cx(styles.topPartListItem, styles[siteType])}
                  >
                    <Typography siteType={siteType}>{el}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={cx(styles.bottomPartContainer, styles.columns)}>
          <div className={cx(styles.contactInfo, styles[siteType])}>
            <Typography type="h2" siteType={siteType}>
              {pageData.bottomPart.bottomPartContacts.phoneNumber}
            </Typography>
            <Typography siteType={siteType}>
              {pageData.bottomPart.bottomPartContacts.deliveryText}
            </Typography>
            <Typography siteType={siteType}>
              {pageData.bottomPart.bottomPartContacts.bonusCard}
            </Typography>
            <div className={styles.apps}>
              {pageData.bottomPart.bottomPartContacts.appIcons?.map(
                (el, idx) => <Image key={idx} url={el} alt="appIcons" />,
              )}
            </div>
          </div>
          <div className={cx(styles.deliveryInfo, styles[siteType])}>
            {pageData.bottomPart.bottomPartLinksFirst.map((el) => (
              <Link key={el.id} href={el.link}>
                <Typography siteType={siteType}>{el.label}</Typography>
              </Link>
            ))}
          </div>
          <div className={cx(styles.bonusInfo, styles[siteType])}>
            {pageData.bottomPart.bottomPartLinksSecond.map((el) => (
              <Link key={el.id} href={el.link}>
                <Typography siteType={siteType}>{el.label}</Typography>
              </Link>
            ))}
          </div>
          <div className={cx(styles.copyrightInfo, styles[siteType])}>
            <Typography siteType={siteType} className={styles.copyrightText}>
              {pageData.bottomPart.bottomPartInfo.firstText}
            </Typography>
            <Typography siteType={siteType} className={styles.copyrightText}>
              {pageData.bottomPart.bottomPartInfo.secondText}
            </Typography>
            <Typography siteType={siteType} className={styles.copyrightText}>
              {pageData.bottomPart.bottomPartInfo.thirdText}
            </Typography>
            <div className={styles.copyrightIcons}>
              {pageData.bottomPart.bottomPartInfo.icons?.map((el, id) => (
                <Image key={id} url={el} alt="icons" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
