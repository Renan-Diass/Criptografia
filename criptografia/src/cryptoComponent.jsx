import React, { useState, useEffect } from 'react';
import forge from 'node-forge';
import './CryptoComponent.css'; 

const CryptoComponent = () => {
    const [message, setMessage] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [decryptedMessage, setDecryptedMessage] = useState('');
    const [publicKey, setPublicKey] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);

  
    useEffect(() => {
        const { publicKey, privateKey } = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
        setPublicKey(publicKey);
        setPrivateKey(privateKey);
    }, []);

   
    const handleEncrypt = () => {
        if (publicKey && message) {
            const encrypted = publicKey.encrypt(message, 'RSA-OAEP');
            setEncryptedMessage(forge.util.encode64(encrypted));
        } else {
            alert("A chave pública ou a mensagem não estão definidas.");
        }
    };

    
    const handleDecrypt = () => {
        if (privateKey && encryptedMessage) {
            try {
                const decodedMessage = forge.util.decode64(encryptedMessage);
                const decrypted = privateKey.decrypt(decodedMessage, 'RSA-OAEP');
                setDecryptedMessage(decrypted);
            } catch (error) {
                setDecryptedMessage('Erro ao descriptografar a mensagem.');
            }
        } else {
            alert("A chave privada ou o texto criptografado não estão definidos.");
        }
    };

    return (
        <div className="container">
            <div className="titulo">
            <h1>Criptografia RSA</h1>
            <p>Limite de caracteres: 214</p>
            </div>
            <div className="boxes-container">
                <div className="box">
                    <h2>Criptografar Mensagem</h2>
                    <textarea className="textarea" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Digite a mensagem para criptografar" />
                    <button className="button" onClick={handleEncrypt}> Criptografar </button>
                    <textarea className="textarea" value={encryptedMessage} readOnly placeholder="Texto criptografado aparecerá aqui" />
                </div>
                <div className="box">
                    <h2>Descriptografar Mensagem</h2>
                    <textarea className="textarea" value={encryptedMessage} onChange={(e) => setEncryptedMessage(e.target.value)} placeholder="Cole o texto criptografado aqui" />
                    <button className="button" onClick={handleDecrypt}> Descriptografar </button>
                    <textarea className="textarea" value={decryptedMessage} readOnly placeholder="Mensagem original aparecerá aqui" />
                </div>
            </div>
        </div>
    );
};

export default CryptoComponent;
