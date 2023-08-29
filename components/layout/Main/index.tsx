import { FC } from 'react';

import cx from 'classnames';

import { Card, Typography } from '@/components/UI';
import styles from './styles.module.scss';
import { MainContent } from '@/models/page/page';
import { Product } from '@/models/product/product';

interface IMainProps {
  siteType: 'formaggi' | 'koko' | 'rombaba';
  pageData: MainContent;
  productData: Product[];
}

const Main: FC<IMainProps> = ({ siteType, pageData, productData }) => {
  return (
    <main className={cx(styles.main, styles[siteType])}>
      <div className={cx(styles.container, styles.mainContainer)}>
        <Typography
          type="h1"
          siteType={siteType}
          className={cx(styles.mainTitle, styles[siteType])}
        >
          {pageData.mainTitle}
        </Typography>
        <div className={cx(styles.mainProductsContainer)}>
          {productData.map((product) => (
            <Card
              key={product.productId}
              siteType={siteType}
              img={product.productImage}
              description={product.productTitle}
              weight={product.productWeight}
              price={product.productPrice}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
