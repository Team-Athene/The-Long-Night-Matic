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
    
    function create_game(uint _bet_amount) public {
        long_night[id].first_user = msg.sender;
        long_night[id].bet_amount = _bet_amount;
        id++;
    }
    function join_game(uint _id) public {
        long_night[_id].first_user = msg.sender;
    }
    function close_game(uint _id,address payable _winner,uint _star) public {
        long_night[_id].winner = _winner;
        long_night[_id].star = _star;
        if(_star == 1){
            _winner.transfer((long_night[_id].bet_amount+(long_night[_id].bet_amount/2)));
        }else if(_star == 2){
            _winner.transfer((long_night[_id].bet_amount+(long_night[_id].bet_amount/2)));
        }else if(_star == 3){
            _winner.transfer((long_night[_id].bet_amount+(long_night[_id].bet_amount/2)));
        }
    }
}