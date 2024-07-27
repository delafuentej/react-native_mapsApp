/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Pressable, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    iconName: string;
    onPress: ()=> void;
    style?: StyleProp<ViewStyle>;
}

export const CustomFaButton = ({iconName, style, onPress}: Props) => {
   return( <View style={[styles.btn, style]}>
        <Pressable
            style={styles.btnCircle}
            onPress={onPress}
        >
            <Icon name={iconName} size={40} color='rgba(255,255,255,0.7)' />
        </Pressable>
    </View>)
};

const styles = StyleSheet.create({
    btn: {
      zIndex: 1,
      position: 'absolute',
      height: 60,
      width: 60,
      borderRadius: 30,
      backgroundColor: 'rgba(0,0,0,0.7)',
      justifyContent:'center',
      alignItems: 'center',
      shadowOpacity: 0.3,
      shadowOffset: {
        height: 0.5,
        width: 4.5,
      },
       elevation: 5,
    },
    btnCircle:{
       
        justifyContent:'center',
        alignItems: 'center',
    }
  });