import React from 'react';
// import {} from 'react-router'

class UpdateUser extends React.Component{
    constructor(props){
        super(props)
    } 
    state={
        id:'',
        name:'',
        age:''
    }
    componentDidMount(){
        // console.log(this.props.match.params); // router parameters are present in this.props.match.params
        let id=this.props.match.params.id;
        // console.log(id)
        fetch('http://localhost:3001/api/user/'+id).then(res=>res.json()).then(user=>{
            console.log(user);
            this.setState({
               ...user[0]
            })
        })
    }

    handleInputChange=(event)=>{
         let name=event.target.name;
         let value=event.target.value;
         this.setState({
             [name]:value
         })
    }
        
    formSubmit=(event)=>{
        console.log(this.state);
        fetch('http://localhost:3001/api/update/'+this.state.id,{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'}
        }).then((response)=>response.json()).then((res)=>{
            console.log(res)
            // console.log(this.props)
            this.props.history.push('/UserList');  //To navigate programmatically.
            // this.context.history.push('/UserList')
            // HashRouter.push('/UserList');
        },(err)=>{
            console.log('error '+err)
        })
        event.preventDefault();
        
    }

    render(){
        return(
            <div>
                 <div className="container"> 
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label>ID</label>
                            <input className="form-control" type="text" value={this.state.id} name="id"  readOnly="readonly" />  
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input  className="form-control" type="text"  name="name" value={this.state.name} onChange={this.handleInputChange} />  
                        </div>                       
                        <div className="form-group">
                            <label>Age</label>
                            <input className="form-control" type="text" name='age' value={this.state.age}  onChange={this.handleInputChange} />
                        </div> 
                        <input type="submit" className="btn btn-success" /> 
                    </form>
                </div>
            </div>    
        )
    }
}

export default UpdateUser;
