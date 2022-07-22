import React from 'react';
import '../styleSheets/UseCase.css';

//UseCase component
function UseCase (props){
  return( 
    <div className='useCaseContainer'>
      <img 
        className='useCaseImage'
        src={require(`../images/${props.image}.jpg`)}
        alt={props.image}
        />
        <div className='textUseCaseContainer'>
          <p className='nameUseCase'>
            <strong>{props.nameUseCase}</strong>
            </p>
          <p className='textUseCase'>{props.textUseCase}</p>
        </div>
    </div>
  );
}

//this is important in order to use the component outhere...
export default UseCase;