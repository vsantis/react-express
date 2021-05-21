import React, { FC } from 'react';
import classes from './header.module.scss';
import SearchBar from '../SearchBar';
import Logo from '../../images/logo.png';

const Header: FC = () => (
  <header className={classes.header}>
    <div className={classes.searchBarWrapper}>
      <img className={classes.logo} src={Logo} alt='Mercado Libre' />
      <SearchBar />
    </div>
  </header>
);

export default Header;
