// const GITHUB_API = "https://api.github.com/users/uday169";

// fetch(GITHUB_API)
//   .then((response) => response.json())
//   .then((userData) => {
//     console.log("User Data:", userData);
//     return fetch(userData?.repos_url);
//   })
//   .then((reposResponse) => reposResponse.json())
//   .then((reposData) => console.log("User Repositories:", reposData))
//   .catch((error) => {
//     console.error("Error:", error);
//   });

const cart = ["Shirt", "Pants", "Kurtas", "Bots"];

createOrder(cart)
.then(function (orderId) {
    return orderId
})
.then((orderId) => proceedToPayment(orderId))
.then(function(paymentResult) {
    return showOrderSummary(paymentResult)
})
.then(function(orderSummary) {
    return updateWallet(orderSummary)
})
.then((walletResult) => console.log("Status", walletResult))
.catch((error) => console.log("Error:", error.message))


function updateWallet(orderSummary) {
    return new Promise((resolve, reject) => {
        if (orderSummary) {
            resolve("Wallet updated");
        } else {
            reject(new Error("Wallet updating failed"))
        }
    })
}

function showOrderSummary(paymentResult) {
    return new Promise((resolve, reject) => {
        if (paymentResult) {
            resolve("Order updated successfully");
        } else {
            reject( new Error("Error occur in payment"));
        }
    })
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        if (orderId){
            resolve("Payment done sucessfully")
        } else {
            reject(new Error("Payment failed"))
        }    
    })
}

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (validateCart()) {
      resolve("1234");
    } else {
      const error = new Error("Cart is not validated");
      reject(error);
    }
  });
}

function validateCart() {
  return true;
}
