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

const SignUpScreen = () => {
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
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.subtitle}>Create an account</Text>
          </View>

    
          <View style={styles.formContainer}>
           
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full name</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Name Surname"
                  placeholderTextColor="#999"
                />
              </View>
            </View>

          
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Enter your e-mail</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="email@email.com"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

         
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Create a username</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="email@email.com"
                  placeholderTextColor="#999"
                  autoCapitalize="none"
                />
              </View>
            </View>


            <View style={styles.inputGroup}>
              <Text style={styles.label}>Create your password</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="**************"
                  placeholderTextColor="#999"
                  secureTextEntry={true}
                />
              </View>
            </View>

            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Repeat password</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="**************"
                  placeholderTextColor="#999"
                  secureTextEntry={true}
                />
              </View>
            </View>

            
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Sign up</Text>
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
    paddingVertical: 20,
  },
  header: {
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 34,
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
    marginBottom: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  inputWrapper: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E9ECEF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#000000',
  },
  signUpButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
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
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default SignUpScreen;