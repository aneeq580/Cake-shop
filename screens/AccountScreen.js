import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../context/UserContext';

const AccountScreen = ({ navigation }) => {
  const { userData } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Account Information</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Account Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          {/* First Name */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>First Name</Text>
            <Text style={styles.value}>{userData.firstName}</Text>
          </View>

          {/* Last Name */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Last Name</Text>
            <Text style={styles.value}>{userData.lastName}</Text>
          </View>

          {/* Email */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{userData.email}</Text>
          </View>

          {/* Phone */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>{userData.phone}</Text>
          </View>
        </View>

        {/* Address Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address</Text>

          {/* Address */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Street Address</Text>
            <Text style={styles.value}>{userData.address}</Text>
          </View>

          {/* City */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>City</Text>
            <Text style={styles.value}>{userData.city}</Text>
          </View>

          {/* State */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>State</Text>
            <Text style={styles.value}>{userData.state}</Text>
          </View>

          {/* Zip Code */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Zip Code</Text>
            <Text style={styles.value}>{userData.zipCode}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5E6D3',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
  },
  section: {
    backgroundColor: 'white',
    marginTop: 12,
    marginHorizontal: 12,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 6,
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f2937',
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
});

export default AccountScreen;