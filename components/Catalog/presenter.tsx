import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
});

export default function Catalog({ items }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {items.map(({ name }, index) => (
                <View key={index}>
                    <Text>{name}</Text>
                </View>
            ))}
        </View>
    );
}