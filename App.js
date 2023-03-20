import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppNavigator(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={ScreanTime} options={{ headerShown: false }} />
        <Stack.Screen name="Bem-vindo" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function ScreanTime({navigation}){

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Bem-vindo'); // navega para a tela Welcome
    }, 3000); // espera 3 segundos antes de navegar

    return () => clearTimeout(timer); // limpa o temporizador ao desmontar
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.imageMOrango} source={require('../ProTest/morango.png')}></Image>
      <Text style={styles.linkText}>TalkUp</Text>
    </View>
  );
};

function WelcomeScreen ({ navigation }){
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageMOrango} source={require('../ProTest/morango.png')}></Image>
      <Text style={styles.title}>Bem-vindo ao TalkUp</Text>

      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Fazer login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

function LoginScreen ({ navigation }){
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
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={campoLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handleRegisterPress}>
        <Text style={styles.linkText}>Não tem uma conta? Registre-se aqui</Text>
      </TouchableOpacity>
    </View>
  );
};


function RegisterScreen ({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, CsetPassword] = useState('')

  const handleRegister = () => {
    if (email === '' | password ==='' | Cpassword===''){
      Alert.alert("mensagem","ERRO")
    }else{
      Alert.alert("mensagem", "CRIADO")
    }
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={campoLoginPress}>
        <Text style={styles.linkText}>Já tem uma conta? Registre-se aqui</Text>
      </TouchableOpacity>
      </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b7d4d0',
    fontFamily:'monospace'
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
      fontSize: 12,
      paddingTop:20,
    },
    imageMOrango:{
      width:100,
      height:100,
      right: 16,
    }
  });

  
export default AppNavigator;