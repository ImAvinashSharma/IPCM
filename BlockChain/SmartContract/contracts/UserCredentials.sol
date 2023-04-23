// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserCredentials {
    struct Credential {
        string url;
        string username;
        uint256 timestamp;
        string password;
    }

    mapping(address => Credential[]) public credentials;

    function storeCredential(string memory url, string memory username, string memory password) public {
        bytes memory _url = bytes(url);
        bytes memory _username = bytes(username);
        bytes memory _password = bytes(password);

        credentials[msg.sender].push(Credential(
            string(abi.encodePacked(_url)),
            string(abi.encodePacked(_username)),
            block.timestamp,
            string(abi.encodePacked(_password))
        ));
    }

    function updateCredential(string memory oldUrl, string memory oldUsername, string memory newUrl, string memory newUsername, string memory newPassword) public {
        Credential[] storage allCredentials = credentials[msg.sender];

        for (uint256 i = 0; i < allCredentials.length; i++) {
            if (keccak256(bytes(allCredentials[i].url)) == keccak256(bytes(oldUrl)) && keccak256(bytes(allCredentials[i].username)) == keccak256(bytes(oldUsername))) {
                bytes memory _newUrl = bytes(newUrl);
                bytes memory _newUsername = bytes(newUsername);
                bytes memory _newPassword = bytes(newPassword);

                allCredentials[i] = Credential(
                    string(abi.encodePacked(_newUrl)),
                    string(abi.encodePacked(_newUsername)),
                    block.timestamp,
                    string(abi.encodePacked(_newPassword))
                );
            }
        }
    }

    function deleteCredential(string memory url, string memory username) public {
        Credential[] storage allCredentials = credentials[msg.sender];

        for (uint256 i = 0; i < allCredentials.length; i++) {
            if (keccak256(bytes(allCredentials[i].url)) == keccak256(bytes(url)) && keccak256(bytes(allCredentials[i].username)) == keccak256(bytes(username))) {
                delete allCredentials[i];
            }
        }
    }

    function getAllCredentialswithPassword() public view returns (Credential[] memory) {
        return credentials[msg.sender];
    }

    function getAllCredentialsForUrl(string memory url) public view returns (Credential[] memory) {
        Credential[] storage allCredentials = credentials[msg.sender];
        Credential[] memory matchingCredentials = new Credential[](allCredentials.length);

        uint256 count = 0;
        for (uint256 i = 0; i < allCredentials.length; i++) {
            if (keccak256(bytes(allCredentials[i].url)) == keccak256(bytes(url))) {
                matchingCredentials[count] = Credential(
                    allCredentials[i].url,
                    allCredentials[i].username,
                    allCredentials[i].timestamp,
                    allCredentials[i].password
                );
                count++;
            }
        }

        return matchingCredentials;
    }

    function getAllCredentialswithoutPassword() public view returns (Credential[] memory) {
        Credential[] storage allCredentials = credentials[msg.sender];
        Credential[] memory decryptedCredentials = new Credential[](allCredentials.length);

        for (uint256 i = 0; i < allCredentials.length; i++) {
            decryptedCredentials[i] = Credential(
                allCredentials[i].url,
                allCredentials[i].username,
                allCredentials[i].timestamp,
                ""
            );
        }

        return decryptedCredentials;
    }
}