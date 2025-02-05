const AccountId = 144553
let EmailId = 'ryj@google.com'
var AccountPass = 1234
AccountCity = 'Delhi'
let AccountState;

// AccountId = 2  not allowed   

/* Prefer not to use var because it might get issue in block scope and functional scope */

console.log(AccountId);

console.table([AccountId, EmailId, AccountPass, AccountCity, AccountState])
