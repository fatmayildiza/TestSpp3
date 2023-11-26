import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignUp from './SignUp';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'white'}}>ANA SAYFA</Text>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.homeButtonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8823D',
  },

  homeButton: {
    marginTop: 160,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    height: 50,
  },
  homeButtonText: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
