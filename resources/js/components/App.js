import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import DocumentViewer from './DocumentViewer';
const Container = styled.div`
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const App = () => {
  const [documentUrl, setDocumentUrl] = useState(null);
  return (
    <Container>
      <Sidebar setDocumentUrl={setDocumentUrl} />
      <DocumentViewer url={documentUrl} />
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

