import React, { useState, useEffect } from 'react';
import { Title, Secondarytitle, Maindiv, Line, Sendbutton, Seconddiv, Grid, Error }  from './style';
import { useForm } from "react-hook-form"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { uuid } from 'uuidv4';


function App() {
  
  useEffect(()=>{
    document.title = 'CrudAct';
  }, []);  

  const {register, handleSubmit, errors} = useForm();
 
  const [currentInputs, setcurrentInputs] = useState([]);

  const [titleInputs, settitleInputs] = useState("");
  const [textInputs, settextInputs] = useState("");

  const [colorGenerator, setcolorGenerator] = useState("");

  const onSubmit = (data) => {

    setcurrentInputs([...currentInputs, {
      id: uuid(),
      title: data.title,
      text: data.text,
      edit: false
    }]);
    randomColorGenerator();
  };

  const randomColorGenerator = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setcolorGenerator(`#${randomColor}`)
  }

  const deleteCard = (e) => {
    const cardIndex = currentInputs.findIndex(data => data.id === e);

    currentInputs.splice(cardIndex, 1)

    setcurrentInputs(currentInputs)
  }

  const editCard = (e) => {
    const cardIndex = currentInputs.findIndex(data => data.id === e);

    currentInputs[cardIndex] = {
      id: currentInputs[cardIndex].id,
      title: currentInputs[cardIndex].title,
      text: currentInputs[cardIndex].text,
      edit: true
    }
    setcurrentInputs(currentInputs);
  }
  
  const changeTitle = (e) => {
    settitleInputs(e.target.value);
  }
 
  const changeText = (e) => {
    settextInputs(e.target.value);
  }



  const currentCardInfo = (e) => {
    const cardIndex = currentInputs.findIndex(data => data.id === e.id);

    currentInputs[cardIndex] = {
      id: currentInputs[cardIndex].id,
      title: titleInputs,
      text: textInputs,
      edit: false
    }  
    setcurrentInputs(currentInputs);
  }

  return (
    <div>
     <Maindiv>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Crudact</Title>          
        <Secondarytitle>Título</Secondarytitle>
        {errors.title && <Error>Campo Obrigatório</Error>}
        <input 
          ref={register({required:true})} 
          type="text" 
          name="title" 
          placeholder="Escreve ai irmão" 
          maxLength="50"/>
        <Line/>
        <Secondarytitle>Texto</Secondarytitle>
        {errors.text && <Error>Campo Obrigatório</Error>}
        <textarea 
          ref={register({required:true})}
          name="text"
          type="text" 
          style={{
            height:"100px", 
            verticalAlign: "text-top", 
            resize: "none", 
            width: "230px"}} 
          placeholder="Escreve ai irmão"
          maxLength="250"/>
        <Line/>
        <Sendbutton>Enviar</Sendbutton>
      </form>
    </Maindiv >
    <Grid>
      {currentInputs.map(card => {
        return (
          card.edit ? (
          <Seconddiv key={card.id}>
            <form>
              <Secondarytitle>Título</Secondarytitle>
              <input 
                ref={register} 
                onChange={changeTitle} 
                type="text" 
                name="titleEdit" 
                placeholder="Edita ai irmão" 
                maxLength="50"/>
              <Line/>
              <Secondarytitle>Texto</Secondarytitle>
              <textarea 
                onChange={changeText}
                ref={register}
                name="textEdit"
                type="text" 
                style={{
                  height:"100px", 
                  verticalAlign: "text-top", 
                  resize: "none", 
                  width: "230px"}} 
                placeholder="Edita ai irmão"
                maxLength="250"/>
              <Line/>
              <FontAwesomeIcon 
                onClick={handleSubmit(()=>deleteCard(card.id))} 
                icon="times" 
                size="lg" 
                pull="right"
                style={{padding: "0% 10% 5% 0%", color:"red"}}/>
              <FontAwesomeIcon 
                type="submit" 
                onClick={handleSubmit(()=>currentCardInfo(card))} 
                icon="check" 
                size="lg" 
                pull="left"
                style={{padding: "0% 0% 5% 10%", color:"green"}}/>
            </form>
         </Seconddiv>) 
          : (<Seconddiv key={card.id} style={{backgroundColor:`${colorGenerator}`}}>
              <Secondarytitle>{card.title}</Secondarytitle>
              <h3>{card.text}</h3>
              <FontAwesomeIcon 
                onClick={handleSubmit(()=>deleteCard(card.id))} 
                icon="times" 
                size="lg" 
                pull="right"
                style={{padding: "0% 10% 5% 0%", color:"red"}}/>
              <FontAwesomeIcon 
                onClick={handleSubmit(()=>editCard(card.id))}
                icon="edit" 
                size="lg" 
                pull="left"
                style={{padding: "0% 0% 5% 10%", color:"yellow"}}/>
            </Seconddiv>)
        )
      })}
    </Grid>
  </div>
  );
}

export default App;
