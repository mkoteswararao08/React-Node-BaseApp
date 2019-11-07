import React from 'react';
import './App.css';
// eslint-disable-next-line
import {FirstComponent} from './firstcomponent/firstcomponent'; //if the FirstComponent is a named export
// import FirstComponent from './FirstComponent/firstComponent';  //if FirstComponent is a default export.

import NavBar from './navbar/navbar';
import AddUser from './add-user/add-user';
import ListOfUsers from './list-of-users/list-of-users';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UpdateUser from './update-user/update-user';

function App() {

  // var changeValue; 
  // function changeHandler(event){
  //       console.log('change handler '+event.target.value)
  //       changeValue=event.target.value;
  //       // console.log(changeValue)
  // };

  return (
    // <div className="App">
    //   <h1>Hi koteswara Rao {changeValue}</h1>
    //   <FirstComponent name='Molabanti koteswara Rao' nameChange={changeHandler}></FirstComponent>
    //   <FirstComponent></FirstComponent>
    // </div>  
    <Router > 
      <div>
          <NavBar></NavBar>
          <Route exact path="/addUser" component={AddUser} />
          {/* <AddUser></AddUser> */}
          {/* <ListOfUsers></ListOfUsers> */}        
          <Route path="/UserList" component={ListOfUsers} />
          <Route path="/updateUser/:id" component={UpdateUser} />
      </div>
    </Router>  
  );
}

export default App;
