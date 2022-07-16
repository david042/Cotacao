import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
  const [valor, setValor] = useState(0);
	
  async function Consulta(){
	  const response = await Api.get('json/last/USD-BRL');
    setValor(response.data.USDBRL);
  }
  return (
		<View style={styles.container}>
      <Text style={styles.texto}> Cotação de moedas </Text>
      <TouchableOpacity 
        style={styles.botao}
        onPress={Consulta}
      >
      <Text style={styles.textoBotao}> Dólar para Real </Text>  
      </TouchableOpacity>

      <Cep data={valor}/>
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
    marginTop: 10
  },
  textoBotao:{
    color: '#fff',
    fontSize: 35,
    textAlign: 'center'
  }
});
