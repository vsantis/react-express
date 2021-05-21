import React, { FC, ReactNode } from 'react';
import classes from './results.module.scss';
// import Item from '../../components/Item';

type ResultsProps = {
  children?: ReactNode
}

const Results: FC<ResultsProps> = ({children}: ResultsProps) => (
  <div className={classes.content}>
    {children}
    {/* <Item
      title='Mesa Nordica Escandinava 60x100 Comedor Cocina Maciza'
      imageUrl='http://http2.mlstatic.com/D_605204-MLA31040454909_062019-O.jpg'
      price={6599}
    />
    <Item
      title='Mesa Industrial Comedor Madera Y Hierro (140x80x75)'
      imageUrl='http://http2.mlstatic.com/D_977778-MLA31000872113_062019-O.jpg'
      price={16500}
    />
    <Item
      title='Mesa De Cocina Grande Sin Tornillos, Fácil Armado | Mite'
      imageUrl='http://http2.mlstatic.com/D_823430-MLA42293521905_062020-O.jpg'
      price={7899}
    />
    <Item
      title='Mesa Industrial Comedor (1.8x0.80x0.78m) Envio Gratis'
      imageUrl='http://http2.mlstatic.com/D_696870-MLA26254930503_102017-O.jpg'
      price={13800}
    />
    <Item
      title='Mesa Comedor 140x80 Tapa Paraiso Excelente Calidad !!!!!'
      imageUrl='http://http2.mlstatic.com/D_691418-MLA42067437809_062020-O.jpg'
      price={13590}
    />
    <Item
      title='Mesa Maciza Pino 1,20 Mts Pata Recta Desarmada 3x3 Pulgadas'
      imageUrl='http://http2.mlstatic.com/D_662869-MLA43608311857_092020-O.jpg'
      price={4100}
    />
    <Item
      title='Mesa De Estudio Nebraska Y Caño Negro Begônia'
      imageUrl='http://http2.mlstatic.com/D_925132-MLA43927716008_102020-O.jpg'
      price={4999}
    /> */}
  </div>
);

export default Results;
