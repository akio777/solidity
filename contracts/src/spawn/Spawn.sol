// SPDX-License-Identifier: MIT

pragma solidity 0.8.22;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./ERC20Modify.sol";

contract Spawn is Ownable {
    address private vault;
    uint256 public mintFee;

    uint256 public totalMint;
    mapping(uint256 => address) public mintedToken;

    event SpawnToken(
        address indexed mintter,
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

    constructor(uint256 _mintFee) {
        vault = msg.sender;
        mintFee = _mintFee;
    }

    function setVault(address _vault) external onlyOwner {
        address oldVault = vault;
        vault = _vault;
        emit SetVault(msg.sender, oldVault, vault);
    }

    function setMintFee(uint256 _newFee) external onlyOwner {
        uint256 oldFee = mintFee;
        mintFee = _newFee;
        emit SetMintFee(msg.sender, oldFee, mintFee);
    }

    function spawnToken(
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        uint8 decimal
    ) external payable {
        require(msg.value == mintFee, "Spawn/not-enough-fee");
        (bool isSuccess, ) = vault.call{value: msg.value}("");
        require(isSuccess, "Spawn/collecting-fee-fail");

        ERC20Modify newERC20ModifyToken = new ERC20Modify(
            name,
            symbol,
            totalSupply,
            decimal,
            msg.sender
        );

        totalMint += 1;
        mintedToken[totalMint] = address(newERC20ModifyToken);
        emit SpawnToken(msg.sender, name, symbol, totalSupply, decimal);
    }
}
