import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

import cx from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = PropsWithChildren<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    theme?: 'primary' | 'secondary';
    siteType?: 'formaggi' | 'koko' | 'rombaba';
    isFullWidth?: boolean;
    isSmall?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }
>;

// eslint-disable-next-line react/display-name
const Button = ({
  theme = 'primary',
  isFullWidth,
  onClick,
  className,
  children,
  siteType = 'formaggi',
}: ButtonProps) => {
  const additionalStyle = cx(
    { [styles[theme]]: true },
    { [styles[siteType]]: true },
    {
      [styles.full_width]: isFullWidth,
    },
    {
      [styles.button]: true,
    },
    className,
  );

  return (
    <button type="button" className={additionalStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
