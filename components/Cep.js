import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Cotacao(props) {
  return (
    <>
        <Text style={styles.texto}>
            Dados para cotação {"\n"}
            Compra: {props.data.bid} {"\n"}
            Venda: {props.data.ask} {"\n"}
            Variação: {props.data.varBid} {"\n"}
            Máximo: {props.data.high} {"\n"}
            Mínimo: {props.data.low}
        </Text>
	</>
  );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 30,
        lineHeight: 40
    }
});
