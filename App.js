import * as React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function App() {
  //const [pin, setPin] = React.useState;
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyCTSeZG-iexTJwYwkpEQBhN0RMd6ngBWB8",
          language: "en",
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 19.7822,
          longitude: 72.7876,
        }}
        provider="google"
      >
        <Marker coordinate={{ latitude: 19.7822, longitude: 72.7876 }}>
          <Callout>
            <Text>College is here</Text>
          </Callout>
        </Marker>
        <Circle
          center={{ latitude: 19.7822, longitude: 72.7876 }}
          radius={2000}
        ></Circle>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  Text: {
    width: 70,
  },
});
