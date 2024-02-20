import React from 'react'
import { Modal, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Car } from '../CakeScreen';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ERROR_COLOR, TEXT_COLOR } from '../../../commons/constantsColor';
import { styles } from '../../../theme/appTheme';


interface Props{
    cars: Car[];
    isVisible: boolean;
    changeVisible:()=>void;
}

export const ModalCar = ({cars, isVisible, changeVisible}:Props) => {
    const {width}=useWindowDimensions();

    const totalPay=()=>{
        let total=0
        cars.forEach(item=>{
            total+=(item.price*item.quantity)
        })
        return total;
    }

    return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={{height:'100%',justifyContent:'center',}}>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Text style={styles.textStart}>Mis Productos</Text>      
                    <View>     
                        <Icon name={'cancel'} size={30} color={ERROR_COLOR} onPress={changeVisible}/>
                    </View>
                </View>
                <View style={styles.infoTable}>
                    <Text style={styles.textHeaderTable}>Producto</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.descriptionText}>Pre.</Text>
                        <Text style={styles.descriptionText}>Cant.</Text>
                        <Text style={styles.descriptionText}>Total</Text>
                    </View>
                </View>
                <FlatList
                    data={cars}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={({item})=>
                    <View style={styles.infoTable}>
                        <Text style={{color:TEXT_COLOR}}>{item.name}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.textValue}>${item.price.toFixed(2)}</Text>
                            <Text style={{paddingHorizontal:10,
                                    ...styles.textValue}}>{item.quantity}</Text>
                            <Text style={styles.textValue}>${(item.price*item.quantity).toFixed(2)}</Text>
                        </View>
                    </View>}/>
                <View style={styles.textTotalPay}>
                    <Text style={styles.textHeaderTable}>Total pagar: ${totalPay().toFixed(2)}</Text>
                </View>
            </View>
        </View>
    </Modal>
  )
}