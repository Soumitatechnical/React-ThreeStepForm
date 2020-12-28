import React, { Component} from 'react'


export class UserInfo extends Component {

    continue=(e)=>{
        e.preventDefault();
        this.props.next();
    }

    previous=(e)=>{
        e.preventDefault();
        this.props.back();
    }
    render() {
        const { values}=this.props;
        return (
                <div className="user-form">
                    <ul>
                        <li>{values.name}</li>
                        <li>{values.email}</li>
                        <li>{values.profession}</li>
                        <li>{values.place}</li>
                        <li>{values.messege}</li>
                        
                    </ul>
                    <button className="btn1"
                onClick={this.continue}>Continue</button>
                 <button className="btn2"
                onClick={this.previous}>Back</button>

                </div>
        );    
        
    }
}

export default UserInfo
