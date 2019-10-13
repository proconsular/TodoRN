import React, { useState } from 'react'

import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'

export const Form = ({ submit }) => {
    const [name, setName] = useState('')

    const commit = () => {
        if (name.length > 0) {
            submit(name)
            setName('')
        }
    }

    return (
        <View style={styles.box}>
            <TextInput
                onChangeText={text => setName(text)}
                onSubmitEditing={() => commit()}
                placeholder='Create a Todo...'
                placeholderTextColor='#ddd'
                color='#ddd'
                value={name}
                style={styles.text}
            />
            <TouchableOpacity 
                style={styles.add}
                onPress={() => commit()}
            >
                <Text
                    style={{color: '#ddd'}}
                >Create</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        borderColor: '#999',
        borderWidth: 2,
        borderStyle: 'solid',
        padding: 8,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 3,
        marginBottom: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    text: {
        color: '#ddd',
        fontSize: 24,
        // backgroundColor: '#aaa',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        width: '75%',
    },
    add: {
        backgroundColor: '#333',
        color: '#eee',
        padding: 8,
        borderRadius: 4
        
    }
})