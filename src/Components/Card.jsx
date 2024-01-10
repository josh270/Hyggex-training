import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
`;

const Card = ({ title, content }) => {
  return (
    <CardContainer>
      <h2>{title}</h2>
      <p>{content}</p>
    </CardContainer>
  );
};

export default Card;
