import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';


class MyComponent extends React.Component{
    state = {
        listUser: [
            {
                id: 1,
                name: "hỏi Dân IT",
                age: 30
            },
            {
                id: 2,
                name: "eric",
                age: 16
            },
            {
                id: 3,
                name: "haryPhamDev",
                age: 69
            }
        ]
    }
    render(){
        return(
            <div>
                <UserInfor/>
                <br/>
                <DisplayInfor 
                    listUser={this.state.listUser}
                />
            </div>
        );
    }
}
export default MyComponent;