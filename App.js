import React, { useState } from 'react'; // Importa React e o hook useState
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; // Importa componentes do React Native
 
// Função principal do aplicativo
const App = () => {
  // Estados para armazenar o nome de usuário e a senha
  const [username, setUsername] = useState('');
  const [email, setUsermail] = useState('');
  const [telefone, setUsertelefone] = useState('');
  const [endereco, setUserendereco] = useState('');
  // Função que é chamada quando o botão de login é pressionado
  const handleLogin = () => {
    // Aqui, você poderia adicionar lógica para autenticar o usuário
    alert(`Usuário: ${username} \nEmail: ${email} \nTelefone: ${telefone} \nEndereço: ${endereco}`); // Exibe um alerta com as credenciais
  };

  const handleClear = () => {
      // apagar
    setUsername('');
    setUsermail('');
    setUsertelefone('');
    setUserendereco('');
  };
 
  return (
    // Contêiner principal que centraliza o conteúdo
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername} // Atualiza o estado do nome de usuário
      />
        <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setUsermail} // Atualiza o estado do nome de usuário
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setUsertelefone} // Atualiza o estado do nome de usuário
      />
        <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setUserendereco} // Atualiza o estado do nome de usuário
      />

    
      {/* Contêiner para os botões */}
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} />
        <Button title="Limpar" onPress={handleClear} />
      </View>
    </View>
  );
};
 
export default App;
 
// Definição de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar toda a altura da tela
    justifyContent: 'center', // Centraliza os itens verticalmente
    alignItems: 'center', // Centraliza os itens horizontalmente
    backgroundColor: '#87CEFA', // Cor de fundo cinza claro
  },
 
  title: {
    fontSize: 34, // Tamanho da fonte do título
    fontWeight: 'bold', // Texto em negrito
    fontFamily: 'Georgia',
    marginBottom: 15, // Espaço abaixo do título
  },
 
  input: {
    height: 40, // Altura do campo de entrada
    borderColor: '#ccc', // Cor da borda do campo de entrada
    backgroundColor: '#DCDCDC', // Cor de fundo do campo de entrada
    borderWidth: 1, // Largura da borda
    marginBottom: 15, // Espaço abaixo do campo de entrada
    paddingHorizontal: 10, // Espaçamento interno do campo de entrada
    width: '80%', // Largura do campo de entrada

    
  },

  buttonContainer: {
    flexDirection: 'row', // Posiciona os botões lado a lado
    justifyContent: 'space-between', // Espaço entre os botões
    width: '8%', // Largura do contêiner dos botões
  },
  
});
 