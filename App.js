import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const FuelComparison = () => {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState('');

  const calculateFuelComparison = () => {
    if (alcoholPrice && gasolinePrice) {
      const alcoholValue = parseFloat(alcoholPrice);
      const gasolineValue = parseFloat(gasolinePrice);
      const comparison = alcoholValue / gasolineValue;

      if (comparison < 0.7) {
        setResult('É MAIS VANTAJOSO ABASTECER COM O ÁLCOOL!!!');
      } else {
        setResult('É MAIS VANTAJOSO ABASTECER COM A GASOLINA!!!');
      }
    }
  };

  return (
    <View style={styles.container}>
		  <Text style={styles.title}>Conversor do Spedini</Text>
	  <View style={styles.card}>
      <Text style={styles.label}>DIGITE O ATUAL PREÇO DO ÁLCOOL:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAlcoholPrice}
        keyboardType="numeric"
        placeholder="Preço do álcool"
        value={alcoholPrice}
      />

      <Text style={styles.label}>DIGITE O ATUAL PREÇO DA GASOLINA:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setGasolinePrice}
        keyboardType="numeric"
        placeholder="Preço da gasolina"
        value={gasolinePrice}
      />

      <Button onPress={calculateFuelComparison} title="Calcular" />

      <Text style={styles.result}>{result}</Text>
    </View>
</View>
	 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
	 imagem:{
	width: 250,
    height: 200,
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '50%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  title: {
	fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
	color: '#333333',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  card: {
	backgroundColor: '#01161E',
    borderRadius: 15,
    padding: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
	borderWidth: 3,
	borderColor: '#EFF6E0'
}

});

export default FuelComparison;
