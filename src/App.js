import React, { useState, useEffect } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [productlist, setProductlist] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    // Load data from local storage on component mount
    const storedProductList = JSON.parse(localStorage.getItem('productList'));
    if (storedProductList) {
      setProductlist(storedProductList);
      updateTotalExpense(storedProductList);
    }
  }, []);

  const updateTotalExpense = (products) => {
    const sum = products.reduce((total, product) => total + Number(product.price), 0);
    setTotalExpense(sum);
  };

  const saveHandler = (uPrice, uName) => {
    setProductlist((prevList) => {
      const newProduct = {
        id: Math.random().toString(),
        price: uPrice,
        name: uName,
      };
      const updatedList = [...prevList, newProduct];
      updateTotalExpense(updatedList);
      localStorage.setItem('productList', JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const deleteHandler = (productId, productPrice) => {
    setProductlist((prevList) => {
      // Remove the product from the list
      const updatedList = prevList.filter((product) => product.id !== productId);
      updateTotalExpense(updatedList);
      localStorage.setItem('productList', JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <div className="App">
      <h1>Product Cart</h1>
      <ProductForm onSave={saveHandler} />
      <ProductList users={productlist} onDelete={deleteHandler} />
      <span>total Expense: {totalExpense}</span>
    </div>
  );
}

export default App;
