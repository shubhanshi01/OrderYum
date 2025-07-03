import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductPage = () => {
  // Temporary hardcoded product data
  const product = {
    id: 1,
    name: 'Margherita Pizza',
    desc: 'Classic delight with 100% real mozzarella cheese',
    price: '₹299',
    inStock: 'Available',
    image: require('./images/Margherita.jpg'), // Make sure this path is correct
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.desc}>{product.desc}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text
        style={[
          styles.stock,
          { color: product.inStock === 'Available' ? '#43aa8b' : '#e63946' },
        ]}
      >
        {product.inStock}
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF914D' }]}
          onPress={() => alert(`Added ${product.name} to cart!`)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#43aa8b' }]}
          onPress={() => alert(`Ordered ${product.name}!`)}
        >
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 4,
  },
  desc: {
    fontSize: 16,
    color: '#4a4e69',
    marginBottom: 12,
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#5f6dff',
  },
  stock: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
