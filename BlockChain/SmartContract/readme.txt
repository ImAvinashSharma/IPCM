To run the BlockChain :
    cd MajorProject/BlockChain
    sh blockchainStart.sh

To run the contract:
    cd MajorProject/SmartContract/
    truffle console --network=besu
    truffle(besu)> migrate (Only if you are starting a new blockchain)
    truffle(besu)> UserCredentials.deployed().then(function(instance){app=instance})
    truffle(besu)> app
    truffle(besu)> app.function_name(parameter values) [Ex :  app.storeCredential("a","b","c") ]

To stop blockchain:
    >ps 
    note the PID of java
    sh stop.sh PID

To delete blockchain:
    sh deleteChainData.sh
