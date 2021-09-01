import React, { Component } from "react";

class PersonCard extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div>
                <h1>{ this.props.pCard.lastName }, { this.props.pCard.firstName }</h1>
                <h5>Age: { this.props.pCard.age }</h5>
                <h5>Hair Color: { this.props.pCard.hairColor }</h5>
            </div>
        );
    }
}
export default PersonCard;