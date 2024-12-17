import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    labelIS: string;
    themeIS?: 'primary';
    onPressIS?: () => void;
};

export default function Button({ labelIS, themeIS, onPressIS }: Props) {
    if (themeIS === 'primary') {
        return (
            <View
                style={[
                    styles.buttonContainer,
                    { borderWidth: 4, borderColor: '#24150D', borderRadius: 18 },
                ]}>
                <Pressable style={[styles.button, { backgroundColor: '#E3DCD9' }]} onPress={onPressIS}>
                    <FontAwesome name="picture-o" size={18} color="#24150D" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#24150D' }]}>{labelIS}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPressIS}>
                <Text style={[styles.buttonLabel, { color: '#24150D'}]}>{labelIS}</Text>
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
