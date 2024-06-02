import React from "react";

class UserInfor extends React.Component{
    state = {
        name: 'toàn',
        address: 'hà nội',
        age: 21
    }

    handleOnChangeInput(event){
        this.setState({
            name: event.target.value,
        })
    }
    handleOnChangeAge(event){
        this.setState({
            age: event.target.value,
        })
    }
    handleOnSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                my name is {this.state.name} and i'm {this.state.age}
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <label>Your name: </label>
                    <input 
                        value={this.state.name}
                        onChange={(event) => {this.handleOnChangeInput(event)}}
                        type='text' 
                    />
                    <label>Your age: </label>
                    <input 
                        value={this.state.age}
                        onChange={(event) => {this.handleOnChangeAge(event)}}
                        type='text' 
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfor;