// eh o mapa dado na tela de localizacao

import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

// dimensao disponivel na tela 
const height = Dimensions.get('window').height

// apresenta como principal caracteristica demonstrar a localizacao do usuario
const MapComponent = () => {
    return (
        <MapView
            style={styles.map}
            loadingEnabled
            region={{
                latitude: -21.7312452,
                longitude: -46.3584189,
                latitudeDelta: 7.4143,
                longitudeDelta: 8.4134
            }}
            showsUserLocation
        >
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default MapComponent