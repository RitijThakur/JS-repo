const AccountId=14444
let EmailId="ritij@gmail.com"
var AccountPassword="45454"
accountcity="jaipur"
let accountState;
/*
prefer not to use var 
because of problem in block scope and functional scope 
*/

console.table([AccountId,EmailId,AccountPassword,accountState])

/*
you can see that we have defined a variable using let i.e accountState,but we have not given any value to it 
so when we run it js gives us message as undefined so if not given value to variable js considers it as undefined.
*/