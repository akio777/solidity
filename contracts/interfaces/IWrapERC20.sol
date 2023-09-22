// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.15;

import "./IWrapNative.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IWrapERC20 is IWrapNative, IERC20 {}
