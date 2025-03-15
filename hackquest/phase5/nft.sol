// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MyNFT {
    struct Token {
        string name;
        string description;
        address owner;
    }

    mapping(uint256 => Token) private tokens;
    uint256 nextTokenId = 1;

    function mint(
        string memory _name,
        string memory _description
    ) public returns (uint256) {
        Token memory newNFT = Token(_name, _description, msg.sender);
        tokens[nextTokenId] = newNFT;
        nextTokenId ++;

        return nextTokenId-1;

    }

    function getNFT(uint256 _tokenId) public view returns(string memory name, string memory description, address owner){
          require(_tokenId >= 1 && _tokenId < nextTokenId, "Invalid token ID");
    }
}
