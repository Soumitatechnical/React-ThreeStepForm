import React, { Component} from 'react'


export class UserInfo extends Component {

    continue=(e)=>{
        e.preventDefault();
        this.props.next();
    }
    render() {
        const { values}=this.props;
        return (
                <div className="user-form">
       
                <label htmlFor="name">Name</label>
                <input placeholder="Put your name" autoComplete="off"
                defaultValue={values.name}
                onChange={this.props.change('name')}></input><br />
                <label htmlFor="email">Email</label>
                <input
                placeholder="Put your email"
                autoComplete="off"
                defaultValue={values.email}
                onChange={this.props.change('email')}
                ></input>

                <button className="btn1"
                onClick={this.continue}>Continue</button>
                

             </div>
        );    
        
    }
}

export default UserInfo
