import { StyleSheet, Text, View, Image, SafeAreaView, Alert, Button, Platform, StatusBar, ImageBackground } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton/AppButton';
import colors from './app/config/colors';
import Card from './app/components/Card/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  const {landscape} = useDeviceOrientation();
  const handlePress = ()=> console.log("Text clicked.");
  return (
    // <SafeAreaView style={[styles.container]}>
    //   <View style={{
    //     backgroundColor: 'dodgerblue',
    //     width: '100%',
    //     height: landscape?"100%":"30%"
    //   }}>

    //   </View>
    //   <Text numberOfLines={1} onPress={handlePress}>Hello World</Text>
    //   <Button 
    //   color="orange"
    //   title="Click Me" 
    //   onPress={() => Alert.prompt("My Title","My message",text => console.log(text) ) }></Button>
      
 
    // </SafeAreaView>

    // <View style={{
    //   backgroundColor: "#fff",
    //   flex: 1,
    //   flexDirection: 'row',//horizontal
    //   justifyContent: "center",// align along the MAIN axis
    //   alignItems: "center", // align along the secondary axis
    //   alignContent: "center",
    //   // flexWrap: "wrap",
    // }}>
    //   <View style={{
    //     backgroundColor: "dodgerblue",
    //     // flexBasis: 100, //equavalent to width(when main axis is horizontal) or height(vertical)
    //     // flex: 1,
    //     flexShrink: 1, //equivalent to flex:-1
    //     width: 100,
    //     height: 100,
    //   }}/>
    //   <View style={{
    //     backgroundColor: "gold",
    //     width: 100,
    //     height: 100,
    //     top: 20,
    //     left: 20,
    //     position: "absolute",
    //   }}/>
    //   <View style={{
    //     backgroundColor: "tomato",
    //     width: 100,
    //     height: 100,
    //   }}/>
      
    // </View>

    // <View
    // style = {{
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}>
    //   <View style={{
    //     backgroundColor: 'dodgerblue',
    //     width: 100,
    //     height: 100,
    //     padding: 20,
    //     paddingHorizontal: 10,
    //     paddingLeft: 30,
        
    //   }}>
    //     <View style={{
    //       backgroundColor: 'gold',
    //       width: 50,
    //       height: 50,
    //     }}></View>
      
    //   </View>
    //   <View style={{
    //       backgroundColor: 'tomato',
    //       width: 100,
    //       height: 100,
    //       margin: 20,
    //     }}></View>
    //     <AppText>I love React Native!</AppText>
    //     <MaterialCommunityIcons name='email' size={60} color='dodgerblue'/>
        // <AppButton title='Login' onPress={() => console.log("Tapped")}></AppButton>
    // </View>
    // <View style={{
    //   backgroundColor:'#f8f4f4',
    //   padding: 20,
    //   paddingTop: 100,
    // }}>
    //   <Card 
    //   title='Red jacket for sale'
    //   subTitle='$100'
    //   imgSrc={require('./app/assets/jacket.jpg')}/>
    // </View>
    // <ViewImageScreen/>
    // <WelcomeScreen></WelcomeScreen>
    <ViewImageScreen></ViewImageScreen>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight:0
  },
  background: {
    flex: 1,
    flexDirection:'column',
    
  },
  topContainer: {
    top: "10%",
    backgroundColor: 'tomato',
    height: "20%",

 
    
  },
  logo: {
    alignSelf:"center",
    // backgroundColor:"black",
    flex: 1,
   
  },
  text: {
    alignSelf:"center",
    flex: 1,
  },
  bottomContainer: {
    height: "15%",
    backgroundColor: '#fff',
    top: "65%",
  
  },
  login: {
    flex:1,
    backgroundColor: '#fc5c65',
  },
  register: {
    flex:1,
    backgroundColor: '#4ECDC4',
  },
});
