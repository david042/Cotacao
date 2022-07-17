import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Cot from './components/Cot';

export default function App() {
  const [valor, setValor] = useState(0);

  return (
		<View style={styles.container}>
      <Text style={styles.texto}> Cotação de moedas </Text>
      <TouchableOpacity 
        style={styles.botao}
        onPress={()=>axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL').then((response)=>setValor(response.data.USDBRL))}
      >
      <Text style={styles.textoBotao}> Dólar para Real </Text>  
      </TouchableOpacity>

      <Cot data={valor}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 30
  },
  botao:{
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#000',
    marginBottom: 10,
    marginTop: 10,
  },
  textoBotao:{
    color: '#fff',
    fontSize: 35,
    textAlign: 'center'
  }
});
