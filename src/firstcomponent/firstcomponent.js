import React from 'react';

export class FirstComponent extends React.Component{
    render(){
       return (
         <div>
            <h1>First Component {this.props.name}</h1>
            <input type="text" onChange={this.props.nameChange} />
         </div> 
       )
    }
}