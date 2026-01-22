import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function CheckoutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.banner}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={26} color="#1f2937" />
        </TouchableOpacity>

        <Text style={styles.bannerText}>Checkout</Text>

        <View style={{ width: 24 }} />
      </View>

      <View style={styles.container}>
        <Text style={styles.info}>This is a simple checkout placeholder.</Text>
        <Text style={styles.infoSmall}>Implement payment and order summary here.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5E6D3',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  bannerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  info: { fontSize: 16, color: '#333', marginBottom: 8 },
  infoSmall: { fontSize: 13, color: '#666' },
});
