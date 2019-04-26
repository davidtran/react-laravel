import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import * as documentService from '../../services/document';
import Header from './Header';
import DocumentList from './DocumentList';

const Container = styled.div`
  width: 300px;
  background: #f3f3f3;
  height: 100%;
  min-height: 100%;
  overflow: scroll;
`;

const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
`;

const Sidebar = ({
  setDocumentUrl
}) => {
  const [documents, setDocuments] = useState([]);
  const [activeDocumentId, setActiveDocumentId] = useState(null);

  async function fetchDocuments() {
    const res = await documentService.fetchDocuments();
    setDocuments(res.data);
    if (res.data.length > 0) {
      setActiveDocumentId(res.data[0].id);
      setDocumentUrl(res.data[0].url);
    }
  }

  useEffect(() => {
    fetchDocuments();
  }, []);

  const selectDocument = document => {
    setActiveDocumentId(document.id);
    setDocumentUrl(document.url);
  }

  const handleOnUploadFile = document => {
    setDocuments([      
      ...documents,
      document,
    ]);    
  }

  return (
    <Container>
      <Wrapper>
      <Header 
        onUploadFile={handleOnUploadFile}
      />
      <DocumentList 
        documents={documents} 
        activeDocumentId={activeDocumentId} 
        onSelectDocument={selectDocument} 
      />
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
