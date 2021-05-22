import React, { useContext } from 'react';
import './App.scss';
import Header from './components/Header';
import Item from './components/Item';
import Results from './pages/Results';
import { Context } from './context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetail from './pages/ItemDetail';
import ItemSkeleton from './components/ItemSkeleton';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  const { items, categories, isLoading } = useContext(Context);

  return (
    <Router>
      <Header />
      <main className='content'>
        {categories && categories.length ? <Breadcrumbs content={categories} /> : ''}

        <Switch>
          <Route
            exact
            path='/'
            render={() =>
              isLoading ? (
                <ItemSkeleton />
              ) : (
                <Results>
                  {!!items?.length &&
                    items.map((item) => (
                      <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imageUrl={item.picture}
                        price={item.price.amount}
                      />
                    ))}
                </Results>
              )
            }
          />
          <Route exact path='/:id'>
            <ItemDetail />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
