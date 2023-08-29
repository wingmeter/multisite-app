import React, { CSSProperties } from 'react';
import NextImage, { StaticImageData } from 'next/image';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface IImageProps {
  className?: string;
  url: string | StaticImageData;
  sizes?: string;
  style?: CSSProperties;
  alt?: string;
}

// eslint-disable-next-line react/display-name
const Image = ({
  className = '',
  url,
  sizes,
  style,
  alt = 'imgnotfound',
  ...props
}: IImageProps) => (
  <NextImage
    style={style}
    sizes={sizes}
    loading="lazy"
    src={url}
    alt={alt}
    className={cx(className)}
    {...props}
  />
);

export { Image };
