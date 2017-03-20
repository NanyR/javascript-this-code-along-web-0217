const app = "I don't do much."
function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}
var sally = new Customer("Sally", "4");
function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
