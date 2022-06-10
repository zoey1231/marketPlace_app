import { ImageBackground, StyleSheet,View ,Image, Text } from 'react-native';

import AppButton from '../components/AppButton/AppButton';
import colors
 from '../config/colors';
function WelcomeScreen(props) {
    const backgroundImage = require("../assets/background.jpg");
    const logoImage = require('../assets/logo-red.png');
    return (
        <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={backgroundImage}>
            <View style={styles.logoContainer}>
                <Image style= {styles.logo} source={logoImage}/>
                <Text style={styles.tagline}>Sell what you don't need anymore</Text>
            </View>
            <View style= {styles.buttonContainer}>
                <AppButton title='Login'></AppButton>
                <AppButton title='Register' color='secondary'></AppButton>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    buttonContainer: {
        width: "100%",
        padding: 20,
    },
    tagline: {
        fontSize: 20,
        fontWeight: "600",
        paddingVertical: 20,
    }
})
export default WelcomeScreen;