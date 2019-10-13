import React, { useState } from 'react'

import { View, Text, StyleSheet } from 'react-native'

export const Task = ({ task, setDone, remove }) => {
    let { name, done } = task

    return (
        <View style={style.box}>
            <View style={style.title}>
                <View onTouchEnd={e => setDone(!done)} style={[style.check, done && style.done]}></View>
                <Text style={style.text}>{name}</Text>
            </View>
            <View onTouchEnd={e => remove(task)} style={style.removeButton}>
                <Text style={{color: '#eee'}}>Delete</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
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
        alignItems: 'center',
        justifyContent: 'space-between',
        // shadowOffset: '1px 1px 1px 1px',
        // shadowColor: '#333',
        // shadowOpacity: '0.5',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#ddd',
        fontSize: 24,
        marginLeft: 18,
    },
    check: {
        backgroundColor: '#e33',
        width: 20,
        height: 20,
        borderRadius: 30,
    },
    done: {
        backgroundColor: '#3e3',
    },
    removeButton: {
        backgroundColor: '#e33',
        padding: 8,
        borderRadius: 4,
    }
})
