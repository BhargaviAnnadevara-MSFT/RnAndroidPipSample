import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Dim from './Dim';

const CreateCard = () => {
    const description = 'Sample card description\n';

    return (
        <Card style={Styles.container}>
            <Card.Content style={Styles.content}>
                <Title>Sample Card</Title>
            </Card.Content>
            <Card.Cover 
                source={{ uri: 'https://picsum.photos/800' }}>
            </Card.Cover>
            <Card.Content style={Styles.content}>
		        <Paragraph>{description}</Paragraph>
                <Dim></Dim>
		    </Card.Content>
	    </Card>
    )
}
export default CreateCard;

const Styles = StyleSheet.create({
    container: {
        elevation: 2,
        width: '100%',
        height: '50%',
        backgroundColor: 'lightblue',
        flexDirection: 'column',
        borderRadius: 7
    },
    content: {
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 5
    }
})
