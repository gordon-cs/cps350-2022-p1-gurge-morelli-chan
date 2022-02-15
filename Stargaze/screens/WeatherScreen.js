import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { responseJson } from "../hooks/useCachedResources";
import checkWeather from "../hooks/checkWeather";

export default function WeatherScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {checkWeather(responseJson.current.condition.text, responseJson.current.temp_f)}
        </Text>
        <Image
          style={styles.weatherImage}
          source={{
            uri: "https:" + responseJson.current.condition.icon,
          }}
        />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  weatherImage: {
    width: 75,
    height: 75,
    top: 0,
  },
});
