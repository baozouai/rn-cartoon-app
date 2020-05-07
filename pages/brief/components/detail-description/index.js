import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
 } from 'react-native';
function Index(props) {
    const {
        brief
    } = props;
    return (
        <View style={styles.wrapper}>
            <Text style={styles.brief}>{brief}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 50,
        paddingTop: 20,
    },
    brief: {
        color: '#333'
    }
})
export default Index;