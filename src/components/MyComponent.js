import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';


class MyComponent extends React.Component{
    render(){
        return(
            <div>
                <UserInfor/>
                <br/>
                <DisplayInfor name={"toàn"} age={21}/>
                <hr/>
                <DisplayInfor name={"eric"} age={30}/>
            </div>
        );
    }
}
export default MyComponent;