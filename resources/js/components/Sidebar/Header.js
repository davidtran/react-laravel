import React from 'react';
import styled from 'styled-components';
import * as documentService from '../../services/document';

const Container = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`  
  font-size: 18px;
  font-weight: bold;
  color: #3a4165;
`;

const UploadButton = styled.label`  
  margin: 0;
  font-size: 14px;
  border: none;
  padding: 0;
  color: #9ba0b2;
  background: transparent;
  cursor: pointer;

  input[type="file"] {
    display: none;
  }

`;


const Header = ({
  onUploadFile
}) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const res = await documentService.uploadFile(file);
    console.log(res.data);
    onUploadFile(res.data)
  }
  return (
    <Container>
      <Title>Files</Title>
      <UploadButton>
        Upload &nbsp; <i className="fa fa-upload" />
        <input type="file" onChange={handleFileChange} accept="application/pdf" />
      </UploadButton>
    </Container>
  )
}

export default Header;
