import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, PricingCard } from 'react-native-elements';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 60,
        marginLeft: 15,
        marginBottom: 20,
    },
    cardContainer: {
        marginTop: -20,
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: '300',
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: '300',
    }
});

export default function Catalog({ items, itemsInCart, addToCart }: { items: CatalogItem[], itemsInCart: string[], addToCart: Function }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.titleContainer}>
                <Text h2>Catalog</Text>
            </View>
            {items.map(({ name, price }, index) => (
                <View key={index} style={styles.cardContainer}>
                    <PricingCard
                        title={name}
                        titleStyle={styles.itemTitle}
                        price={`$${price}`}
                        pricingStyle={styles.itemPrice}
                        info={[]}
                        button={{
                            ...(itemsInCart.includes(name)
                                ? {
                                    title: 'In cart',
                                    disabled: true,
                                }
                                : {
                                    title: 'Add to cart',
                                }),
                            icon: ''
                        }}
                        onButtonPress={() => addToCart(name)}
                    />
                </View>
            ))}
        </View>
    );
}