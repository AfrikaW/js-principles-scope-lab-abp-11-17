
var customerName = 'bob';

//function upperCaseCustomerName(customerName) {
//  console.log (`${customerName}`.toUpperCase())
//}
function upperCaseCustomerName(customerName) {
return `${customerName}`.toUpperCase()
}

// in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer= 'not bob'
}

function overwriteBestCustomer(){
  bestCustomer= 'maybe bob'
  }
