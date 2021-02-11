import React from 'react'
import circlesImg from '../images/circle.png'
import './styles/Card.css'

class Card extends React.Component{
    
  /*  constructor(props){
      super(props)
      this.state={
        //  image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
          image: 'http://assets.stickpng.com/thumbs/58595fa04f6ae202fedf2852.png' 
        }
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
         
            })
        }, 5000)
    }   */
    
    render(){
        const { title, description, img, leftColor, rightColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card"
               style={{
                   // ${this.props.rightColor})`
                   backgroundImage: `url(${circlesImg}), linear-gradient(to right,${leftColor}, ${rightColor})`
               }}
               >
               <div className="card-body">
                   
                   <div className="row center">

                   <div className="col-6 " >
                    <img src={img} className=" image float-left"></img>
                </div>
                <div className="col-6 Fitness-Card-Info">
                   <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                   </div>
                   </div> 
            </div>
            
        )
    }
}

export default Card


