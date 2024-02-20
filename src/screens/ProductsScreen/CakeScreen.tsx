import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BodyComponent } from '../../components/BodyComponent';
import { FlatList } from 'react-native-gesture-handler';
import { CardProduct } from './components/CardProduct';
import { ModalCar } from './components/ModalCar';
import { styles } from '../../theme/appTheme';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

const products:Product[]=[
    {id:1, name:'Tres leches', price: 0.90, stock:10, pathImage:'https://sacher.com.mx/media/magefan_blog/pastelin.jpg'},
    {id:2, name:'Pastel de chocolate', price: 1.10, stock:0, pathImage:'https://sacher.com.mx/media/magefan_blog/pastelin.jpg'},
    {id:3, name:'Pastel de zanahoria', price: 2.50, stock:3, pathImage:'https://sacher.com.mx/media/magefan_blog/pastelin.jpg'},
    {id:4, name:'Pastel de vainilla', price: 1.00, stock:4, pathImage:'https://sacher.com.mx/media/magefan_blog/pastelin.jpg'},
    {id:5, name:'Cupcake de chocolate', price: 0.65, stock:15, pathImage:'https://sacher.com.mx/media/magefan_blog/pastelin.jpg'},
    {id:6, name:'Cupcake de vainilla', price: 0.65, stock:15, pathImage:'https://sacher.com.mx/media/magefan_blog/pastelin.jpg'},
]

export interface Car{
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export const CakeScreen = () => {

  const [productsState, setProductsState] = useState(products);
  
  const [cars, setCars] = useState<Car[]>([]);
  
  const [showModal, setShowModal] = useState(false);

  const handlerChangeStockProduct=(idProducto: number, quantity: number)=>{
    const updateStock=productsState.map(item=>item.id == idProducto
      ? {...item,
        stock:item.stock-quantity}
      : item);
    setProductsState(updateStock)
    addProduct(idProducto, quantity)
  }

  const addProduct=(idProduct: number, quantity: number)=>{
    const product=productsState.find((item)=>item.id == idProduct);

    if(!product){
      return;
    }

    const newCar: Car={
      id:product.id,
      name:product.name,
      price:product.price,
      quantity: quantity
    }

    setCars(prevCars=>[...prevCars, newCar])
    //console.log(cars);
  }

  return (
    <View style={styles.container}>
      <View style={styles.productHeader}>
        <Text style={styles.buttonText}>Productos</Text>
        <View>
          <Text style={styles.textIconCar}>{cars.length}</Text>
          <Icon disabled={cars.length == 0} name={'shopping-cart'} size={27} color={'#fff'} onPress={()=>setShowModal(!showModal)}/>
        </View>
      </View>
        <BodyComponent>
            <FlatList
                data={productsState}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=><CardProduct product={item} handlerChangeStockProduct={handlerChangeStockProduct}/>}
                />
        </BodyComponent>
        <ModalCar  cars={cars} isVisible={showModal} changeVisible={()=>setShowModal(!showModal)}/>
    </View>
  )
};
