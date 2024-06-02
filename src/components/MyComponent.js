import React from 'react';


class MyComponent extends React.Component{

    state = {
        name: 'toàn',
        address: 'hà nội',
        age: 21
    }
    handleClick(event){
        console.log(">>> Click me my button");
        this.setState({
            name: "toLaToan",
            age: Math.floor((Math.random()*100)+1)
        })
    }

    handleOnMouseOver(event){
        // console.log(event.pageX);
    }

    handleOnChangeInput(event){
        this.setState({
            name: event.target.value,
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
                    <input 
                        onChange={(event) => {this.handleOnChangeInput(event)}}
                        type='text' 
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default MyComponent;