import axios from 'axios';

export const apiCalling = (page, scb, fcb) => {
  return (dispatch) => {
    axios
    .get(`https://dummyjson.com/products?skip=${page}&limit=${10}`)
    .then(response => {
      const result = response?.data;
      if (page > 1) {
        scb(result.products);
      } else {
        scb(result.products);
      }
    })
    .catch(errorResponse => {
      console.log(errorResponse);
    });
  }
};

export const searchApiCalling = (string, scb, fcb) => {
  axios
    .get(`https://dummyjson.com/products/search?q=${string}`)
    .then(response => {
      const result = response?.data;
      scb(result.products);
    })
    .catch(errorResponse => {
      fcb(errorResponse);
    });
};

// 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
