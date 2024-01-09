// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Modify is ERC20, Ownable {
    uint8 private _decimal;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 totalSupply,
        uint8 decimal,
        address mintter
    ) ERC20(_name, _symbol) {
        _decimal = decimal;
        _mint(mintter, totalSupply);
    }

    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }

    function decimals() public view override returns (uint8) {
        return _decimal;
    }
}
