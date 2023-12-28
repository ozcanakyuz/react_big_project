import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId="+categoryId
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}


// export function getProducts() {
//   return function (dispatch) {
//     let url = "http://localhost:3000/products";
//     return fetch(url)
//       .then(res => res.json())
//       .then(result => {
//         console.log("products KONSOL:", result); // Konsola kategorileri yazdır
//         dispatch(getProductsSuccess(result));
//       })
//       .catch(error => console.error('Fetch Error:', error));
//   };
// }
