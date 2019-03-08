import React, { Component } from 'react'
import FormFields from '../widgets/Forms/formFields'
//import { firebaseDB } from '../firebase'

class Login extends Component {
    state = {
        formData:{
            username:{
                element:'input',
                value:'',
                label:true,
                labelText:'Username',
                config:{
                    name:'username_input',
                    type:'text',
                    placeholder:'Enter your username'
                },
                validation:{
                    required:true,
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            password:{
                element:'input',
                value:'',
                label:true,
                labelText:'Password',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter your Password'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            }
        }
    }
    
    updateForm = (newState) => {
        this.setState({
            formData:newState
        })
    }
    
    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;
    
        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }
    
        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid;
        }
    
        if(formIsValid){
          console.log(dataToSubmit)
          this.props.history.push("/adduser");
        //    firebaseDB.ref('user').push(dataToSubmit)
        //    .then(()=> {
        //       console.log('new user added')
        //    })
        //    .catch((e)=> {
        //       console.log(e)
        //    })
        }
    
    }
    
    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
    
                    <FormFields
                        formData={this.state.formData}
                        onblur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)}
                    />
    
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login