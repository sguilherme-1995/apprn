// import{
//   Pro
// }from './material-kit-react-native-master/screens/Pro'

import React, {Component ,useState} from 'react';
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
  Alert,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  Colors
} from 'react-native/Libraries/NewAppScreen';

class Contador extends Component {
  render() {
    return (
      <TextInput 
        {...this.props}
      />
    );
  }
}

class Jogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '', 
      tempo: 10, 
      play: false
    }
    this.contador;
  }
  componentDidMount(){
    this.start()
  }

  start(){
    clearInterval(this.contador)
      this.contador = setInterval(() => {
        this.incrementaContadador()
      },1000
        );
      this.setState({play: true});
  }

  incrementaContadador(){
      this.setState((state=>({tempo: state.tempo - 1})))
    if(this.state.tempo === 0 ){
      this.setState({play: false})
      this.componentWillUnmount()
    }
  }
 
  componentWillUnmount(){
    clearInterval(this.contador); 
    Alert.alert(`                   ------Parabéns------\n               A sua pontuação é ${this.state.texto.length}`)
  }

  render(){
      return (
        <View>
          <Text style={styles.sectionTitle} > </Text>
          <Text style={styles.sectionDescription}>Tempo: {this.state.tempo}</Text>
          <Text />
          <Contador
          style={{
            height: 100, 
            borderColor: 'black', 
            borderWidth: 4, 
            margin: 5}}
          numberOfLines = {5  }
          editable={this.state.play}
          multiline = {true}
          placeholder='                                               Digite aqui'
          onChangeText={(text) => this.setState({texto: text})}
          value={this.state.texto}
        />
        <Text style={styles.sectionDescription}>Sua pontuação até o momento é: {this.state.texto.length}</Text>
        <Text style={styles.sectionTitle}>-------------------------------------</Text>
        <View style={{
            height: 50, 
            borderColor: '#bad1f7',
            backgroundColor: '#2672ed', 
            borderWidth: 2, 
            margin: 31,
            width:350,
            padding: 1,
            }}>
         <TouchableOpacity onPress={() => {
              this.setState({
                texto: '', 
                tempo: 10, 
                play: false
              })
              this.start()
          }}>
            <Text style = {styles.sectionDescription}>
              Clique aqui para recomeçar
            </Text>
         </TouchableOpacity>
      </View> 
        
          
        </View>
      )
  }
  }

const App = () => {
  return (
    <>
      <SafeAreaView >
        <Text />
        <Text />
        <Text style={styles.sectionTitle}>Jogo da Digitação</Text>
        <Text />
        <Text style={styles.sectionDescription}>Digite o maximo que conseguir em 10 segundos!</Text>
        <Jogo />
        <Text />
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
    color: Colors.black,
    textAlign: 'center',
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
