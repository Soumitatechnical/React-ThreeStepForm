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
       
                <label htmlFor="profession">Profession</label>
                <input placeholder="Put your profession" autoComplete="off"
                defaultValue={values.profession}
                onChange={this.props.change('profession')}></input><br />
                <label htmlFor="place">place</label>
                <input
                placeholder="Put your place"
                autoComplete="off"
                defaultValue={values.place}
                onChange={this.props.change('place')}
                ></input>
                <label htmlFor="messege">messege</label>
                <input
                placeholder="Put your messege"
                autoComplete="off"
                defaultValue={values.messege}
                onChange={this.props.change('messege')}
                ></input>

                <button className="btn1"
                onClick={this.continue}>Continue</button>
                 <button className="btn2"
                onClick={this.previous}>Back</button>

             </div>
        );    
        
    }
}

export default UserInfo
