import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const SavingsGoals = () => {
  const [monthlyEarnings, setMonthlyEarnings] = useState('');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [endOfYearBalance, setEndOfYearBalance] = useState(null);

  const calculateEndOfYearBalance = () => {
    const earnings = parseFloat(monthlyEarnings);
    const expenses = parseFloat(monthlyExpenses);
    if (!isNaN(earnings) && !isNaN(expenses)) {
      const yearlySavings = (earnings - expenses) * 12;
      setEndOfYearBalance(yearlySavings);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80} 
    >
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          value={monthlyEarnings}
          onChangeText={setMonthlyEarnings}
          placeholder="Enter Monthly Earnings"
          keyboardType="numeric"
          placeholderTextColor="#6c757d"
        />
        <TextInput
          style={styles.input}
          value={monthlyExpenses}
          onChangeText={setMonthlyExpenses}
          placeholder="Enter Monthly Expenses"
          keyboardType="numeric"
          placeholderTextColor="#6c757d"
        />
        <TouchableOpacity style={styles.button} onPress={calculateEndOfYearBalance}>
          <Text style={styles.buttonText}>Calculate End of Year Balance</Text>
        </TouchableOpacity>
        {endOfYearBalance !== null && (
          <Text style={styles.resultText}>End of Year Balance: ${endOfYearBalance.toFixed(2)}</Text>
        )}
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
  resultText: {
    fontSize: 18,
    color: '#28a745',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SavingsGoals;
