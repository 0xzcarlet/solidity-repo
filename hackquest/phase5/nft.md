/**
 * @title NFT Contract
 * @dev Kontrak ini mengimplementasikan Non-Fungible Token (NFT) menggunakan standar ERC721.
 * Kontrak ini memungkinkan pembuatan, transfer, dan manajemen aset digital unik.
 * 
 * Fitur:
 * - Minting: Memungkinkan pembuatan NFT baru.
 * - Transfer: Memungkinkan transfer NFT antar alamat.
 * - Metadata: Mendukung metadata untuk setiap NFT, menyediakan informasi tambahan.
 * 
 * Fungsi:
 * - mint(address to, uint256 tokenId): Membuat NFT baru dengan tokenId unik dan menetapkannya ke alamat yang ditentukan.
 * - transferFrom(address from, address to, uint256 tokenId): Mentransfer NFT dengan tokenId yang ditentukan dari satu alamat ke alamat lain.
 * - tokenURI(uint256 tokenId): Mengembalikan metadata URI yang terkait dengan tokenId yang ditentukan.
 * 
 * Events:
 * - Transfer(address indexed from, address indexed to, uint256 indexed tokenId): Diterbitkan saat NFT ditransfer.
 * - Approval(address indexed owner, address indexed approved, uint256 indexed tokenId): Diterbitkan saat NFT disetujui untuk transfer.
 * 
 * Catatan:
 * - Kontrak ini mengikuti standar ERC721 seperti yang didefinisikan oleh komunitas Ethereum.
 * - Pastikan kontrak ini diterapkan pada jaringan Ethereum yang kompatibel.
 * 
 * @dev Dibuat oleh [Your Name]
 */