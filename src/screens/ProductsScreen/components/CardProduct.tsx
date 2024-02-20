import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Product } from '../CakeScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PRIMARY_COLOR, TEXT_COLOR } from '../../../commons/constantsColor'
import { ModalProduct } from './ModalProduct'
import { styles } from '../../../theme/appTheme'

interface Props{
    product: Product;
    handlerChangeStockProduct:(idProducto: number, quantity: number)=>void;
}

export const CardProduct = ({product, handlerChangeStockProduct}:Props) => {

    const [showModal, setShowModal] = useState(false);
    
  return (
    <View>
        <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
            <View style={styles.productContainer}>
                <Image
                    source={{
                        uri: product.pathImage
                    }}
                    style={styles.productImage}/>
                <View>
                    <Text style={styles.buttonText}>{product.name}</Text>
                    <Text style={{color:TEXT_COLOR}}>Precio: ${product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.productIcon}>
                    <Icon name={'shopping-cart-checkout'} size={30} color={'white'}/>
                </View>
            </View>
        </TouchableOpacity>
        <ModalProduct product={product} isVisible={showModal} changeVisible={()=>setShowModal(!showModal)} handlerChangeStockProduct={handlerChangeStockProduct}/>
    </View>
  )
}