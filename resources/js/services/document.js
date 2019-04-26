
export function fetchDocuments() {
  return window.axios('/api/documents');
}

export function uploadFile(file) {
  const formData = new FormData();  
  formData.append('file', file);
  return window.axios.post('/api/documents', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}