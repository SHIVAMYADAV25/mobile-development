import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, StatusBar, Dimensions,
} from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

function PlusLogo() {
  return (
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <Path d="M18 4 L18 32 M4 18 L32 18" stroke="white" strokeWidth="7" strokeLinecap="round"/>
    </Svg>
  );
}

function MailIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Rect x="2" y="4" width="20" height="16" rx="2" stroke="#888" strokeWidth="1.8"/>
      <Path d="M2 7 L12 13 L22 7" stroke="#888" strokeWidth="1.8" strokeLinecap="round"/>
    </Svg>
  );
}

function LockIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Rect x="5" y="11" width="14" height="10" rx="2" stroke="#888" strokeWidth="1.8"/>
      <Path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#888" strokeWidth="1.8" strokeLinecap="round"/>
    </Svg>
  );
}

function EyeIcon({ visible }: { visible: boolean }) {
  return visible ? (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#aaa" strokeWidth="1.8"/>
      <Path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" stroke="#aaa" strokeWidth="1.8"/>
    </Svg>
  ) : (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"/>
    </Svg>
  );
}

function FacebookIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
}

function GoogleIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path d="M21.8 10.2H12v3.6h5.6c-.5 2.4-2.6 4.2-5.6 4.2-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.9.5 3.9 1.4l2.6-2.6C17 3.1 14.6 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.5 0 9.7-3.9 9.7-9.7 0-.7-.1-1.4-.2-2.1z" stroke="#444" strokeWidth="1.5"/>
    </Svg>
  );
}

function InstagramIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Rect x="2" y="2" width="20" height="20" rx="5" stroke="#444" strokeWidth="1.8"/>
      <Path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" stroke="#444" strokeWidth="1.8"/>
      <Path d="M17.5 6.5h.01" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
    </Svg>
  );
}

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.inner}>
        {/* Logo */}
        <View style={styles.logoBox}>
          <PlusLogo />
        </View>

        {/* Heading */}
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subheading}>Let's experience the joy of telecare AI.</Text>

        {/* Email */}
        <Text style={styles.label}>Email Address</Text>
        <View style={[styles.inputWrapper, emailFocused && styles.inputFocused]}>
          <MailIcon />
          <TextInput
            style={styles.input}
            placeholder="Enter your email..."
            placeholderTextColor="#bbb"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <LockIcon />
          <TextInput
            style={styles.input}
            placeholder="Enter your password..."
            placeholderTextColor="#bbb"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <EyeIcon visible={showPassword} />
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInBtn} activeOpacity={0.85}>
          <Text style={styles.signInText}>Sign In  →</Text>
        </TouchableOpacity>

        {/* Social */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}><FacebookIcon /></TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}><GoogleIcon /></TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}><InstagramIcon /></TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity><Text style={styles.link}>Sign Up.</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginTop: 6 }}>
          <Text style={styles.link}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 36,
    alignItems: 'center',
  },
  logoBox: {
    width: 70, height: 70, borderRadius: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 22,
  },
  heading: {
    fontSize: 30, fontWeight: '800',
    color: '#111', marginBottom: 6, letterSpacing: -0.5,
  },
  subheading: {
    fontSize: 14, color: '#999',
    marginBottom: 32, textAlign: 'center',
  },
  label: {
    alignSelf: 'flex-start', fontSize: 13,
    fontWeight: '700', color: '#222', marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1.5, borderColor: '#e8e8e8',
    borderRadius: 14, paddingHorizontal: 16,
    paddingVertical: 14, width: '100%', marginBottom: 18,
    backgroundColor: '#f9f9f9', gap: 12,
  },
  inputFocused: {
    borderColor: '#4CAF50',
    backgroundColor: '#fff',
  },
  input: { flex: 1, fontSize: 14, color: '#222' },
  signInBtn: {
    backgroundColor: '#4CAF50', borderRadius: 16,
    paddingVertical: 17, width: '100%',
    alignItems: 'center', marginBottom: 28, marginTop: 2,
  },
  signInText: { color: '#fff', fontWeight: '700', fontSize: 16, letterSpacing: 0.2 },
  socialRow: {
    flexDirection: 'row', gap: 14, marginBottom: 30,
  },
  socialBtn: {
    width: 52, height: 52, borderRadius: 26,
    borderWidth: 1.5, borderColor: '#e8e8e8',
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#fff',
  },
  footer: { flexDirection: 'row', alignItems: 'center' },
  footerText: { fontSize: 13, color: '#999' },
  link: { fontSize: 13, color: '#4CAF50', textDecorationLine: 'underline' },
});