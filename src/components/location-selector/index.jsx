import * as Location from "expo-location";

import { Alert, Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import MapPreview from "../map-preview";
import colors from "../../utils/colors";
import { styles } from "./styles";

const LocationSelector = ({ onLocation }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pickedLocation, setPickedLocation] = useState(null);

  const { mapLocation } = route.params || {};

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Necesitamos permisos para usar la localización", [{ text: "Entendido" }]);
      return false;
    }
    return true;
  };

  const onHandlerLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const onHandlerPickMap = () => {
    const hasPermission = verifyPermissions();
    if (!hasPermission) return;
    navigation.navigate("Maps");
  };

  

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    }
  }, [mapLocation]);



  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>No has seleccionado una ubicación.</Text>
      </MapPreview>
      <View style={styles.containerActions}>
        <Button title="Obtener ubicación" onPress={onHandlerLocation} color={colors.primary} />
        <Button
          title="Elegir desde el mapa"
          onPress={onHandlerPickMap}
          color={colors.secondary}
        />
      </View>
    </View>
  );
};

export default LocationSelector;
