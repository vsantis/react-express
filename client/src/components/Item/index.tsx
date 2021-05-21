import React, { FC } from 'react';
import classes from './item.module.scss';
import formatPrice from '../../helpers/formatPrice';
import LazyLoad from 'react-lazyload';

type ItemProsp = {
  title: string;
  imageUrl: string;
  price: number;
};

const Item: FC<ItemProsp> = ({ title, imageUrl, price }: ItemProsp) => (
  <LazyLoad once>
    <div className={classes.container}>
      <LazyLoad height={160} once>
        <div className={classes.imageContainer}>
          <img src={imageUrl} alt={title} className={classes.image} />
        </div>
      </LazyLoad>
      <div className={classes.detail}>
        <div className={classes.price}>{formatPrice(price)}</div>
        <div className={classes.title}>{title}</div>
      </div>
      <div></div>
    </div>
  </LazyLoad>
);

export default Item;
