import React from 'react'
import { Pressable, Text, View,StyleSheet } from 'react-native'

export const  NoteCard = ({note,colors,width}) => {
    return (
      <View>
        <Pressable
        style={[style.card,{
            backgroundColor : colors.card,
            width
        }]}
        />

        <Text
        style={[style.title,{
            color : colors.text
        }]}
        >{note.title}</Text>

        <Text style={[style.title,{color : colors.text}]}>{note.title}</Text>

        <Text
        numberOfLines={3}
        style={[style.title,{
            color : colors.subText
        }]}
        >{note.content}</Text>

        <Text
        style={[style.footer,{
            color : colors.subText
        }]}
        >{note.date}</Text>
      </View>
    )
}

export default NoteCard;


const style = StyleSheet.create({
    card:{
        borderRadius : 24,
        padding: 18,
        marginBottom :16,
    },
    title : {
        fontSize : 20,
        fontWeight:"700"
    },
    content : {
        marginTop : 10,
        fontSize : 15,
        lineHeight : 22
    },
    footer : {
        marginTop:16
    },
    date : {
        fontSize : 13
    }
})
