import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme';
import { BodyComponent } from '../../components/BodyComponent'
import { StackScreenProps } from '@react-navigation/stack'
import { ButtonImageComponent } from '../../components/ButtonImageComponent'
import { IconComponent } from '../../components/IconComponent';
import { RootStackParamList } from '../../navigator/ProductsStackNavigator';

interface Props extends StackScreenProps<RootStackParamList,'ProductsScreen'>{};

export const ProductsScreen = ({navigation}:Props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            style={{...styles.logo,width:145}}
            source={{
              uri: 'https://lh3.googleusercontent.com/pw/ABLVV870bru2K83d8IIYqV08u4P-1Xsa2qY-gwy0Qpd2J6FZStxFvHIk_qwLbDwASPUSjFa0acoBOFV5ZEBMUflRBtb42suLkEPVxXDNnjOnzHEKU9roQIvhWzXZUk7wKVBBxwSitR4ykVXvsSvZV6uhXXZ1HaKHM5_Id8YEyd-cHVyTun6ahooe8g7F6TC4BLR4SRKs_ji5_aJgwzT4PNCb3FwpybWcdQJMUCw1h3Md3Akfihb-fCzgA4Cbp33N0nz_sFrt7hQatr5ZvYfWmeY_U8k2iZTzix3uOCUo1mVIwpi0RG5irQHyrATXJ8dSRGGjmewSBiSsNS8Yqnl4phpYquta8FsHfUt-jeUoXgf11ZjO0V4Oy9g4J5X9ci_24lhhsVNLdo_Czqrb20U2RevdBrqalEBn4GpzG8_D_-V-KnrsW9tse7O66abvHmz5aPE8oOIT008aclHgaFNgPHbDRCaw6DRtu8zAk-u3LZZ18gPK3jvT76WXV4NTlD3-jBRWvGJjkzLZjut7NK9M6TWIqMb-wnA8eo_f2axtqjQ_cpcWdxvozmSWiDEg-1550N4gtpZ3B8NXecjLK65Eu9MyEC73b_-jLALnkzwowSXJ5Azmtgm8X2g5JlpH2tPimAy6FFBscMrN0ei5wIgWzbtwZUjquR-b8RNrXEi_LQB3ueeFQLkhxaqm6JBDkOhqppRkKxlzh62JkQ5A-9-hsgJJDCQ_1CbWmPyJtQz2IBQjCVCgXwKSbZEOMZeZw5_I8QMpW1LyXM-Cur4CA4grFmHqR--zXiEv5R9-vySYL9XswJaQl6ZSWG9obSUVpis9kV3-COVLumx1MrdpISye1eBTVyTLmW4J93Nqg5w4crrDGEhMafCe7hd3pcCuNHvaZgzsHslHaPLtJowHDFaT1W1ocOPCLA=w876-h363-s-no-gm?authuser=0',
            }}
          />
          <IconComponent pathImage='https://cdn.icon-icons.com/icons2/1632/PNG/96/63007shoppingcart_109353.png'/>
        </View>
        <BodyComponent>
        <Text style={{...styles.textStart,alignSelf:'center'}}>¡Disfruta de los mejores postres!</Text>
          <Image
            style={styles.imagen}
            source={{
              uri: 'https://cdn.recetasderechupete.com/wp-content/uploads/2021/03/Postres-para-impresionar.jpg',
            }}
          />
          <Text style={styles.textStart}>Categorías</Text>
          <View style={stylesI.containerImage}>
            <View style={stylesI.image}>
              <ButtonImageComponent
                title="Pasteles"
                pathImage='https://sacher.com.mx/media/magefan_blog/pastelin.jpg'
                onPress={() => navigation.navigate('CakeScreen')}
              />
            </View>
            <View style={stylesI.image}>
              <ButtonImageComponent
                title="Galletas"
                pathImage='https://cdn0.recetasgratis.net/es/posts/6/8/2/galletas_de_mantequilla_con_chocolate_55286_600.webp'
                onPress={() => navigation.navigate('CookieScreen')}
              />
            </View>
            <View style={stylesI.image}>
              <ButtonImageComponent
                title="Helados"
                pathImage='https://www.eis-perfecto.de/wp-content/uploads/2019/02/Oreo-Keks-Eis-848x477.jpg'
                onPress={() => navigation.navigate('ProductsScreen')}
              />
            </View>
            <View style={stylesI.image}>
              <ButtonImageComponent
                title="Promociones"
                pathImage='https://scontent.fltx1-1.fna.fbcdn.net/v/t1.6435-9/151216467_3934503526596040_5289146551186166554_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeE6P_xaMgNwvO2P0MmfZJTQRlI4JKjEVMRGUjgkqMRUxLbYCWC6iG6hZlotvmf7ey_uB02rmCdpQnEyM4Xp3wgV&_nc_ohc=clS5BWwxcUQAX9Zored&_nc_ht=scontent.fltx1-1.fna&oh=00_AfBpsz7OmIUGaT7qYDGNXa0EsJVtxakDPiGU_56A4-Lv9w&oe=65F99D98'
                onPress={() => navigation.navigate('ProductsScreen')}
              />
            </View>
          </View>
        </BodyComponent>
      </View>
    </ScrollView>
  )
}

const stylesI = StyleSheet.create({
  containerImage: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-around',
  },
  image:{
    marginBottom:30,
  }
});