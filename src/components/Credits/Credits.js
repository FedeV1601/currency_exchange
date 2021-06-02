import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router'

export const Credits =()=> {
  

  const history = useHistory();

  function handleSearchClick(){
    history.replace("/");
  }

    return (
    <Wrapper>
      <Button onClick={handleSearchClick}>Volver</Button>
      <Title>CREDITOS</Title>
      <Text>Creador: Carlos Federico Vazquez</Text>
      <Text>Profesor: GianCarlo Brusca
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Text>
    </Wrapper>
  );
}



const Wrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(https://i.pinimg.com/originals/c5/9a/d2/c59ad2bd4ad2fbacd04017debc679ddb.gif);
  background-repeat: no-repeat;
  
`;



const Text = styled.h2`
text-shadow:
        0 0 1ex rgba(51, 255, 51, 1),
        0 0 2px rgba(255, 255, 255, 0.8);
    }
 color: red;
`;

const Title = styled.h1`
text-shadow:
        0 0 1ex rgba(51, 255, 51, 1),
        0 0 2px rgba(255, 255, 255, 0.8);
    }
 color: red;
`;
const Button = styled.button`
    margin-top: 100px;
    font-size: 24px;
    border-radius: 4px;
    padding: 4px;
    font-weight: bold;
    background-color: green;
`;
