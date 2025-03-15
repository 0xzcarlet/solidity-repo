# Dokumentasi `minting.sol`

## Deskripsi
`minting.sol` adalah kontrak pintar yang digunakan untuk mencetak token baru pada blockchain. Kontrak ini memungkinkan pengguna untuk membuat token baru dan mengelola distribusi token tersebut.

## Fungsi

### `mint`
```solidity
function mint(address to, uint256 amount) public
```
Fungsi ini digunakan untuk mencetak token baru dan mengirimkannya ke alamat yang ditentukan.

**Parameter:**
- `to`: Alamat penerima token yang baru dicetak.
- `amount`: Jumlah token yang akan dicetak.

### `totalSupply`
```solidity
function totalSupply() public view returns (uint256)
```
Fungsi ini mengembalikan total jumlah token yang telah dicetak.

**Return:**
- `uint256`: Total jumlah token yang telah dicetak.

### `balanceOf`
```solidity
function balanceOf(address account) public view returns (uint256)
```
Fungsi ini mengembalikan jumlah token yang dimiliki oleh alamat tertentu.

**Parameter:**
- `account`: Alamat yang ingin diperiksa saldo tokennya.

**Return:**
- `uint256`: Jumlah token yang dimiliki oleh alamat tersebut.

## Peristiwa

### `Transfer`
```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```
Peristiwa ini dipicu setiap kali token ditransfer dari satu alamat ke alamat lain.

**Parameter:**
- `from`: Alamat pengirim token.
- `to`: Alamat penerima token.
- `value`: Jumlah token yang ditransfer.

## Lisensi
Kontrak ini dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT).
