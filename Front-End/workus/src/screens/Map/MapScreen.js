import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Header } from '../../components/Header'
import MapComponent from '../../components/MapComponent'

const MapScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Header title="Localização" />
            <MapComponent />
        </SafeAreaView>
    )
}

export default MapScreen