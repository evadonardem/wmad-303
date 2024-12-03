import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    labelCT: string;
    themeCT?: 'primary';
    onPressCT?: () => void;
};

export default function Button({ labelCT, themeCT, onPressCT }: Props) {
    if (themeCT === 'primary') {
        return (
            <View
                style={[
                    styles.buttonContainer,
                    { borderWidth: 4, borderColor: 'grey', borderRadius: 18 },
                ]}>
                <Pressable style={[styles.button, { backgroundColor: 'grey' }]} onPress={onPressCT}>
                    <FontAwesome name="picture-o" size={18} color="#000" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#000' }]}>{labelCT}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPressCT}>
                <Text style={[styles.buttonLabel, { color: '#000'}]}>{labelCT}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 250,
        height: 40,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});
