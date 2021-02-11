import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) =>(
    <div>
        
        { exercises.map((exercise) => (
             
               <Card 
                key={exercise.id}
               //aqui llama cada dato del arreglo data de arriba
               //title="Mi titulo"
               title={exercise.title}
               description={exercise.description}
               img={exercise.img}
               leftColor={exercise.leftColor}
               rightColor= {exercise.rightColor}
              />
               
            ) ) }
    </div>
)
     

export default ExerciseList