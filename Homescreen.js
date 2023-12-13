import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const Homescreen = ({ navigation }) => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');

  const deposit = () => {
    setBalance(prevBalance => prevBalance + parseFloat(amount));
    setAmount('');
  };

  const withdraw = () => {
    setBalance(prevBalance => prevBalance - parseFloat(amount));
    setAmount('');
  };

  const updateBalance = () => {
    setBalance(parseFloat(amount));
    setAmount('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80} 
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Balance: ${balance.toFixed(2)}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          placeholder="Enter amount"
          keyboardType="numeric"
          placeholderTextColor="#6c757d"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={deposit}>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={withdraw}>
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={updateBalance}>
            <Text style={styles.buttonText}>Set Balance</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lowerButtonContainer}>
          <TouchableOpacity style={styles.lowerButton} onPress={() => navigation.navigate('SavingsGoals')}>
            <Text style={styles.lowerButtonText}>Go to Savings Goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lowerButton} onPress={() => navigation.navigate('StockRecommendations')}>
            <Text style={styles.lowerButtonText}>Stock Recommendations</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  input: {
    height: 50,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  lowerButtonContainer: {
    marginTop: 10,
    width: '80%',
  },
  lowerButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  lowerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Homescreen;
