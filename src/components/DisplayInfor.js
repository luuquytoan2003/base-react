import React from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component{
    constructor(props){
        console.log(">>> call contructor: 1");
        super(props);
        this.state={
            isShowListUser: true
        }
    }
    componentDidMount(){
        console.log(">>> call me component did mount");
        setTimeout(()=>{
            document.title = "eric hỏi dân it"
        },3000)
    }
    componentDidUpdate(prevProps,prevsState,snapshot){
        console.log(">>> call me component did update",this.props,prevProps);
        if(this.props.listUser !== prevProps.listUser){
            if(this.props.listUser.length === 5){
                alert("you got 5 user");
            }
        }
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        })
    }
    render(){
        console.log(">>> call me render");
        const {listUser} = this.props;
        return(
            <div className="display-infor-container">
                <div>
                    <span onClick={()=>{this.handleShowHide()}}>{this.state.isShowListUser ? "Hide" : "Show"} list users</span>
                </div>
                {this.state.isShowListUser && 
                    <>
                    {
                        listUser.map((user)=>{
                            return(
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={()=>{this.props.handeDeleteUser(user.id)}}>delete</button>
                                    </div>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                    </>
                }              
            </div>
        )
    }
}
export default DisplayInfor;