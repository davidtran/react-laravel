import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
`;

const Header = styled.div`
  background: #4077e4;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
  height: 48px;
  box-sizing: border-box;
  line-height: 48px;
`;

const DocumentViewer = ({ title, url }) => (
  <Container>
    <Header>{title}</Header>
    <embed src={url} width="100%" height="100%" type="application/pdf"></embed>
  </Container>
)

export default DocumentViewer;
