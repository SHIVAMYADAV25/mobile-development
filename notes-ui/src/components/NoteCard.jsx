import React from 'react'
import { Pressable, Text,StyleSheet } from 'react-native'

export const  NoteCard = ({note,colors,width}) => {
    return (
        <Pressable
        style={[style.card,{
            backgroundColor : colors.card,
            width
        }]}
        >

        <Text style={[style.title,{color : colors.text}]}>{note.title}</Text>

        <Text
        numberOfLines={3}
        style={[style.title,{
            color : colors.subText,
            marginTop:10,
            fontSize : 14
        }]}
        >{note.content}</Text>

        <Text
        style={[style.footer,{
            color : colors.subText
        }]}
        >{note.date}</Text>
      </Pressable>
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
        fontSize : 18,
        fontWeight:"700"
    },
    content : {
        marginTop : 10,
        fontSize : 15,
        lineHeight : 22
    },
    footer : {
        marginTop:12
    },
    date : {
        fontSize : 13
    }
})
