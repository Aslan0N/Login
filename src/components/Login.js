import React, { Component } from "react";

const user={
    email:"test@example.com",
    password:"test123"
}
export class Login extends Component {
    constructor(){
        super();
        this.state={
            alertText:"",
            alertStyle:"",
            inputValue:"",
            inputPass:""
        }
    }

    formSubmit = e =>{
            e.preventDefault();
            if(!this.state.inputValue || !this.state.inputPass){
                this.setState({alertText:"Please fill input"})
                this.setState({alertStyle:"warning"})
            }else{
                if(this.state.inputValue === user.email || this.state.inputPass === user.password ){
                    this.setState({alertText:"Successfully"})
                    this.setState({alertStyle:"success"})
                }else{
                    this.setState({alertText:"WRONG"})
                    this.setState({alertStyle:"danger"})
                }
            }

    }

  render() {
    return (
      <>
       <div className="container my-5">
        <div className="d-flex justify-cotent-center align-items-center flex-column">
        <form onSubmit={this.formSubmit}>
        <h3 className="text-center">Login</h3>
          <div className="mb-3">
          <h4 className={`text-center alert alert-${this.state.alertStyle}`} >{this.state.alertText}</h4>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.inputValue}
              onChange={e=>{this.setState({inputValue:e.target.value})}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.inputPass}
              onChange={e=>{this.setState({inputPass: e.target.value})}}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
       </div>
      </>
    );
  }
}

export default Login;
