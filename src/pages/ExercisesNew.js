import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
class ExerciseNew extends React.Component{
    
    state={
        form: {
            title: '',
             description: '',
              img:'',
               leftColor: '',
                rightColor: ''

        }
    }
    handleChange = e => {
        this.setState({
            form: {
            ...this.state.form,
            [e.target.name]: e.target.value
            }
        })
     } 

    render(){
        return(
            <div className="row">
                <div className="col-sm">
                 <Card{...this.state.form }/>
                </div>
               <div className="col-sm">
                   <ExerciseForm
                    Onchange={this.handleChange}
                    form={this.state.form}
                   />
               </div>

            </div>
           
           
        )
    
    }
    /* Ejemeplo de como hacer un boton
    handleClick = () =>{
        console.log(this)
    }
    render(){
        return (
        <button onClick={this.handleClick}>
           Send
        </button>
    
        )
    }  */
}

export default ExerciseNew