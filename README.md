### Utilizamos o algoritmo RSA (Rivest-Shamir-Adleman) para proteger informações por meio da criptografia. No código desenvolvido, é gerado um par de chaves RSA (pública e privada) com a biblioteca node-forge.
### Os usuários podem criptografar mensagens utilizando a chave pública, convertendo-as em texto criptografado codificado em Base64. Para a descriptografia, utilizamos a chave privada, que reverte o texto criptografado à sua forma original. 
### A segurança do RSA é baseada na dificuldade de fatorar números grandes, o que torna inviável recuperar a mensagem original sem a chave privada. Dessa forma, o sistema permite a troca segura de informações através da criptografia assimétrica.

## Desenvolvido por Renan Dias e Ruhan Schitz
