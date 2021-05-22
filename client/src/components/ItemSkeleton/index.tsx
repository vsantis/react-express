import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import classes from './itemSkeleton.module.scss';

type ItemSkeletonType = {
  repeat?: number;
};

const ItemSkeleton: FC<ItemSkeletonType> = ({ repeat = 5 }: ItemSkeletonType) => (
  <div className={classes.container}>
    {[...new Array(repeat)].map((e, index) => (
      <div key={index} className={classes.wrapper}>
        <Skeleton height={160} width={160} />
        <div className={classes.detail}>
          <Skeleton count={2} className={classes.price} />
        </div>
      </div>
    ))}
  </div>
);

export default ItemSkeleton;
