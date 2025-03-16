# Dokumentasi `nft.sol`

## Deskripsi
`nft.sol` adalah kontrak pintar yang digunakan untuk membuat dan mengelola Non-Fungible Tokens (NFTs) pada blockchain. Kontrak ini memungkinkan pengguna untuk mencetak, mentransfer, dan membakar NFT.

## Struktur Data

### `Token`
```solidity
struct Token {
  string name;
  string description;
  address owner;
}
```
Struktur ini digunakan untuk menyimpan informasi tentang NFT, termasuk nama, deskripsi, dan alamat pemiliknya.

## Fungsi

### `mint`
```solidity
function mint(string memory _name, string memory _description) public returns (uint256)
```
Fungsi ini digunakan untuk mencetak NFT baru dan menetapkannya kepada pemanggil fungsi.

**Parameter:**
- `_name`: Nama dari NFT.
- `_description`: Deskripsi dari NFT.

**Return:**
- `uint256`: ID dari NFT yang baru dicetak.

### `transfer`
```solidity
function transfer(address _to, uint256 _tokenId) public
```
Fungsi ini digunakan untuk mentransfer NFT dari satu alamat ke alamat lain.

**Parameter:**
- `_to`: Alamat penerima NFT.
- `_tokenId`: ID dari NFT yang akan ditransfer.

### `getNFT`
```solidity
function getNFT(uint256 _tokenId) public view returns (string memory name, string memory description, address owner)
```
Fungsi ini digunakan untuk mendapatkan informasi tentang NFT tertentu.

**Parameter:**
- `_tokenId`: ID dari NFT yang ingin diperiksa.

**Return:**
- `name`: Nama dari NFT.
- `description`: Deskripsi dari NFT.
- `owner`: Alamat pemilik dari NFT.

### `getTokensByOwner`
```solidity
function getTokensByOwner(address _owner) public view returns (uint256[] memory)
```
Fungsi ini digunakan untuk mendapatkan semua ID NFT yang dimiliki oleh alamat tertentu.

**Parameter:**
- `_owner`: Alamat pemilik yang ingin diperiksa.

**Return:**
- `uint256[]`: Daftar ID NFT yang dimiliki oleh alamat tersebut.

### `burn`
```solidity
function burn(uint256 _tokenId) public
```
Fungsi ini digunakan untuk membakar (menghapus) NFT dari peredaran.

**Parameter:**
- `_tokenId`: ID dari NFT yang akan dibakar.

## Fungsi Internal

### `deleteById`
```solidity
function deleteById(address account, uint256 _tokenId) internal
```
Fungsi ini digunakan untuk menghapus NFT dari daftar kepemilikan alamat tertentu.

**Parameter:**
- `account`: Alamat pemilik NFT.
- `_tokenId`: ID dari NFT yang akan dihapus.

## Lisensi
Kontrak ini dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT).