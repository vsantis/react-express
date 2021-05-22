import React, { FC, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import classes from './itemDetail.module.scss';
import { Context } from '../../context';
import formatPrice from '../../helpers/formatPrice';
import LazyLoad from 'react-lazyload';
import Skeleton from 'react-loading-skeleton';

const ItemDetail: FC = () => {
  const { getItemDetail, detail, isLoading } = useContext(Context);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getItemDetail(id);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.productContainer}>
        <LazyLoad once>
          <figure className={classes.imageContainer}>
            {isLoading ? (
              <Skeleton style={{width: '100%', height: '30rem'}}/>
            ) : (
              <img className={classes.image} src={detail?.picture} alt={detail?.title} />
            )}
          </figure>
        </LazyLoad>
        <div>
          <div className={classes.descriptionTitle}>{'Descripción del producto'}</div>
          <div className={classes.description}>
            {isLoading ? <Skeleton count={10} /> : detail?.description}
          </div>
        </div>
      </div>
      <div className={classes.priceContainer}>
        <div className={classes.state}>
          {isLoading ? <Skeleton /> : `${detail?.condition} - ${detail?.sold_quantity} vendidos`}
        </div>
        <div className={classes.title}>{isLoading ? <Skeleton count={2} /> : detail?.title}</div>
        <div className={classes.price}>
          {isLoading ? <Skeleton /> : formatPrice(detail?.price.amount as number)}
        </div>
        <button className={classes.buyButton}>Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail;
