import { useRouter } from 'expo-router';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleSignUp = () => {
<<<<<<< HEAD
    router.push('/SignupScreen');
  };

  const handleLogIn = () => {
    router.push('/LoginScreen');
  };
=======

    navigation.navigate('SignUp');
  };

 
>>>>>>> 2e38a868f2d2d1351dff4edaf8e6ebf43b1b21e3

  return (
    <SafeAreaView style={styles.container}>
    
      <ImageBackground
        source={require('../../assets/images/bg-pattern.jpg')}
        style={styles.topImage}
        resizeMode="cover"
      />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome to the app{'\n'}& let’s get started</Text>
          <Text style={styles.subText}>
            This app is the best app, thank you for downloading it. You won't regret using it.
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogIn}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.termsText}>
          By signing up, I agree to the{' '}
          <Text style={styles.linkText}>Terms and Conditions</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topImage: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,
  },
  subText: {
    fontSize: 15,
    color: '#6B6B6B',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300,
  },
  buttonGroup: {
    width: '100%',
    marginBottom: 40,
  },
  signUpButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  loginButton: {
    borderWidth: 2,
    borderColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  loginText: {
    color: '#8B5CF6',
    fontSize: 17,
    fontWeight: '600',
  },
  termsText: {
    fontSize: 13,
    color: '#6B6B6B',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  linkText: {
    color: '#8B5CF6',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
<<<<<<< HEAD
=======

export default WelcomeScreen;
>>>>>>> 2e38a868f2d2d1351dff4edaf8e6ebf43b1b21e3
