import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';

const Login = ({navigation}) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (userName === 'Nafees' && password === 'nafees12345') {
      Alert.alert(`Successfully Login ${userName}`);
      navigation.navigate('Home');
    } else {
      Alert.alert('Username And Password is Not Correct');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainheader}>Login Form</Text>
      <Text style={styles.description}>
        You Can reach us anytime via nf10018@gmail.com
      </Text>
      <View style={styles.inputcontainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput
          style={styles.inputstyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={actualdata => setUsername(actualdata)}
        />
        <Text style={styles.labels2}>Enter Your Password</Text>
        <TextInput
          style={styles.inputstyle2}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={actualdata => setPassword(actualdata)}
        />
      </View>

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? '#4630EB' : undefined}
        />

        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => submit()}
        style={[
          styles.background,
          {
            backgroundColor: agree ? '#4630EB' : 'grey',
          },
        ]}
        disabled={!agree}>
        <Text
          style={styles.Login}
          // submit()
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  mainheader: {
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputcontainer: {
    margin: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 16,
    marginBottom: 5,
    lineHeight: 25,
  },
  labels2: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 23,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputstyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 12,
    color: 'black',
  },
  inputstyle2: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 12,
    color: 'black',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 10,
    color: 'black',
  },
  wrapperText: {
    marginLeft: 12,
    color: 'black',
  },
  Login: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  background: {
    // backgroundColor:"4630EB",
    fontSize: 20,
    marginTop: 50,

    padding: 10,
  },
});
