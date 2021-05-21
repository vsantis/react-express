import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Item from './components/Item';
import Results from './pages/Results';
import axios from './middleware/axiosInstance';

function App() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('/items', {
        params: {
          q: 'macbook',
        },
      })
      .then((result) => {
        console.log(result.data);
        setItems(result.data.items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <main className='content'>
        <Results>
          {!!items.length &&
            items.map((item: any) => (
              <Item title={item.title} imageUrl={item.picture} price={item.price.amount} />
            ))}
          {console.log(items.length)}
        </Results>
      </main>
    </>
  );
}

export default App;
