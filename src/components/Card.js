import React from 'react';
import pawPrintDogTreats from '../images/paw-print-dog-treats-smaller.jpg';
import { convertCentsToDollars } from '../helpers';
import AddToCartButton from './AddToCartButton';
import HeaderCartLink from './HeaderCartLink';

const Card = ({
  idFromBackend,
  productName,
  description,
  price,
  packageSize,
}) => {
  return (
    <div className='card'>
      <h3>{productName}</h3>
      <img src={pawPrintDogTreats} alt='paw print shaped dog treat' />
      <p>{description}</p>
      <p>{packageSize}</p>
      <p>{convertCentsToDollars(price)}</p>
      <AddToCartButton
        idFromBackend={idFromBackend}
        productName={productName}
        description={description}
        price={price}
        packageSize={packageSize}
      />
      <HeaderCartLink />
    </div>
  );
};

export default Card;
