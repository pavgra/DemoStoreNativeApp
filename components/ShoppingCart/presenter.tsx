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

function CartDetails({ itemsInCart, clear, startPayment }: { itemsInCart: string[], clear: Function, startPayment: Function }) {
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
                                    <ListItem key={key}>
                                        <Text>{item}</Text>
                                    </ListItem>
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
            marginTop: 20,
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
        marginTop: 5,
        height: 510,
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
                <WebView source={{ uri: 'https://staging.pushpayments.db.com/pay/eyJwYXlsb2FkIjp7InYiOjEsImlwaSI6IjYwNjk5RjhCNjVDQkU1MzQyMURCNTg4RTc1RDE0Nzc4IiwiZWR0IjoiMjAyMS0wOS0yNlQxNDo0NDo1OS41MzFaIiwidGFzIjoic3RnIiwiY2kiOiJQUEUifSwic2lnbmF0dXJlIjoiVEY4Y2w0UmdjQk9VTHlrMHEwUFgrWlkrTUpjNWVOaHhHVk1GbWdkeGxKNllUbUdwQUxZUjFhMy9DbzE3b1hTVUphRU9zZ2FQajdVY2NtZUxWWVhMNXFNd1dPKytkalB6TE5EVmcxS2pCOHZTcGwyUTVVMjdLZHFCYllsbnpJMU5WTHEvc2IxZHN3cURJaDRpYUFjbS9zcEVBdGZ2SDR0TGF6ZzNHMDZTUlRWOFZDQm02YU9KTDdiWkhybUcycGc1V0RSamdOeXc4cjRZMVppRG01S3o5clBSYmN5OVZXZFJzci9hNjhoSHVtQ01EL2VNeEEzZ24xOWZZcndNUE1QaXBNN1ovdHQzQldoUzlkbUZXTVVrOU9OUS91MXJtdUJZZGgzdUVjSGZDekk4dHFuQThRWHFtUDNzZ3k1VjBsSTAvZXU1dk1zdmZNcytsaU1XVjRqdGJ3PT0iLCJzaWduYXR1cmVQdWJLZXlJZCI6IjMifQ==/' }} />
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