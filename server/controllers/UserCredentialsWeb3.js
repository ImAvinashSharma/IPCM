const Web3 = require("web3");
const web3 = new Web3("ws//localhost:8545");

const contractABI = [
  {
    inputs: [],
    name: "last_completed_migration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function",
    constant: true
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function",
    constant: true
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "completed",
        type: "uint256"
      }
    ],
    name: "setCompleted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const userCredentialsContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to store a new credential
function storeCredential(url, username, password, fromAddress) {
  const encodedUrl = web3.utils.asciiToHex(url);
  const encodedUsername = web3.utils.asciiToHex(username);
  const encodedPassword = web3.utils.asciiToHex(password);

  userCredentialsContract.methods
    .storeCredential(encodedUrl, encodedUsername, encodedPassword)
    .send({ from: fromAddress })
    .then(receipt => console.log(receipt));
}

// Function to update an existing credential
function updateCredential(oldUrl, oldUsername, newUrl, newUsername, newPassword, fromAddress) {
  const encodedOldUrl = web3.utils.asciiToHex(oldUrl);
  const encodedOldUsername = web3.utils.asciiToHex(oldUsername);
  const encodedNewUrl = web3.utils.asciiToHex(newUrl);
  const encodedNewUsername = web3.utils.asciiToHex(newUsername);
  const encodedNewPassword = web3.utils.asciiToHex(newPassword);

  userCredentialsContract.methods
    .updateCredential(encodedOldUrl, encodedOldUsername, encodedNewUrl, encodedNewUsername, encodedNewPassword)
    .send({ from: fromAddress })
    .then(receipt => console.log(receipt));
}

// Function to delete a credential
function deleteCredential(url, username, fromAddress) {
  const encodedUrl = web3.utils.asciiToHex(url);
  const encodedUsername = web3.utils.asciiToHex(username);

  userCredentialsContract.methods
    .deleteCredential(encodedUrl, encodedUsername)
    .send({ from: fromAddress })
    .then(receipt => console.log(receipt));
}

// Function to get all credentials with password
function getAllCredentialswithPassword(fromAddress) {
  userCredentialsContract.methods
    .getAllCredentialswithPassword()
    .call({ from: fromAddress })
    .then(credentials => console.log(credentials));
}

// Function to get all credentials for a specific URL
function getAllCredentialsForUrl(url, fromAddress) {
  const encodedUrl = web3.utils.asciiToHex(url);

  userCredentialsContract.methods
    .getAllCredentialsForUrl(encodedUrl)
    .call({ from: fromAddress })
    .then(credentials => console.log(credentials));
}

// Function to get all credentials without password
function getAllCredentialswithoutPassword(fromAddress) {
  userCredentialsContract.methods
    .getAllCredentialswithoutPassword()
    .call({ from: fromAddress })
    .then(credentials => console.log(credentials));
}

export default { storeCredential, updateCredential, deleteCredential, getAllCredentialswithPassword, getAllCredentialsForUrl, getAllCredentialswithoutPassword };
