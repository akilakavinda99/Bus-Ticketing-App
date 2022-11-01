/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Button, Checkbox, TextInput } from 'react-native-paper';


const ReloadAccount = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View
                style={{
                    alignItems: 'center',
                    marginTop: 10,
                }}>
                <Text>Amount (LKR)</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                }}>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                        }}>50</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            paddingBottom: 5,
                        }}>.00</Text>
                </View>
            </View>
            <View style={{
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
                elevation: 5,
            }}>
                <TextInput
                    mode="outlined"
                    activeOutlineColor="#9FA5AA"
                    label="Card Number"
                    outlineColor="#9FA5AA"
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 10,
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <TextInput
                        mode="outlined"
                        activeOutlineColor="#9FA5AA"
                        label="Expiry"
                        outlineColor="#9FA5AA"
                        style={{
                            backgroundColor: '#fff',
                            marginBottom: 10,
                            width: '45%',
                        }}
                    />
                    <TextInput
                        mode="outlined"
                        activeOutlineColor="#9FA5AA"
                        label="CVC"
                        outlineColor="#9FA5AA"
                        secureTextEntry={true}
                        right={<TextInput.Icon icon="eye-off" />}
                        // right={<TextInput.Icon name={() => {
                        //     return (
                        //         <View style={{
                        //             flexDirection: 'row',
                        //             alignItems: 'center',
                        //         }}>
                        //             <Icon name="eye-off" size={16} style={{ paddingRight: 5}} />
                        //             <Icon name="help-circle" size={16} />
                        //         </View>
                        //     );
                        // }} />
                        // }
                        style={{
                            backgroundColor: '#fff',
                            marginBottom: 10,
                            width: '40%',
                        }}
                    />
                    <Icon name="help-circle" size={25} style={{
                        alignSelf: 'center',
                    }}/>
                </View>
                <View style={{
                    marginTop: 10,
                    marginBottom: 10,
                    borderBottomColor: '#9FA5AA',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />

                <ImageBackground
                    imageStyle={{
                        borderRadius: 10,
                    }}
                    style={{
                        width: '100%',
                        height: 100,
                    }}
                    resizeMode="center"
                    source={{
                        uri: 'https://i.postimg.cc/GmNMvkN2/Frame-1.png',
                    }}
                />

                <Text style={{
                    alignSelf: 'center',
                    fontSize: 10,
                }}>Approved by the Central Bank of Sri Lanka</Text>
            </View>
            <View
                style={{
                    margin: 20,
                }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Checkbox />
                    <Text style={{
                        fontSize: 12,
                    }}>
                        Save my card details for faster payments.
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Checkbox />
                    <Text style={{
                        fontSize: 12,
                    }}>I agree to
                        <Text
                            style={{
                                color: '#0096FF',
                            }}> Terms and Conditions</Text>
                    </Text>
                </View>
                <Button
                    style={{
                        marginTop: 20,
                        borderRadius: 50,
                    }}
                    uppercase={true}
                    mode="contained"
                    color="#0096FF">
                    Continue
                </Button>
            </View>
        </View>
    );
};

export default ReloadAccount;
