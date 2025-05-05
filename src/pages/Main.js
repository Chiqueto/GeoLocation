import React from "react";

import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useLocation from "../hooks/useLocation";

export default function Main() {
  const { coords, errorMsg } = useLocation();

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!coords) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3498DB" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.01,
      }}
      showsUserLocation={true}
    >
      <Marker
        coordinate={{
          latitude: coords.latitude,
          longitude: coords.longitude,
        }}
        title="Você está aqui"
        description="Localização atual"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});
