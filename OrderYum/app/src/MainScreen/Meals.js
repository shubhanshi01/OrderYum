import React, { useRef, useState } from 'react';
import {View,Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'

const mealsData = [
  {
    name: 'Paneer Butter Masala',
    desc: 'Rich and creamy curry with soft paneer cubes.',
    price: '₹220',
    image:require('../Component/images/paneer.jpg'),
  },
  {
    name: 'Veg Biryani',
    desc: 'Aromatic rice with fresh vegetables and spices.',
    price: '₹180',
    image: require('../Component/images/biryani.jpg'),
  },
  {
    name: 'Dal Makhani',
    desc: 'Slow-cooked black lentils in a buttery sauce.',
    price: '₹160',
    image: require('../Component/images/dal.jpg'),
  },
  {
    name: 'Chole Bhature',
    desc: 'Spicy chickpeas served with fluffy bhature.',
    price: '₹140',
    image: require('../Component/images/chole.jpg'),
  },
    {
      name: 'Margherita Pizza',
      desc: 'Classic delight with 100% real mozzarella cheese.',
      price: '₹220',
      image: require('../Component/images/1.jpg'),},
    {
      name: 'Egg Ramen',
      desc: 'Spicy paneer cubes grilled with saucy ramen perfection.',
      price: '₹180',
      image:  require('../Component/images/3.jpg'),
    },
    
    {
      name: 'Palak Paneer',
      desc: 'Soft paneer in creamy spinach gravy.',
      price: '₹200',
      image: require('../Component/images/palak.jpg'),},
    {
      name: 'Masala Dosa',
      desc: 'Crispy rice crepe with spiced potato filling.',
      price: '₹120',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masala-dosa-1.jpg',
    },
    {
      name: 'Aloo Paratha',
      desc: 'Whole wheat flatbread stuffed with spiced potatoes.',
      price: '₹80',
      image: require('../Component/images/aloo.jpg'),
    },
    {
      name: 'Rajma Chawal',
      desc: 'Red kidney beans curry with steamed rice.',
      price: '₹150',
      image: require('../Component/images/rajma.jpg'),
    },
    {
      name: 'Pav Bhaji',
      desc: 'Spiced vegetable mash with buttered buns.',
      price: '₹130',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/pav-bhaji-recipe-1.jpg',
    },
    {
      name: 'Idli Sambar',
      desc: 'Steamed rice cakes with lentil vegetable stew.',
      price: '₹100',
      image: require('../Component/images/idli.jpg'),
    },
    {
      name: 'Vada Pav',
      desc: 'Spicy potato fritter in a bun with chutneys.',
      price: '₹60',
      image: require('../Component/images/vada.jpg'),
    },
    {
      name: 'Malai Kofta',
      desc: 'Vegetable dumplings in rich creamy gravy.',
      price: '₹240',
      image: require('../Component/images/malai.jpg'),
    },
    {
      name: 'Samosa',
      desc: 'Crispy pastry with spiced potato filling.',
      price: '₹40',
      image: require('../Component/images/samosa.jpg'),
    },
    

];

const Meals = () => {
  const scrollRef = useRef();

  return (
    <View style={styles.container}>
      <Image source={require('../Component/images/header.jpg')} style={styles.topImage} />
      <ScrollView
        contentContainerStyle={styles.cardsContainer}
        ref={scrollRef}
      >
        {mealsData.map((meal, idx) => (
          <View style={styles.card} key={idx}>
            <Image source={meal.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{meal.name}</Text>
              <Text style={styles.cardDesc}>{meal.desc}</Text>
              <Text style={styles.cardPrice}>{meal.price}</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => {}}>
                <Text style={styles.addButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
    alignItems: 'center',
  },
  topImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  cardsContainer: {
    alignItems: 'stretch', // allow cards to fill width
    paddingBottom: 20,
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: '100%', // use 100% of parent width for all platforms
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box', // for web, ensures padding doesn't overflow
  },
  cardImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: 24, // add space between image and text
  },
  cardContent: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
    textAlign: 'left',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textAlign: 'left',
  },
  cardPrice: {
    fontSize: 16,
    color: '#E67E22',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  addButton: {
    backgroundColor: '#FA812F',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Meals;
