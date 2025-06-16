import React from 'react'
import { View ,Text,StyleSheet,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import NextSignup from './NextSignup';
import Login from './Login';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}> 
          <StatusBar backgroundColor={'#FA812F'} />
          <View style={{paddingVertical:12, width:'95%', alignSelf:'center', marginBottom:10}}>
          <Text style={{alignSelf:'center',fontSize:25,fontWeight:'700',color:'#FA4032',fontStyle:''}}>Sign Up</Text>
    
          <TextInput
            placeholder="Email"
            keyboardType='email-address'
            placeholderTextColor="#888"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#888"
            secureTextEntry
            style={styles.input}
          />
    
          <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate("NextSignup")}> 
            <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <View style={{marginTop:20, alignSelf:'center', flexDirection:'row', justifyContent:'center'}}>
  <Text>
    Already have an account?{' '}
    <Text style={styles.registerLink} onPress={()=>navigation.navigate('Login')}>Login</Text>
  </Text>
</View>
        </View>
        
    </View>

  )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FEF3E2',
      // alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      width: '100%',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#F8ED8C',
      marginBottom: 40,
      textAlign: 'center',
      marginHorizontal: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      
    }
    ,
    input: {
      width: '100%',
      backgroundColor: '#FFf',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#FEBE8C',
    },
    loginButton: {
      width: '100%',
      backgroundColor: '#F3C623',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#333',
      fontSize: 16,
      fontWeight: '600',
    },
    registerText: {
      marginTop: 20,
      fontSize: 14,
      color: '#333',
    },
    registerLink: {
      color: '#008CBA',
      fontWeight: 'bold',
    },
});

 