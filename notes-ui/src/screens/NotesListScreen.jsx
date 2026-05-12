import React, { useMemo, useState } from 'react';

import {
  Text,
  StyleSheet,
  View,
  useColorScheme,
  useWindowDimensions,
  TextInput,
  FlatList,
  Switch,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { darkColors, lightColors } from '../constants/colors';
import { notes } from '../data/notes';
import NoteCard from '../components/NoteCard';

const NotesListScreen = () => {
  const systemTheme = useColorScheme();

const [isDark, setIsDark] = useState(
  systemTheme === 'dark'
);

  const color = isDark
    ? darkColors
    : lightColors;

  const { width } = useWindowDimensions();

  const [search, setSearch] =
    useState('');

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const cardWidth =
    width > 700 ? '48%' : '100%';

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            color.background,
        },
      ]}
    >
      <View style={styles.header}>
        <Text
          style={[
            styles.heading,
            {
              color: color.text,
            },
          ]}
        >
          My Notes
        </Text>

        <Switch value={isDark} onValueChange={() =>
    setIsDark((prev) => !prev)
  }
  trackColor={{
    false: '#767577',
    true: '#6366f1',
  }}
  thumbColor={
    isDark ? '#fff' : '#f4f3f4'
  } />
      </View>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search notes..."
        placeholderTextColor={
          color.subText
        }
        style={[
          styles.searchInput,
          {
            backgroundColor:
              color.input,
            color: color.text,
            borderColor:
              color.border,
          },
        ]}
      />

      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={
          styles.list
        }
        renderItem={({ item }) => (
          <NoteCard
            note={item}
            colors={color}
            width={cardWidth}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default NotesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  heading: {
    fontSize: 34,
    fontWeight: '800',
  },

  searchInput: {
    marginTop: 22,
    borderWidth: 1,
    borderRadius: 18,
    padding: 14,
    fontSize: 16,
  },

  list: {
    paddingTop: 20,
  },
});