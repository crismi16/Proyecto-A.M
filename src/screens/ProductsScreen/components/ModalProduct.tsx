import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Product } from '../CakeScreen';
import { BUTTON_COLOR, ERROR_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR } from '../../../commons/constantsColor';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { styles } from '../../../theme/appTheme';

interface Props{
    product: Product;
    isVisible: boolean;
    changeVisible:()=>void;
    handlerChangeStockProduct:(idProducto: number, quantity: number)=>void;
}

export const ModalProduct = ({product, isVisible, changeVisible, handlerChangeStockProduct}:Props) => {
    
    const {width}=useWindowDimensions();
    
    const [quantity, setQuantity] = useState(1);
    
    const handlerChangeQuantity=(value: number)=>{
        setQuantity(quantity+value)
    }

    const handlerAddProducto=()=>{
        handlerChangeStockProduct(product.id, quantity);
        setQuantity(1)
        //cerrar el modal
        changeVisible()
    }

  return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={{height:'100%',justifyContent:'center',}}>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Text style={styles.textStart}>{product.name}  -  ${product.price.toFixed(2)}</Text>      
                    <Icon name={'cancel'} size={30} color={ERROR_COLOR} onPress={changeVisible}/>
                </View> 
                <Image source={{uri: product.pathImage}} style={{width:200, height:200,alignSelf:'center'}}/>
                {
                    (product.stock == 0)
                    ?<Text style={{...styles.textStart,color:ERROR_COLOR}}>Producto agotado!</Text>
                    :
                    <View>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.buttonQuantity}
                                onPress={()=>handlerChangeQuantity(-1)}
                                disabled={quantity == 1}>
                                <Text style={styles.textStart}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.textStart}>{quantity}</Text>
                            <TouchableOpacity style={styles.buttonQuantity}
                                onPress={()=>handlerChangeQuantity(1)}
                                disabled={quantity == product.stock}>
                                <Text style={styles.textStart}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{...styles.textStart,marginBottom:20}}>Total: ${(product.price*quantity).toFixed(2)}</Text>
                        <TouchableOpacity style={{...styles.buttonContainer,backgroundColor:BUTTON_COLOR}}
                            onPress={handlerAddProducto}>
                            <Text style={styles.buttonText}>Agregar al Carrito</Text>
                        </TouchableOpacity>
                    </View>
                }
                
            </View>
        </View>
    </Modal>
  )
}