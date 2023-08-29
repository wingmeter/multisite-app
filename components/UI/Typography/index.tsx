import { ReactNode, createElement, forwardRef, CSSProperties, FC } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

type TypographyProps = {
  className?: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  children?: ReactNode;
  dangerouslySetInnerHTML?: { __html: string } | undefined;
  style?: CSSProperties;
  siteType?: 'formaggi' | 'koko' | 'rombaba';
};

// eslint-disable-next-line react/display-name
const Typography: FC<TypographyProps> = forwardRef(
  (
    {
      className = '',
      type = 'p',
      children,
      dangerouslySetInnerHTML,
      style,
      siteType = '',
    },
    ref,
  ) => {
    const additionalStyle = cx({ [type]: true }, className, {
      [siteType]: true,
    });
    return createElement(
      type,
      {
        className: additionalStyle,
        style,
        dangerouslySetInnerHTML,
        ref,
      },
      children,
    );
  },
);

export { Typography };
