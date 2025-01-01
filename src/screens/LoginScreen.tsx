import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface LoginValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginScreen = ({ navigation }: any) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleLogin = async (values: LoginValues) => {
    // Mock user database (You should replace this with an API call in real life)
    const mockUser = {
      email: 'user@example.com',  // Replace with the email to match
      password: 'password123',    // Replace with the correct password
    };

    console.log('Login values:', values);

    // Check if the email and password match the mock user data
    if (values.email === mockUser.email && values.password === mockUser.password) {
      // If the credentials are correct
      setShowSuccess(true);
      if (values.rememberMe) {
        await AsyncStorage.setItem('savedEmail', values.email);
      }
      setTimeout(() => setShowSuccess(false), 3000);
    } else {
      // If the credentials are incorrect
      alert('Invalid credentials, please try again');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <View style={styles.rememberMe}>
              <Switch
                value={values.rememberMe}
                onValueChange={(newValue: boolean) => {
                  setFieldValue('rememberMe', newValue);
                }}
              />
              <Text style={styles.rememberMeText}>Remember Me </Text>
            </View>

            <TouchableOpacity 
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => navigation.navigate('Signup')}
              style={styles.linkButton}
            >
              <Text style={styles.linkText}>Don't have an account? Sign up </Text>
            </TouchableOpacity>

            {showSuccess && (
              <Text style={styles.successText}>Login Successful!</Text>
            )}
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    textAlign: 'center',
    marginTop: 15,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  rememberMeText: {
    marginLeft: 10,
  },
  linkButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#007AFF',
  },
});

export default LoginScreen;
