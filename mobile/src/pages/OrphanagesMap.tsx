import React from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../images/map-marker.png';

export default function OrphanagesMap() {
    const navigation = useNavigation();

    function handleNavigatoToOrphanageDetails() {
        navigation.navigate('OrphanageDetails');
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: -27.2892052,
                    longitude: -49.6401892,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
            >
                <Marker
                    icon={mapMarker}
                    calloutAnchor={{
                        x: 2.7,
                        y: 0.8
                    }}
                    coordinate={{
                        latitude: -27.2892052,
                        longitude: -49.6401892
                    }}
                >
                    <Callout tooltip onPress={handleNavigatoToOrphanageDetails}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText} >Orfanato das Meninas</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>2 orfanatos encontrados</Text>
                <Feather name="plus" size={20} color="#FFF" />
                <TouchableOpacity style={styles.createOrphanageButton}></TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
    calloutText: {
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
    },
    footer: {
      position: 'absolute',
      right: 24,
      left: 24,
      bottom: 32,
  
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3,
    }, 
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3',
    },
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center'
    }
  });