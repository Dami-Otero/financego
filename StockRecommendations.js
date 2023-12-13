import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

const StockRecommendations = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://twelve-data1.p.rapidapi.com/recommendations?symbol=AAPL';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b98880c40dmsh065c2f178070b71p1d5c78jsnaab21f4eb8b1',
          'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setErrorMessage('Failed to load data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderTableRows = (data, parentKey = '') => {
    return Object.keys(data).map((key, index) => {
      const value = data[key];
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === 'object' && value !== null) 
      {
        return (
          <View key={newKey}>
            <Text style={[styles.tableCell, styles.subHeaderCell]}>{key}</Text>
            {renderTableRows(value, newKey)}
          </View>
        );
      } 
      else 
      {
        return (
          <View key={newKey} style={styles.tableRow}>
            <Text style={styles.tableCell}>{key}</Text>
            <Text style={styles.tableCell}>{value.toString()}</Text>
          </View>
        );
      }
    });
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (errorMessage) {
    return <Text style={styles.errorText}>{errorMessage}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.table}>
        {data && renderTableRows(data)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: '#eef',
    textAlign: 'left',
    paddingLeft: 10,
  },
});

export default StockRecommendations;
