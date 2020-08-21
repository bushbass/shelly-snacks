import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardArea = () => {
  const [productsData, setProductsData] = useState({
    products: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://v2-api.sheety.co/809f986699f7697f7d77f5a6228fa363/shellySnacksData/products"
    )
      .then(results => results.json())
      .then(data => {
        setProductsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("My Error:", error);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div className="lds-facebook">
          <div />
          <div />
          <div />
        </div>
      ) : (
        <section className="product-cards-area">
          {productsData.products.map(
            ({
              id: idFromBackend,
              productName,
              description,
              packageSize,
              price
            }) => {
              return (
                <Card
                  key={idFromBackend}
                  productName={productName}
                  description={description}
                  packageSize={packageSize}
                  price={price}
                  idFromBackend={idFromBackend}
                />
              );
            }
          )}
        </section>
      )}
    </>
  );
};

export default CardArea;
