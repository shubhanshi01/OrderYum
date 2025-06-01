import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { ScrollView } from 'react-native';
const Recommended = () => {
const foodItems = [
    {
        name: 'Margherita Pizza',
        desc: 'Classic delight with 100% real mozzarella cheese',
        price: '₹299',
        image: require('./images/1.jpg'),
    },
    {
        name: 'Fish Meal',
        desc: 'fresh fish and variety of side dishes',
        price: '₹299',
        image: require('./images/5.jpg'),
    },
    {
        name: 'Ramen',
        desc: 'Spicy paneer cubes grilled with saucy ramen perfection',
        price: '₹199',
        image: require('./images/3.jpg'),
    },
    {
        name: 'Veggie Burger',
        desc: 'Loaded with fresh veggies and sauces',
        price: '₹149',
        image: require('./images/4.jpg'),
    },
    // Add more items as needed
];

return (
    <ScrollView horizontal style={styles.recommended} showsHorizontalScrollIndicator={false}>
        {foodItems.map((item, idx) => (
            <View style={[styles.foodCard, { height:200,width: 250, marginRight: 15 }]} key={idx}>
                {item.image && (
                    <Image source={item.image} style={styles.foodImage} />
                )}
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodDesc}>{item.desc}</Text>
                <Text style={styles.foodPrice}>{item.price}</Text>
            </View>
        ))}
    </ScrollView>
)
}

export default Recommended


const styles = StyleSheet.create({
    recommended: {
        paddingVertical: 20,
        paddingLeft: 20,
        backgroundColor: '#FEF3E2',
    },
    foodCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 10,
        marginRight: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
        flexDirection: 'column', // row for image left, text right
        alignItems: 'center',
        width: 270,
        height: 120,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginRight: 15,
        marginLeft: 10,
    },
    foodImage: {
        width: 90,
        height: 90,
        borderRadius: 10,
        marginRight: 16,
        justifyContent: 'center',
    },
    foodName: {
        fontSize: 17,
        fontWeight: '700',
        color: '#222',
        marginBottom: 2,
        textAlign: 'right',
    },
    foodDesc: {
        fontSize: 13,
        color: '#888',
        marginTop: 2,
        textAlign: 'center',
        marginBottom: 6,
    },
    foodPrice: {
        fontSize: 16,
        color: '#E67E22',
        marginTop: 4,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});
