import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const dados = {
  email: "angelkim@gmail.com",
  password: "lorranalinda"
}


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bem-vindo">
        <Stack.Screen name="Bem-vindo" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const WelcomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Bem-vindo ao All Chat</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLoginPress}
      >
      <Text style={styles.buttonText}>Fazer login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegisterPress}
      >
        <Text style={styles.buttonText}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const campoLogin = () => {
    if (email === dados.email && password ===dados.password){
      Alert.alert('Sucesso!!!!!');
    } else {
      Alert.alert('Erro', 'Nome de usuário ou senha incorretos');
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete='off'
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={campoLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={handleRegisterPress}
      >
        <Text style={styles.linkText}>Não tem uma conta? Registre-se aqui</Text>
      </TouchableOpacity>
    </View>
  );
};


const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, CsetPassword] = useState('')

  const handleRegister = () => {
    // logica
  };

  const campoLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar uma conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete='off'
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        secureTextEntry={true}
        
        TextInput/>
      <TextInput
        style={styles.input}
        placeholder='Confirme a senha'
        value={Cpassword}
        onChangeText={CsetPassword}
        autoCapitalize='none'
        secureTextEntry={true}

      />
      </View>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#b7d4d0',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'white'
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
      minWidth: '80%',
    },
    button: {
      backgroundColor: '#478c80',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
      minWidth: '80%',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign:'center',
    },
    link: {
      marginTop: 20,
    },
    linkText: {
      color: '#478c80',
      fontSize: 16,

    },
  });

  
export default AppNavigator;