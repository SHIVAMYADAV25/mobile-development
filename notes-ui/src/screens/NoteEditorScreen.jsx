import React from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  useColorScheme} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const NoteEditorScreen = () => {
  const scheme = useColorScheme();

  const isDark = scheme === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: isDark ? '#0f0f0f' : '#fff',
        },
      ]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1517842645767-c639042777db',
          }}
          style={styles.headerImage}
        >
          <View style={styles.overlay}>
            <Pressable style={styles.backButton}>
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>

            <Pressable style={styles.saveButton}>
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
        </ImageBackground>

        <View style={styles.editorContainer}>
          <TextInput
            placeholder="Note title..."
            placeholderTextColor="#888"
            style={[
              styles.titleInput,
              {
                color: isDark ? '#fff' : '#111',
              },
            ]}
          />

          <TextInput
            multiline
            placeholder="Start writing..."
            placeholderTextColor="#888"
            textAlignVertical="top"
            style={[
              styles.contentInput,
              {
                color: isDark ? '#fff' : '#111',
              },
            ]}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NoteEditorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerImage: {
    height: 220,
    justifyContent: 'space-between',
  },

  overlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 40,
  },

  backButton: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
  },

  saveButton: {
    backgroundColor: '#4f46e5',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  editorContainer: {
    flex: 1,
    padding: 20,
  },

  titleInput: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },

  contentInput: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
  },
});