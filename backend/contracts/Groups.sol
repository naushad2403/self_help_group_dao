// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './SHG.sol';

contract Groups {
    mapping(uint=>address) public groups;
    mapping(address=>uint[]) public userGroups;
    uint[] public groupIds;

    constructor () payable {
    }

    function destroy () external {
        selfdestruct(payable(msg.sender));
    }

    function createNewGroup(string memory _name) external returns (address  addr) {
        SHG shg  = new SHG(_name); 
        uint ts = block.timestamp;
        groupIds.push(ts);
        groups[ts] = address(shg);
        userGroups[msg.sender].push(ts);
        return address(shg);
    }

    // function getMyGroup() public view returns(address[] memory){
    //    address[] memory contractAddress = new address[](0);
    //    uint[] memory ids = userGroups[msg.sender];
    //    for(uint i =0; i <ids.length; i++) {
    //         contractAddress[i] = (groups[ids[i]]);
    //    }
    //    return contractAddress;
    // }

    function getAllGroup() public view returns(address[] memory) {
       address[] memory contractAddress= new address[](groupIds.length);
       for(uint i =0; i <groupIds.length; i++) {
            contractAddress[i] = (groups[groupIds[i]]);
       }
       return contractAddress;
    }

    receive () external payable{

    }

    fallback () external payable{

    }
}

