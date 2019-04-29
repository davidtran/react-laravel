import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 15px 7px;
`;

const DocumentItem = styled.div`
  padding: 10px 10px;
  margin-bottom: 10px;
  cursor: pointer;

  ${props => props.active && css`
    background: white;
    border-radius: 3px;
    border-left: 6px solid #4077e4;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  `}
`;

const DocumentTitle = styled.div`
  color: #3a4165;
  font-size: 18px;  
  margin-bottom: 10px;
  font-weight: bold;
`;

const Uploader = styled.div`
  font-size: 14px;
  color: #43496c;
`;

const DocumentList = ({ documents, activeDocumentId, onSelectDocument }) => (
  <Container>
    {documents.map((document, index) => (
      <DocumentItem 
        key={document.id} 
        onClick={() => onSelectDocument(document, index)} 
        active={document.id === activeDocumentId}
      >
        <DocumentTitle>Document #{index + 1}</DocumentTitle>
        <Uploader>{document.uploader}</Uploader>
      </DocumentItem>
    ))}
  </Container>
);

export default DocumentList;
