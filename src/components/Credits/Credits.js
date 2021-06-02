import React from 'react'
import styled from 'styled-components'

export const Credits =()=> {
  
    return (
    <Wrapper>
      <Creditos >
            <h1>Credits</h1>
      </Creditos>
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;

`;

const Creditos = styled.div`
 color: red;
`;

