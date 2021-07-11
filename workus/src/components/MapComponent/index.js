import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const MapComponent = () => {
    return (
        <MapView
            style={styles.map}
            loadingEnabled={true}
            region={{
                latitude: -27.210900,
                longitude: -49.644500,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }}
            showsUserLocation
        >
            <MapView.Marker
                coordinate={{
                    latitude: -27.210900,
                    longitude: -49.644500,
                }}
                title={"Title 1"}
                description={"Description 1"}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default MapComponent