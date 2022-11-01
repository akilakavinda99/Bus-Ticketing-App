import { StyleSheet } from 'react-native';

const userProfileStyles = StyleSheet.create({
    profileOptionCard: {
        marginTop: 20,
    },
    cardView: {
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        marginTop: 30,
        width: '90%',
        alignItems: 'center',
    },
    optionCard: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    optionCardText: {
        flexGrow: 1,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '500',
    },
    optionCardIcon: {
        padding: 10,
        backgroundColor: 'lightpink',
        borderRadius: 10,
    },
});

export default userProfileStyles;
