import React from 'react'
import {View,Text} from 'react-native'
import { useState } from 'react';
import { FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Cart = ({navigation}) => {
    return(

        <View style={styles.maincontainer}>
            <View style={{backgroundColor:'#FA812F', height:60, width:'100%', justifyContent:'center', alignItems:'center'}}>

            <TouchableOpacity>
                <Text style={styles.button}>Close</Text>
            </TouchableOpacity>

        </View>
        
        <View style={styles.container}>
        <Text style={styles.title}>CartItems</Text>
        <View style={style.containerCardList}>
            <Image source={require('../Component/images/paneer.jpg')} styles={styles.cardImage}></Image>
            <View>
                <Text>Mera Dhaabaw</Text>
            </View>
        </View>
    </View>
</View>
    )
}
export default Cart;

const styles = StyleSheet.create({})