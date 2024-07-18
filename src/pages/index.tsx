import { BContainer } from "@/components/BContainer";
import { useState, useCallback } from "react";

export default function UrlGenerator() {
  const [messageModel, setMessageModel] = useState('');
  const [telephone, setTelephone] = useState('');
  const [params, setParams] = useState<string[]>(Array(5).fill(''));

  const generateUrl = useCallback(() => {
    const baseUrl = 'https://xbufnj2ue8.execute-api.us-east-1.amazonaws.com';
    const queryString = params
      .map((param, i) => param ? `var_${i + 1}=${encodeURIComponent(param)}` : '')
      .filter(Boolean)
      .join('&');

    return `${baseUrl}?modelo_mensagem=${encodeURIComponent(messageModel)}&telefone=${encodeURIComponent(telephone)}&${queryString}`;
  }, [params, messageModel, telephone]);

  const handleParamChange = (index: number, value: string) => {
    setParams(prev => {
      const newParams = [...prev];
      newParams[index] = value;
      return newParams;
    });
  };

  const handleCopyUrl = () => {
    const url = generateUrl();
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copiada!');
    }).catch(err => {
      console.error('Failed to copy the URL: ', err);
    });
  };

  const paragraphStyle = {
    marginBottom: '20px',
    wordBreak: 'break-all',
    padding: '10px',
    backgroundColor: '#6f46be05',
    border: '1px solid #6f46be55',
    borderRadius: '5px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#6f46be',
  } as any;

  return (
    <BContainer flex={1} width={"100%"} style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px' }}>Generate URL with Query Params</h2>
      <p style={paragraphStyle}>{generateUrl()}</p>
      <button onClick={handleCopyUrl} style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer', border:'none', borderRadius: '8px', background:'#6f46be', color: 'white' }}>Copy URL</button>
      <br />

    <div style={{display:'flex', marginBottom: 10}}>
      <label style={{ display: 'block', marginBottom: '10px', marginRight:20 }}>
        Modelo da mensagem:
        <input
          type="text"
          value={messageModel}
          onChange={(e) => setMessageModel(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Telefone:
        <input
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
        />
      </label>
      </div>
      <br />

      {[...params, ''].map((param, i) => (
        <div key={i} style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>
            Variável {i + 1}:
            <input
              type="text"
              value={param}
              onChange={(e) => handleParamChange(i, e.target.value)}
              style={{ marginLeft: '10px', padding: '5px', width: '300px' }}
            />
          </label>
          <br />
        </div>
      ))}
    </BContainer>
  );
}
