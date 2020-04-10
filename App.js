// import{
//   Pro
// }from './material-kit-react-native-master/screens/Pro'

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  sectionTitle,
  Alert
} from 'react-native';

import {
  Header,
  Colors
} from 'react-native/Libraries/NewAppScreen';

function TextoAtivi(){
  const [textoDigitado, setTextoDigitado] = useState('');
  const [textoPostado, setTextoPostado] = useState('')
  return (
    <View style={styles.body}>
      <Text/>
      <Text style={styles.sectionTitle} >Digite seu texto aqui!!</Text>
      <Text />
      <TextInput 
        style={{
          height: 100, 
          borderColor: 'black', 
          borderWidth: 2, 
          margin: 5}}
          placeholder="Digite aqui!"
          multiline={true}
          onChangeText={texto => setTextoDigitado(texto)}
          maxLength={140}
          value={textoDigitado}

        />
      <Button
      onPress={() => {
        if (textoDigitado.length < 50){
          Alert.alert("Caracteres minimos de 50")
        }else{
        setTextoDigitado('')  
        setTextoPostado(textoDigitado),
        Alert.alert("Texto Postado!")
        }
      }}
      title="Postar" color="#000000" />
      <Text />
      <Text style={styles.sectionTitle}>O texto que foi digitado é: </Text>
    <Text style={styles.sectionTitle}>{textoDigitado}</Text>
    <Text />
    <Text />
      <Text style={styles.sectionTitle}>Textos antigos: </Text>
    <Text style={styles.sectionTitle}>{textoPostado}</Text>
    </View>
  )
}

const App = () => {
  return (
    <>
    <SafeAreaView>

    <Text style={styles.sectionTitle}> Atividade 30 (Text, TextInput, Button)</Text>
    <Text />
    <TextoAtivi />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    fontWeight: "bold",
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
