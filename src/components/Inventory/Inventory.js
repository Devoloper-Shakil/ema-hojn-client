import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
  const hendelProdect=()=>{
        fetch('https://tranquil-cliffs-57284.herokuapp.com/addProduct',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <button onClick={hendelProdect}>AddProducts</button>
        </div>
    );
};

export default Inventory;