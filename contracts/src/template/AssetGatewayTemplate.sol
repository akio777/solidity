// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.15;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "../../interfaces/IWrapERC20.sol";

contract AssetGatewayTemplate is Ownable {
    using SafeERC20 for IERC20;
    using SafeERC20 for IWrapERC20;

    address public wrapNativeTokenAddress;

    constructor(address _wrapNativeTokenAddress) {
        wrapNativeTokenAddress = _wrapNativeTokenAddress;
    }

    // * if a native token comes in this smart contract will auto-convert to wrap native token.
    function deposit(
        address tokenAddress,
        uint256 amount
    ) external payable onlyOwner {
        _deposit(tokenAddress, amount);
    }

    function _deposit(address tokenAddress, uint256 amount) internal {
        // first condition should check whether this token is native or erc20
        // cuz both have their specific condition and logic for handling
        if (tokenAddress == wrapNativeTokenAddress) {
            IWrapERC20(wrapNativeTokenAddress).deposit{value: amount}();
        } else {
            IERC20(tokenAddress).safeTransferFrom(
                msg.sender,
                address(this),
                amount
            );
        }
    }

    // * if withdraw wrap native token, this contract will return wrap native only (no convert to native before return)
    function withdraw(address tokenAddress, uint256 amount) external onlyOwner {
        _withdraw(tokenAddress, amount);
    }

    function _withdraw(address tokenAddress, uint256 amount) internal {
        // first condition should check whether this token is native or erc20
        // cuz both have their specific condition and logic for handling
        if (tokenAddress == wrapNativeTokenAddress) {
            require(
                IWrapERC20(wrapNativeTokenAddress).balanceOf(address(this)) >=
                    amount,
                "Insufficient WETH balance"
            );
            IWrapERC20(wrapNativeTokenAddress).safeTransfer(msg.sender, amount);
        } else {
            IERC20(tokenAddress).safeTransferFrom(
                address(this),
                msg.sender,
                amount
            );
        }
    }

    receive() external payable {}

    fallback() external payable {}
}
