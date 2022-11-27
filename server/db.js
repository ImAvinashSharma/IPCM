const cassandra = require("cassandra-driver");
const config = require("./config/db.config");

const authProvider = new cassandra.auth.PlainTextAuthProvider("cassandra", "cassandra");

let client = new cassandra.Client({ contactPoints: [config.HOST], authProvider, localDataCenter: config.DataCenter, keyspace: config.keyspace });

exports.client = client;

/*
//? ”cassandra-driver” is in the node_modules folder. Redirect if necessary.
let cassandra = require('cassandra-driver');

//? Replace 'Username' and 'Password' with the username and password from your cluster settings
let authProvider = new cassandra.auth.PlainTextAuthProvider('Username', 'Password');
//? Replace the PublicIPs with the IP addresses of your clusters
let contactPoints = ['PublicIP1','PublicIP2','PublicIP3'];
//? Replace DataCenter with the name of your data center, for example: 'AWS_VPC_US_EAST_1'
let localDataCenter = 'DataCenter';

let client = new cassandra.Client({contactPoints: contactPoints, authProvider: authProvider, localDataCenter: localDataCenter, keyspace:'grocery'});

//? Define and execute the queries
let query = 'SELECT name, price_p_item FROM grocery.fruit_stock WHERE name=? ALLOW FILTERING';
let q1 = client.execute(query, ['oranges']).then(result => {console.log('The cost per orange is ' + result.rows[0].price_p_item);}).catch((err) => {console.log('ERROR oranges:', err);});
let q2 = client.execute(query, ['pineapples']).then(result => {console.log('The cost per pineapple is ' + result.rows[0].price_p_item);}).catch((err) => {console.log('ERROR pineapples:', err);});
let q3 = client.execute(query, ['apples']).then(result => {console.log('The cost per apple is ' + result.rows[0].price_p_item);}).catch((err) => {console.log('ERROR apples:', err);});

//? Exit the program after all queries are complete
Promise.allSettled([q1,q2,q3]).finally(() => client.shutdown());

*/