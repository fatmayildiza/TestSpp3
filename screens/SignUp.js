import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import NumberVerification from 'phone-number-verification-tr2';
import firebase from '../firebaseConfig';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleVerification = async isValid => {
    if (isValid) {
      alert('Successful verification!');

      // Firebase Realtime Database'e kullanıcıyı ekle
      try {
        await firebase.database().ref('users').push({
          fullName,
          phoneNumber,
        });
        console.log('User data saved to Firebase');
      } catch (error) {
        console.error('Error saving user data to Firebase:', error);
      }

      // Kayıt başarılı olduğunda "Home" ekranına yönlendir
      navigation.navigate('Home');
    } else {
      alert('Invalid phone number. Please enter a valid number.');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.bg}>
          <Image
            source={require('../assets/images/header.png')}
            style={styles.logo}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Name</Text>
            <TextInput
              style={styles.fullNameInput}
              placeholder="Enter Full Name"
              value={fullName}
              onChangeText={text => setFullName(text)}
            />
            <Text style={styles.title}> Phone Number</Text>
            <NumberVerification
              buttonColor="#de1510"
              buttonText="Next Step"
              inputWidth="90%"
              inputHeight={70}
              onVerification={handleVerification}
            />
          </View>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.homeButtonText}>Go to Home Page</Text>
          </TouchableOpacity>
          <View style={styles.albarakaContainer}>
            <Image
              source={require('../assets/images/albaraka.png')}
              style={styles.albarakaLogo}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8823D',
  },

  bg: {
    marginTop: 32,
    borderTopLeftRadius: 111,
    borderTopRightRadius: 111,
    backgroundColor: '#fcfcfc',
    width: '96%',
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 32,
  },

  contentContainer: {
    marginTop: -84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#de1510',
    marginBottom: 10,
    textAlign: 'center',
  },

  albarakaContainer: {
    bottom: 20,
    marginTop: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  albarakaLogo: {
    width: 160,
    height: 50,
  },

  homeButton: {
    marginTop: 160,
    backgroundColor: '#F8823D',
    padding: 10,
    borderRadius: 5,
    height: 50,
  },
  homeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fullNameInput: {
    height: 40,
    width: 320,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default SignUp;
