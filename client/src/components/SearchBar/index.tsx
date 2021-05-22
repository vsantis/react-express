import React, { FC, createRef, FormEvent, useContext } from 'react';
import classes from './searchBar.module.scss';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { Context } from '../../context';
import { useHistory } from 'react-router-dom';

const SearchBar: FC = () => {
  const { getItems } = useContext(Context);
  const input = createRef<HTMLInputElement>();
  const history = useHistory();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push('/');
    getItems(input.current?.value as string);
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <input
        ref={input}
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
};

export default SearchBar;
