var mysql = require("mysql");
var inquirer = require("inquirer");
var postItem = require();
var cTable = require("console.table");





var prompt = inquirer.prompt([{
  name: "postOrBid",
  type: "rawlist",
  message: "Select an Item",
  choices: [console.table('bamazon.products')]
}]).then(function (userChoice) {
  if (userChoice.postOrBid === "POST AN ITEM") {
    var itemParameters = {
        itemID: "item_id",
        name: "product_name",
        category: "department_name",
        price: "price",
        stock: "stock_qty",
        cost: "cost_wholesale"
      },
  }
});