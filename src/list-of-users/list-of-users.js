import React,{Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom'

class ListOfUsers extends Component{
    constructor(props){
        super(props);
        // axios() 
       fetch("http://localhost:3001/api/user").then(res=>res.json()).then(result=>{
           console.log(result);
           this.setState({
               users:result
           })
       })
    }
    
    
    state={
        id:'1',
        name:'molabanti',
        age:'23',
        users:[]
    }
    
    stateDisplay=()=>{
        console.log(this.state);
    }

    deleteUser=(id)=>{
        //  console.log(id)
         let users=[...this.state.users];
         let index= users.findIndex((user,index)=>{return user.id===id});
         users.splice(index,1);
         this.setState({users:users})
         fetch('http://localhost:3001/api/delete/'+id,{
             method:'DELETE'
         }).then(res=>res.json()).then(data=>{
             console.log(data);
            //  this.props.navigation.navigate('UserList')
         })
    }
    
    render(){

       let userList=this.state.users.map(user=>{
            return( <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td><Link to={'/updateUser/'+user.id}><button className="btn btn-primary">Update</button></Link></td> 
                        <td><button className="btn btn-success"  onClick={this.deleteUser.bind(this,user.id)}>Delete</button></td>
                    </tr>
                  )  
       })


        return(
            <div>
                 <div className="container">
                        <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>AGE</th>
                                        <th>Update</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>  
                                <tbody>
                                    {/* <tr>
                                        <td>{this.state.id}</td>
                                        <td>{this.state.name}</td>
                                        <td>{this.state.age}</td>
                                        {/* <td>{this.state.users[0]}</td> */}
                                        {/* <td><a [routerLink]="['/updateUser',user.id]"><button className="btn btn-primary">Update</button></a></td> 
                                        <td><button className="btn btn-success"  (click)="deleteUser(user.id)">Delete</button></td> */}
                                    {/* </tr>  */} 
                                    {userList}
                                </tbody>
                      </table>
                      <button onClick={this.stateDisplay}>click</button>
                 </div>   
            </div>
        )
    }
}

export default ListOfUsers;