import React,{Component} from 'react';

class AddUser extends Component{
    state={
            id:'',
            name:'',
            age:''
          }
    formSubmit=(event)=>{
        // const data = new FormData(event.target);
        // console.log(data)
        // console.log(this.state)
        fetch('http://localhost:3001/api/addUser',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'}
        }).then((response)=>response.json()).then((res)=>{
            console.log(res)
            this.props.history.push({pathname:'/UserList'})
        },(err)=>{
            console.log('error '+err)
        })
        event.preventDefault();
    }
    
    handleInputChange=(event)=>{
        // console.log(event.target.value) //value of input tag
        // console.log(event.target.name) //name of input tag
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
              [name]:value  
        })
    }

    render(){
        return(
              <div className="container"> 
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label>ID</label>
                            <input className="form-control" type="text" name="id" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input  className="form-control" type="text" name="name" onChange={this.handleInputChange} />  
                        </div> 
                        <div className="form-group">
                            <label>Age</label>
                            <input className="form-control" type="text" name="age" onChange={this.handleInputChange} />
                        </div> 
                        <button  className="btn btn-success">Submit</button> 
                    </form>
             </div> 
        )
    }
}

export default AddUser;