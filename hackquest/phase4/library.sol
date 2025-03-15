pragma solidity ^0.8.0;
// SPDX-License-Identifier: MIT 

library MathLibrary {
  function square(uint256 x) external pure returns (uint256) {
    return x * x;
  }
}

contract ExampleContract {
  function calculateSquare(uint256 y) external pure returns (uint256) {
    // Calling functions in a library contract.
    uint256 result = MathLibrary.square(y);
    return result;
  }
}

// jadi library digunakan untuk menggunakan library contract yang sudah dibuat sebelumnya
// library contract tidak bisa memiliki state variable, tidak bisa memiliki constructor, dan tidak bisa diwariskan
// library contract hanya bisa memiliki function yang bersifat pure atau view
// library contract tidak bisa memiliki modifier

