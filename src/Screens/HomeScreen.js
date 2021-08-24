import React, {useLayoutEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const HomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 25}}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Image source={require('../Assets/Images/Menu.png')} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../Assets/Images/main_map.png')}
        style={{width: screenWidth, height: screenHeight}}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: screenWidth / 4,
          top: '20%',
          borderRadius: 8,
          backgroundColor: '#295eba',
        }}
        onPress={() => {
          navigation.navigate('경기도');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 5,
          }}>
          경기도
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: screenWidth / 3.6,
          top: '15%',
          borderRadius: 8,
          backgroundColor: '#295eba',
        }}
        onPress={() => {
          navigation.navigate('강원도');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 5,
          }}>
          강원도
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: screenWidth / 3.5,
          top: '40%',
          borderRadius: 8,
          backgroundColor: '#295eba',
        }}
        onPress={() => {
          navigation.navigate('충청도');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 5,
          }}>
          충청도
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: screenWidth / 5,
          bottom: '50%',
          borderRadius: 8,
          backgroundColor: '#295eba',
        }}
        onPress={() => {
          navigation.navigate('경상도');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 5,
          }}>
          경상도
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: screenWidth / 4,
          bottom: '40%',
          borderRadius: 8,
          backgroundColor: '#295eba',
        }}
        onPress={() => {
          navigation.navigate('전라도');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 5,
          }}>
          전라도
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
