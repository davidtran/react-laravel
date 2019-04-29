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
  const [documentInfo, setDocumentInfo] = useState({});
  return (
    <Container>
      <Sidebar setDocumentInfo={setDocumentInfo} />
      <DocumentViewer url={documentInfo.url} title={documentInfo.title}/>
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

