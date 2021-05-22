import React, { FC } from 'react';
import classes from './item.module.scss';
import formatPrice from '../../helpers/formatPrice';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

type ItemProsp = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
};

const Item: FC<ItemProsp> = ({ id, title, imageUrl, price, ...restProps }: ItemProsp) => (
  <LazyLoad once {...restProps}>
    <div className={classes.container}>
      <LazyLoad height={160} once>
        <Link to={`/${id}`} className={classes.imageContainer}>
          <img src={imageUrl} alt={title} className={classes.image} />
        </Link>
      </LazyLoad>
      <div className={classes.detail}>
        <div className={classes.price}>{formatPrice(price)}</div>
        <Link to={`/${id}`}  className={classes.title}>{title}</Link>
      </div>
      <div></div>
    </div>
  </LazyLoad>
);

export default Item;
