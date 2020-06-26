import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, ListItem, Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginLeft: 15,
        marginRight: 15,
    },
    titleContainer: {
        marginBottom: 20,
    },
    cartContentsLabel: {
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
    }
});

export default function ShoppingCart({ itemsInCart, clear }: { itemsInCart: CartItem, clear: Function }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text h2>Shopping Cart</Text>
            </View>
            <View>
                <Text style={styles.cartContentsLabel}>
                    Items in you cart:
                </Text>
                {itemsInCart.length > 0
                    ? (
                        <Card containerStyle={{padding: 0, margin: 0}}>
                            {
                                itemsInCart.map((item, key) => (
                                    <ListItem key={key} title={item} />
                                ))
                            }
                        </Card>
                    )
                    : <Text>Empty</Text>
                }
            </View>
            <View>
                <Button style={styles.button} title="Clear cart" type="outline" onPress={clear} />
                <Button style={styles.button} title="Order and Pay" onPress={clear} />
            </View>
        </View>
    );
}