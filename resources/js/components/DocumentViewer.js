import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
`;

const DocumentViewer = ({ url }) => (
  <Container>
    <embed src={url} width="100%" height="100%" type="application/pdf"></embed>
  </Container>
)

export default DocumentViewer;
