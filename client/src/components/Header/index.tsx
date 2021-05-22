import React, { FC } from 'react';
import classes from './header.module.scss';
import SearchBar from '../SearchBar';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header: FC = () => (
  <header className={classes.header}>
    <div className={classes.searchBarWrapper}>
      <Link to='/'>
        <img className={classes.logo} src={Logo} alt='Mercado Libre' />
      </Link>
      <SearchBar />
    </div>
  </header>
);

export default Header;
