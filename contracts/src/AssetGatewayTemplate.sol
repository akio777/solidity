// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.15;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../interfaces/IWrapERC20.sol";

contract AssetGatewayTemplate {
    using SafeERC20 for IERC20;
    using SafeERC20 for IWrapERC20;

    address public wrapNativeTokenAddress;

    constructor(address _wrapNativeTokenAddress) {
        wrapNativeTokenAddress = _wrapNativeTokenAddress;
    }

    receive() external payable {}

    fallback() external payable {}
}
