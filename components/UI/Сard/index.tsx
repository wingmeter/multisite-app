import { FC, useState } from 'react';

import cx from 'classnames';
import { StaticImageData } from 'next/image';

import { Button, Image, Typography } from '..';

import styles from './styles.module.scss';

interface ICardProps {
  img: string | StaticImageData;
  description: string;
  weight: number;
  price: number;
  siteType?: 'formaggi' | 'koko' | 'rombaba';
}

export const Card: FC<ICardProps> = ({
  img,
  description,
  weight,
  price,
  siteType = 'formaggi',
}) => {
  const [isOrdered, setIsOrdered] = useState(false);

  const toggleOrder = () => {
    setIsOrdered(!isOrdered);
  };

  return (
    <div className={cx(styles.card, styles[siteType])}>
      <Image url={img} alt={description} />
      <Typography siteType={siteType} className={styles.cardDescription}>
        {description}
      </Typography>
      <Typography siteType={siteType} className={styles.cardWeight}>
        {weight} г
      </Typography>
      <div className={styles.cardBottom}>
        <Typography siteType={siteType} className={styles.cardBottomPrice}>
          {price} ₽
        </Typography>
        {isOrdered ? (
          <Button
            theme="secondary"
            siteType={siteType}
            isFullWidth
            onClick={toggleOrder}
          >
            Добавить
          </Button>
        ) : (
          <Button
            theme="primary"
            siteType={siteType}
            isFullWidth
            onClick={toggleOrder}
          >
            Заказать
          </Button>
        )}
      </div>
    </div>
  );
};
