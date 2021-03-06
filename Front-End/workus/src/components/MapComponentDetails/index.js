// mesmo componente dado na tela de localização, mas com algumas alteracoes na altura
// Mapa utilizado na tela de detalhes

import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet } from 'react-native'

const MapComponentDetails = () => {
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
        height: 280
    }
})

export default MapComponentDetails