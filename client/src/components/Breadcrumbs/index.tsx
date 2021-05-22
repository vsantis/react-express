import React, { FC } from 'react';
import classes from './breadcrumbs.module.scss';

type BreadcrumbsProps = {
  content: string[];
};

const Breadcrumbs: FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => (
  <div className={classes.wrapper}>
    <ul>
      {props.content.map((breadcrumb, index) => (
        <>
          <span className={classes.breadcrum}>{breadcrumb}</span>
          {props.content.length > index + 1 ? <span className={classes.separator}>{'/'}</span> : ''}
        </>
      ))}
    </ul>
  </div>
);

export default Breadcrumbs;
