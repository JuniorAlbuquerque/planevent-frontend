import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
};
