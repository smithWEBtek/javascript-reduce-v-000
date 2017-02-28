const products = [
  { name: 'Head & Shoulders Shampoo', price: 4.99, discount: 0.6 },
  { name: 'Twinkies', price: 7.99, discount: 0.45 },
  { name: 'Oreos', price: 6.49, discount: 0.8 },
  { name: 'Jasmine-scented bath pearls', price: 13.99, discount: 0.7 },
];




const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 },
];
 
function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}
 
// console.log(reduce(couponLocations, couponCounter, 0)); // prints 15
console.log(couponLocations.reduce(couponCounter, 0)); // also prints 15!

function reduce(collection, callback, initialValue) {
  let result = initialValue;
 
  collection.forEach(product => {
    result = callback(result, product);
  });
 
  return result;
}



// ______________________________________________________

// function getTotalAmountForProducts(products, callback, initialValue) {
//   let totalPrice = initialValue;
 
//   products.forEach(product => {
//     totalPrice = callback(totalPrice, product);
//   });
 
//   return totalPrice;
// }
 
// function callback(totalPrice, product) {
//   if (product.price < 7) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
 
// console.log(getTotalAmountForProducts(products, callback, 0)); // still prints 11.5. Yeah!


// ______________________________________________________
function callback(totalPrice, product) {
  if (product.price < 7) {
    return totalPrice + product.price;
  }
  return totalPrice;
}
 
console.log(getTotalAmountForProducts(products, callback)); // prints 11.5

 
function getTotalAmountForProducts(products, callback) {
  let totalPrice = 0;
 
  products.forEach(product => {
    totalPrice = callback(totalPrice, product);
  });
 
  return totalPrice;
}
 
// function callback(totalPrice, product) {
//   if (product.discount >= .5) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
 
// console.log(getTotalAmountForProducts(products, callback)); // prints 25.5
 

// // ______________________________________________________
// function getTotalAmountForProducts(products) {
//   let totalPrice = 0;
 
//   products.forEach(product => {
//     if (product.discount >= 0.5) {
//       totalPrice += product.price;
//     }
//   });
//   return totalPrice;
// }
 
// console.log(getTotalAmountForProducts(products)); // prints 25.5