// SPDX-License-Identifier: MIT
pragma solidity ^0.6.8;

contract LongNight{
    address payable public admin;
    constructor() public{
        admin = msg.sender;
    }
    
    struct Game{
        address payable first_user;
        address payable second_user;
        uint bet_amount;
        address payable winner;
        uint star;
    }
    
    mapping(uint=>Game)public long_night ;
    uint public id = 1;
    
    function create_game() public payable{
        long_night[id].first_user = msg.sender;
        long_night[id].bet_amount = msg.value;
        id++;
    }
    function join_game(uint _id) public payable{
        long_night[_id].first_user = msg.sender;
    }
    function close_game(uint _id,address payable _winner,uint _star,uint _status) public {
        long_night[_id].winner = _winner;
        long_night[_id].star = _star;
        if(_status == 0){
            long_night[_id].first_user.transfer(long_night[_id].bet_amount);
        }else if(_status==1){
            if(_star == 1){
            _winner.transfer((long_night[_id].bet_amount+((long_night[_id].bet_amount/100)*50)));
            admin.transfer((long_night[_id].bet_amount/100)*50);
        }else if(_star == 2){
            _winner.transfer((long_night[_id].bet_amount+((long_night[_id].bet_amount/100)*70)));
            admin.transfer((long_night[_id].bet_amount/100)*30);
        }else if(_star == 3){
            _winner.transfer((long_night[_id].bet_amount+((long_night[_id].bet_amount/100)*90)));
            admin.transfer((long_night[_id].bet_amount/100)*10);
        }
        }

    }
}