import React from 'react'
import { View } from 'react-native'
import { Text, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native';
import Header from '../Component/Header';
import OfferSlider from '../Component/OfferSlider'; 
import Recommended from '../Component/Recommended';

const food = {
    categories: ['Pizza', 'Burger', 'Salad', 'Dessert', 'Drinks'],
    recommended: [
        { name: 'Margherita Pizza', desc: 'Classic pizza with fresh basil and mozzarella' },
        { name: 'Cheeseburger', desc: 'Juicy beef patty with cheese and all the fixings' },
        { name: 'California Roll', desc: 'Sushi roll with crab, avocado, and cucumber' },
        { name: 'Caesar Salad', desc: 'Crisp romaine lettuce with Caesar dressing and croutons' },
    ]
};

const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
            <View style={styles.categories}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
                    {food.categories.map((category, idx) => (
                        <View style={styles.categoryCard} key={idx}>
                            <Text
                                style={styles.categoryText}
                                onPress={() => {}}
                                accessibilityRole="button"
                            >
                                {category}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.sectionTitle}>
                <View>
                    <OfferSlider />
                </View>
                <View style={{ marginTop: 20 }} />
                <Text style={styles.titleText}>Recommended For You</Text>
            </View>

            <Recommended />
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
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 20,
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
