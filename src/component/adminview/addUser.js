import React, { Component } from 'react'
import FormFields from '../../widgets/Forms/formFields'
import { firebaseDB } from '../../firebase'

class AddUser extends Component {
    state = {
        formData:{
            name:{
                element:'input',
                value:'',
                label:true,
                labelText:'Name',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required:true,
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            lastname:{
                element:'input',
                value:'',
                label:true,
                labelText:'Last Name',
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter your Last name'
                },
                validation:{
                    required:true,
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            email:{
                element:'input',
                value:'',
                label:true,
                labelText:'email',
                config:{
                    name:'email_input',
                    type:'text',
                    placeholder:'Enter your email'
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
                    name:'lastname_input',
                    type:'password',
                    placeholder:'Enter your Password'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            role:{
                element:'select',
                value:'',
                label:true,
                labelText:'Roles',
                config:{
                    name:'role_input',
                    options:[
                        {val:'1',text:'admin'},
                        {val:'2',text:'developer'}
                    ]
                },
                validation:{
                    required:false
                },
                valid:true
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
           firebaseDB.ref('user').push(dataToSubmit)
           .then(()=> {
              console.log('new user added')
           })
           .catch((e)=> {
              console.log(e)
           })
        } else {
            console.log(formIsValid)
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
    
                    <button type="submit">Add User</button>
                </form>
            </div>
        )
    }
}

export default AddUser