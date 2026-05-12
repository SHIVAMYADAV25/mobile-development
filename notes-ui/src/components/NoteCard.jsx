import React from 'react';

import {
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';

import {
  TYPOGRAPHY,
  SPACING,
  RADIUS,
} from '../constants/theme';

export default function NoteCard({
  note,
  colors,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor:
            colors.card,
          opacity: pressed
            ? 0.8
            : 1,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color:
              colors.textPrimary,
          },
        ]}
      >
        {note.title}
      </Text>

      <Text
        numberOfLines={3}
        style={[
          styles.content,
          {
            color:
              colors.textSecondary,
          },
        ]}
      >
        {note.content}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: SPACING.base,
    borderRadius: RADIUS.xl,
    marginBottom: SPACING.base,
  },

  title: {
    ...TYPOGRAPHY.h1,
  },

  content: {
    ...TYPOGRAPHY.body,
    marginTop: SPACING.sm,
  },
});