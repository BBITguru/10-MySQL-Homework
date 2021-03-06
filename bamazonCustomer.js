var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // connection.end();
  dbSelectProduct();
});

// first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.

function dbSelectProduct() {
  connection.query("SELECT  product_name, item_id, department_name, price, stock_qty FROM bamazon.products",
    function (err, res) {
      if (err) throw err;
      console.table(res);

      inquirer
        .prompt([{
            name: "product",
            type: "rawlist",
            // choices: [console.table('bamazon.products')]
            choices: function () {
              var productArray = [];
              for (var i = 0; i < res.length; i++) {
                // Product Item Id Push to product array
                productArray.push(res[i].product_name);
              }
              // return product array
              return productArray;
            },
            message: "Select a Product"
          },
          {
            name: "qtySelect",
            type: "input",
            message: "How many would you like?",
            validate: function (value) {
              if (isNaN(value) === false) {
                return true;
              }
              return false;
            }
          }
        ])
        .then(function (answer) {
          var chosenProduct;
          for (var i = 0; i < res.length; i++) {
            if (res[i].product_name === answer.product) {
              chosenProduct = res[i];
            }
          }
          console.log(chosenProduct)
          var stock_qty = chosenProduct.stock_qty;
          if (chosenProduct.stock_qty >= parseInt(answer.qtySelect)) {
            connection.query(
              "UPDATE bamazon.products SET ? WHERE ?", [{
                  stock_qty: stock_qty - answer.qtySelect
                },
                {
                  item_id: chosenProduct.item_id
                }
              ],
              function (err) {
                if (err) throw err;
                console.log("Thank you for your purchase!");
                dbSelectProduct();
              }
            );
          } else {
            return "There was not enough quantity in stock to fill your purchase!  Please try again.";
            start();
          }
        });
    });
}





//       // .then(function(userChoice){
//       //   if (userChoice.postOrBid === "POST AN ITEM") {
//       //     var itemParameters = {
//       //       itemID: "item_id",
//       //       name: "product_name",
//       //       category: "department_name",
//       //       price: "price",
//       //       stock: "stock_qty"
//     }
//   }
// });
// })
// }




// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.