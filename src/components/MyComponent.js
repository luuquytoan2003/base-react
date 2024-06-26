import React, { useState } from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';


// class MyComponent extends React.Component{
//     state = {
//         listUser: [
//             {
//                 id: 1,
//                 name: "hỏi Dân IT",
//                 age: 30
//             },
//             {
//                 id: 2,
//                 name: "eric",
//                 age: 16
//             },
//             {
//                 id: 3,
//                 name: "haryPhamDev",
//                 age: 69
//             }
//         ]
//     }
//     handleAddNewUser = (newUser) => {
//         this.setState({
//             listUser: [newUser,...this.state.listUser]
//         })
//     }
//     handeDeleteUser = (userId) =>{
//         let listUserClone = this.state.listUser;
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser : listUserClone
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <br/>
//                 <DisplayInfor 
//                     listUser={this.state.listUser}
//                     handeDeleteUser={this.handeDeleteUser}
//                 />
//             </div>
//         );
//     }
// }

const MyComponent = () => {
    const [listUser, setListUser] = useState([
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
    ]);
    const handleAddNewUser = (newUser) => {
        setListUser([newUser, ...listUser]);
    }
    const handeDeleteUser = (id) => {
        let newListUser = listUser.filter(user => user.id !== id)
        setListUser(newListUser);
    }
    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br />
            <DisplayInfor
                listUser={listUser}
                handeDeleteUser={handeDeleteUser}
            />
        </div>
    );
}

export default MyComponent;