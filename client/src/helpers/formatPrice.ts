const formatPrice = (price: number, currency: 'CLP' | 'USD' = 'CLP') => {
  const options = {
    style: 'currency',
    currency,
    ...(currency === 'USD' && { minimumFractionDigits: 0 }),
  };

  const searchValue = currency === 'USD' ? '$' : 'CLP';
  const replaceValue = currency === 'USD' ? 'USD ' : '$';

  return Intl.NumberFormat('en-EN', options)
    .format(price)
    .split(',')
    .join('.')
    .replace(searchValue, replaceValue);
};

export default formatPrice;
