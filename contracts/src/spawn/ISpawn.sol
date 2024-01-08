// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.22;

import "./Spawn.sol";

interface ISpawn {
    function spawnToken(
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        uint8 decimal
    ) external payable;

    function mintedToken(uint256 index) external view returns (address);
}
