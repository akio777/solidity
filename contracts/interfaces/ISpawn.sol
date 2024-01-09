// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.22;

interface ISpawn {
    event SpawnToken(
        address indexed mintter,
        address tokenAddress,
        string name,
        string symbol,
        uint256 totalSupply,
        uint8 decimal
    );
    event SetVault(address indexed setter, address oldValue, address newValue);
    event SetMintFee(
        address indexed setter,
        uint256 oldValue,
        uint256 newValue
    );

    function spawnToken(
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        uint8 decimal
    ) external payable;

    function mintedToken(uint256 index) external view returns (address);

    function totalMint() external view returns (uint256);

    function mintFee() external view returns (uint256);
}
