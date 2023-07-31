import React, { useState } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App(props) {
  const [productlist, setProductlist] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
 
  

  const updateTotalExpense = (products) => {
    const sum = products.reduce((total, product) => total + Number(product.price), 0);
    setTotalExpense(sum);
  };

  const saveHandler = (itemNumber,uPrice, uName) => {
    setProductlist((prevList) => {
      const newProduct = {
        id: Math.random().toString(),
        itemNumber:itemNumber,
        price: uPrice,
        name: uName,
      };
      const updatedList = [...prevList, newProduct];
      localStorage.setItem(`${itemNumber}`,JSON.stringify(newProduct));
      updateTotalExpense(updatedList);
     
      return updatedList;
    });
  };

  const deleteHandler = (productId) => {
    setProductlist((prevList) => {
      // Remove the product from the list
      const updatedList = prevList.filter((product) => product.id !== productId);
      updateTotalExpense(updatedList);
      const deletedProduct = prevList.find((product) => product.id === productId);
        if (deletedProduct) {
          localStorage.removeItem(deletedProduct.itemNumber);
        }
      
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
