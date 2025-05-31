import React from 'react'
import { View } from 'react-native'
import { Text,StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native';
import Header from '../Component/Header';
import OfferSlider from '../Component/OfferSlider'; 

const Home = () => {
return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'#FA812F'} barStyle="light-content" />
        <Header />
        
        <View style={styles.searchSection}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search for food or restaurants"
                placeholderTextColor="#aaa"
            />
        </View>
        <View style={styles.sectionTitle}>
            <Text style={styles.titleText}>Popular Categories</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
            {/* Example categories as buttons */}
            <View style={styles.categoryCard}>
                <Text style={styles.categoryText} onPress={() => {}} accessibilityRole="button">🍕 Pizza</Text>
            </View>
            <View style={styles.categoryCard}>
                <Text style={styles.categoryText} onPress={() => {}} accessibilityRole="button">🍔 Burger</Text>
            </View>
            <View style={styles.categoryCard}>
                <Text style={styles.categoryText} onPress={() => {}} accessibilityRole="button">🍣 Sushi</Text>
            </View>
            <View style={styles.categoryCard}>
                <Text style={styles.categoryText} onPress={() => {}} accessibilityRole="button">🥗 Salad</Text>
            </View>
        </ScrollView>
        
        <View style={styles.sectionTitle}>
        <View >
        <OfferSlider />
        </View>
        <View style={{marginTop: 20}} />
            <Text style={styles.titleText}>Recommended For You</Text>
        </View>
        
        <ScrollView style={styles.recommended}>
            
            <View style={styles.foodCard}>
                <Text style={styles.foodName}>Margherita Pizza</Text>
                <Text style={styles.foodDesc}>Classic delight with 100% real mozzarella cheese</Text>
            </View>
            <View style={styles.foodCard}>
                <Text style={styles.foodName}>Veggie Burger</Text>
                <Text style={styles.foodDesc}>Loaded with fresh veggies and sauces</Text>
            </View>
        </ScrollView>
        
    </View>

)
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEF3E2',
    },

   
    searchSection: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    categories: {
        paddingLeft: 20,
    },
    categoryCard: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginRight: 10,
    },
    categoryText: {
        fontSize: 16,
    },
    recommended: {
        paddingHorizontal: 20,
    },
    foodCard: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    foodName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    foodDesc: {
        fontSize: 14,
        color: '#666',
    }
});
