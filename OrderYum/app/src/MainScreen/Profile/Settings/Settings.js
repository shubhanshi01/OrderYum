import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.Themestyle}>
        Notifications
      </TouchableOpacity>
      <TouchableOpacity style={styles.Themestyle}>
        Change Password
      </TouchableOpacity>
      <TouchableOpacity style={styles.Themestyle}>
        Theme colors
      </TouchableOpacity>
      <TouchableOpacity style={styles.Themestyle}>
        About App
      </TouchableOpacity>
      <TouchableOpacity style={styles.Themestyle}>
        Share app
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        Log Out
    </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF3E2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FA812F',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton:{
    marginTop: 28,
    backgroundColor: '#FA812F',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
    color:"#ffff",
    
  },
  Themestyle:{
    width: '80%',
    backgroundColor: '#fff',
    borderColor: '#FA812F',
    borderWidth: 1.5,
    borderRadius: 20,
    paddingVertical: 12,
    marginTop: 12,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#FA812F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    color:'#FA812F',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  }

  
});

export default Settings;
