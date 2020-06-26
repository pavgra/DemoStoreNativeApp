import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, ListItem, Button } from 'react-native-elements';
import { WebView } from 'react-native-webview';

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

function CartDetails({ itemsInCart, clear, startPayment }: { itemsInCart: CartItem, clear: Function, startPayment: Function }) {
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
                <Button style={styles.button} title="Order and Pay" onPress={() => startPayment()} />
            </View>
        </View>
    )
}

function Pay({ cancelPayment }: { cancelPayment: Function }) {
    const styles = StyleSheet.create({
        container: {
            marginTop: 60,
            marginLeft: 15,
            marginRight: 15,
        },
        titleContainer: {
            marginBottom: 20,
        },
        backToCartBtn: {
        marginTop: 10,
        },
        webview: {
        marginTop: 10,
        height: 600,
        }
    });

    return (
        <>
            <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text h2>Payment</Text>
                <Button title="Go back to Cart" style={styles.backToCartBtn} onPress={cancelPayment} />
            </View>
            </View>
            <View style={styles.webview}>
                <WebView source={{ uri: 'https://staging.pushpayments.db.com/flow/eyJwYXlsb2FkIjp7ImlwaSI6IjRFODMzMTY1QjBDNUQxMTY2NTdEQkM1REU0MjIzNDgwIiwiZWR0IjoiMjU5MC0xMS0xOFQxOTo1OTozMy41OTdaIiwidGFzIjoic3RnIn0sInNpZ25hdHVyZSI6IkxYOEJTbkc4WFZLZDNXS3hFRkJMSFdvOHFMcUp1Z3EwTFlYNGNVMnNpT28xUXh3Zk16TzZUM3VnVmVtNWtVd3IvWENzWlRoYXpiNzdzMzE4REdDdWNyb0p5dC90Wit6b2w2QUZBVVFvUmJuTVIxblArTEFBd2VSV0pERS8yVDhoRENPa0I2OUdtM0lVNE9xalY3ZDhGNEttdnBXQWNTRGVVUEV3K0tVenp5TUhsTXlxQXN6Y0tJd0ZkUm51V3ZLTGtsRG9SRG9NTUJ3V2xIU29YNllpcEovN0l1ZTQzNU80WFY2M2hrUlVjV2VoRDd2UXlWNkhnZjhCZ3luQUNtQWpyb0VYNWhZRitZczNrZUR5T2FlWmpzd2lERWVPNnFQWTNFYTJlZU1TaDJValhZc0d6V2MwVDJXSTR1cWhqaVRKYnR6dmxQenVCVVNUR2hGTmhvMzh0Zz09Iiwic2lnbmF0dXJlUHViS2V5SWQiOiIyIn0=' }} />
            </View>
        </>
    )
}

interface Props {
    itemsInCart: CartItem,
    clear: Function,
    isPaymentInProgress: boolean,
    startPayment: Function,
    cancelPayment: Function
}

export default function ShoppingCart({ itemsInCart, clear, isPaymentInProgress, startPayment, cancelPayment }: Props) {
    return (
        <>
            {isPaymentInProgress
                ? <Pay cancelPayment={cancelPayment} />
                : <CartDetails itemsInCart={itemsInCart} clear={clear} startPayment={startPayment} />
            }
        </>
    );
}