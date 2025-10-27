import { useRouter } from 'expo-router';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen() {
  const router = useRouter();

  const handleSignUp = () => {
    console.log('Account created');
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <ImageBackground
        source={require('../assets/images/bg-pattern.jpg')}
        style={styles.topImage}
        resizeMode="cover"
      />
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          
          <View style={styles.header}>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.subtitle}>Create an account to continue</Text>
          </View>

    
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Name Surname"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email address</Text>
              <TextInput
                style={styles.textInput}
                placeholder="email@email.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.textInput}
                placeholder="username"
                placeholderTextColor="#999"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.textInput}
                placeholder="********"
                placeholderTextColor="#999"
                secureTextEntry={true}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm password</Text>
              <TextInput
                style={styles.textInput}
                placeholder="********"
                placeholderTextColor="#999"
                secureTextEntry={true}
              />
            </View>

           
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>Sign up</Text>
            </TouchableOpacity>

          
            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text
                style={styles.linkText}
                onPress={() => router.push('/LoginScreen')}
              >
                Log in
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    marginBottom: 0,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B6B6B',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#000000',
  },
  signUpButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  footerText: {
    fontSize: 14,
    color: '#6B6B6B',
    textAlign: 'center',
  },
  linkText: {
    color: '#8B5CF6',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
