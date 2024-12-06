import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    labelJA: string;
    themeJA?: 'primary';
    onPressJA?: () => void;
};

export default function Button({ labelJA, themeJA, onPressJA }: Props) {
    if (themeJA === 'primary') {
        return (
            <View
                style={[
                    styles.buttonContainer,
                    { borderWidth: 4, borderColor: '#24150D', borderRadius: 18 },
                ]}>
                <Pressable style={[styles.button, { backgroundColor: '#E3DCD9' }]} onPress={onPressJA}>
                    <FontAwesome name="picture-o" size={18} color="#24150D" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#24150D' }]}>{labelJA}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPressJA}>
                <Text style={[styles.buttonLabel, { color: '#24150D'}]}>{labelJA}</Text>
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
