import React, {Component} from 'react';
import Header from './header';
import './log.css';

class Login extends Component{
    constructor(){
        super();
        this.state={
            username: localStorage.getItem("username")||"",
            password:localStorage.getItem("password")||"",
        };
        }

    inputchange(e){
        const  username= e.target.value;
        localStorage.setItem("username",username);
        this.setState({username});

      //  if(e.target.value.match("^[a-zA-Z ]*$")!=null) {
         //   this.setState({username: e.target.value});
         // }

    }

    passwordchanged(e){
        const  password= e.target.value;
        localStorage.setItem("password",password);
        this.setState({password});
    }

    handlesubmit = (e) => 
    {
        // e.preventDefault();

        // this.setState({showUsername:true});
        // this.setState({showPassword:true});
        // this.props.dispatch({ type : LOGIN_SUCCESS, username : this.state.username, password : this.state.password})
        this.props.history.push(`/dashboard?userName=${this.state.username}&password=${this.state.password}`);

    }
         
render(){
    return(
        <div className="login">
          <Header/>
        <input type="text" value={this.state.username} placeholder="Enter username" onChange={this.inputchange.bind(this)}/><br/><br/>
        <input type="password" value={this.state.password}  placeholder="enter Password" onChange={this.passwordchanged.bind(this)}/><br/><br/>
        <input type="submit" value="LOGIN" onClick={this.handlesubmit.bind(this)}></input><br/>
        <a href='#'>Forgot password ?</a>
        {/* {this.state.showUsername && <p> "username: " {this.state.username}</p>}
        {this.state.showPassword && <p> "password: " {this.state.password}</p>} */}

        </div>
    )
} 
}
export default Login;