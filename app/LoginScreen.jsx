import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [rememberMe, setRememberMe] = React.useState(false);





  const handleBack = () => {
    navigation.goBack();
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <SafeAreaView style={styles.container}>
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
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Log in</Text>
            <Text style={styles.subtitle}>Enter your details to continue</Text>
          </View>

       
          <View style={styles.formContainer}>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Enter your e-mail</Text>
              <TextInput
                style={styles.textInput}
                placeholder="email@email.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Enter your password</Text>
              <TextInput
                style={styles.textInput}
                placeholder="**************"
                placeholderTextColor="#999"
                secureTextEntry={true}
              />
            </View>

            
            <View style={styles.optionsRow}>
              <TouchableOpacity 
                style={styles.rememberMeContainer}
                onPress={toggleRememberMe}
              >
                <View style={[
                  styles.checkbox,
                  rememberMe && styles.checkboxChecked
                ]}>
                  {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.rememberMeText}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity >
                <Text style={styles.recoverPasswordText}>Recover password</Text>
              </TouchableOpacity>
            </View>

           
            <TouchableOpacity style={styles.loginButton} >
              <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
  },
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#000000',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#E9ECEF',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  rememberMeText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
  recoverPasswordText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default LoginScreen;