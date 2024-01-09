// SPDX-License-Identifier: MIT

pragma solidity 0.8.22;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./ERC20Modify.sol";

import "hardhat/console.sol";

contract Spawn is Ownable {
    address private vault;

    uint256 public _mintFee;

    uint256 public multipleDiscount;

    address public token;

    uint256 public totalMint;
    mapping(uint256 => address) public mintedToken;

    uint256 constant WEI_UNIT = 10 ** 18;
    uint256 constant WEI_PERCENT_UNIT = 10 ** 20;

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

    constructor(uint256 __mintFee, uint256 _multipleDiscount) {
        vault = msg.sender;
        _mintFee = __mintFee;
        multipleDiscount = _multipleDiscount;
        token = (
            _spawnToken(
                "SPAWN",
                "SPAWN",
                uint256(21000000000000000000000000),
                18
            )
        );
    }

    function setVault(address _vault) external onlyOwner {
        address oldVault = vault;
        vault = _vault;
        emit SetVault(msg.sender, oldVault, vault);
    }

    function setMintFee(uint256 _newFee) external onlyOwner {
        uint256 oldFee = _mintFee;
        _mintFee = _newFee;
        emit SetMintFee(msg.sender, oldFee, _mintFee);
    }

    function setMultiple(uint256 _newMultiple) external onlyOwner {
        uint256 oldFee = multipleDiscount;
        multipleDiscount = _newMultiple;
        emit SetMintFee(msg.sender, oldFee, multipleDiscount);
    }

    function mintFee() external view returns (uint256 newMintFee) {
        IERC20 govToken = IERC20(token);
        uint256 govHoldingAmount = govToken.balanceOf(msg.sender);
        console.log("govHoldingAmount : ", govHoldingAmount);

        uint256 discountPercent = (WEI_PERCENT_UNIT * govHoldingAmount) /
            (govToken.totalSupply());
        console.log("discountPercent : ", discountPercent);
        discountPercent *= multipleDiscount;
        console.log("discountPercent : ", discountPercent);
        console.log("_mintFee : ", _mintFee);
        newMintFee = discountPercent >= WEI_PERCENT_UNIT
            ? 0
            : (_mintFee * (WEI_PERCENT_UNIT - discountPercent)) /
                WEI_PERCENT_UNIT;
        console.log("newMintFee : ", newMintFee);
    }

    function spawnToken(
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        uint8 decimal
    ) external payable {
        require(msg.value == _mintFee, "Spawn/not-enough-fee");
        (bool isSuccess, ) = vault.call{value: msg.value}("");
        require(isSuccess, "Spawn/collecting-fee-fail");
        _spawnToken(name, symbol, totalSupply, decimal);
    }

    function _spawnToken(
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        uint8 decimal
    ) internal returns (address) {
        ERC20Modify newERC20ModifyToken = new ERC20Modify(
            name,
            symbol,
            totalSupply,
            decimal,
            msg.sender
        );
        totalMint += 1;
        mintedToken[totalMint] = address(newERC20ModifyToken);
        emit SpawnToken(
            msg.sender,
            address(newERC20ModifyToken),
            name,
            symbol,
            totalSupply,
            decimal
        );
        return address(newERC20ModifyToken);
    }
}
