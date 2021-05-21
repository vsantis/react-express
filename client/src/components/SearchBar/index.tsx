import React, { FC } from 'react';
import classes from './searchBar.module.scss';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

const SearchBar: FC = () => (
  <form className={classes.container}>
    <input
      type='text'
      className={classes.input}
      maxLength={120}
      autoCapitalize='off'
      autoFocus
      autoCorrect='off'
      spellCheck={false}
      tabIndex={2}
      aria-label='Ingresa lo estás buscando'
      placeholder='Buscar productos, marcas y más...'
      name='search-input'
    />
    <button className={classes.button}>
      <SearchIcon className={classes.iconButton} />
    </button>
  </form>
);

export default SearchBar;
