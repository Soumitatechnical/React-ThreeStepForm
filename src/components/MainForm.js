import React, { Component } from 'react'

import UserInfo from './UserInfo'
import PersonalInfo from './PersonalInfo'
import Confirm from './Confirm'
import Finish from './Finish'

export class MainForm extends Component {

    state={
        step:1,
        name:'',
        email:'',
        profesion:'',
        place:'',
        messege:''

    };

    change = input=> e =>{
        e.preventDefault();
        this.setState({ [input]:e.target.value });
    }

    next=()=>{
        const{ step }=this.state;
        this.setState({
            step:step+1
        });
    }

    back=()=>{
        const { step}= this.state;
        this.setState({
            step:step-1
        });

    }
    render() {

        const {step, name, email, profession,place, messege}=this.state;
        const values={step, name, email,profession, place, messege};
        
        switch(step){
            case 1:
                return (
                    <UserInfo
                    next={this.next}  
                    change={this.change}
                    values={values}
                  />
                );
            case 2:
                return (
                    <PersonalInfo
                    next={this.next}
                    back={this.back}  
                    change={this.change}
                    values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                    next={this.next}
                    back={this.back}
                    values={values}  
                    />
                );
            case 4:
                return (
                    <Finish />
                ) ;
            default:
                (
                    console.log('Multistep react.js User Form application')
                )

        }
    }
}

export default MainForm
