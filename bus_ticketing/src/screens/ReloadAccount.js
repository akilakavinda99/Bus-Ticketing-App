/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import reloadAccountStyle from './styles/ReloadAccountStyles';

const ReloadAccount = () => {
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
            <View style={reloadAccountStyle.cardView}>
                <TextInput
                    mode="outlined"
                    activeOutlineColor="#9FA5AA"
                    label="Card Number"
                    outlineColor="#9FA5AA"
                    style={reloadAccountStyle.textInput}
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
                        style={[
                            reloadAccountStyle.textInput,
                            { width: '45%' },
                        ]}
                    />
                    <TextInput
                        mode="outlined"
                        activeOutlineColor="#9FA5AA"
                        label="CVC"
                        outlineColor="#9FA5AA"
                        secureTextEntry={true}
                        right={<TextInput.Icon icon="eye-off" />}
                        style={[
                            reloadAccountStyle.textInput,
                            { width: '40%' },
                        ]}
                    />
                    <Icon name="help-circle" size={25} style={{
                        alignSelf: 'center',
                    }} />
                </View>
                <View style={reloadAccountStyle.hr} />

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
