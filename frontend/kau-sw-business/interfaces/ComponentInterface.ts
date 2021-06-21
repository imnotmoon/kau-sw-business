import React, { ReactNode } from 'react';

export type LayoutProps = {
  children?: ReactNode;
  modalHandler?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DetailMenuProp = {
  selectedMenu?: string;
  isPhone: boolean;
};

export type CalendarCardsProp = {
  imageUrl: string;
  title: string;
  link: string;
};

export type NewsCardProp = {
  title: string;
  type: string;
};

export type SimtemapModalProp = {
  modalHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CarouselItemProp = {
  children?: ReactNode;
};

export type SliderProp = {
  style?: object;
};
