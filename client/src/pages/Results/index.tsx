import React, { FC, ReactNode } from 'react';
import classes from './results.module.scss';

type ResultsProps = {
  children?: ReactNode
}

const Results: FC<ResultsProps> = ({children}: ResultsProps) => (
  <div className={classes.content}>
    {children}
  </div>
);

export default Results;
