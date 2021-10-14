import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";

function WelcomeScreen() {
  const supportedURL_EN = "https://hulutera.com";
  const supportedURL_AM = "https://hulutera.com?lan=am";
  const supportedURL_AO = "https://hulutera.com?lan=ao";
  const supportedURL_TG = "https://hulutera.com?lan=tg";
  const supportedURL_SO = "https://hulutera.com?lan=so";
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../ht-logo-v2.png")} />
      </View>

      <View style={styles.title_container}>
        <Text style={styles.title_text}>Choose your language</Text>
      </View>
      <View style={styles.lang_button}>
        <TouchableOpacity onPress={() => Linking.openURL(supportedURL_EN)}>
          <Text style={styles.lan_text}>English</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lang_button}>
        <TouchableOpacity onPress={() => Linking.openURL(supportedURL_AM)}>
          <Text style={styles.lan_text}>አማርኛ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lang_button}>
        <TouchableOpacity onPress={() => Linking.openURL(supportedURL_AO)}>
          <Text style={styles.lan_text}>Afaan Oromoo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lang_button}>
        <TouchableOpacity onPress={() => Linking.openURL(supportedURL_TG)}>
          <Text style={styles.lan_text}>ትግርኛ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lang_button}>
        <TouchableOpacity onPress={() => Linking.openURL(supportedURL_SO)}>
          <Text style={styles.lan_text}>Somali</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom_container}>
        <Text style={styles.bottom_text}>Powered by www.hulutera.com</Text>
        <Text style={styles.bottom_text_cr}>Copyright ©2021</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    color: "#c7c7c7",
  },
  logo_container: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    width: "100%",
  },
  title_container: {
    width: "100%",
    height: 70,
    marginBottom: 10,
    alignItems: "center",
  },
  title_text: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 5,
    color: "#000",
  },
  lang_button: {
    width: "60%",
    height: 50,
    backgroundColor: "#55468c",
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
  },
  lan_text: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 5,
    color: "#fff",
  },
  bottom_text: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 5,
    color: "#c7c7c7",
  },
  bottom_text_cr: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
    color: "#c7c7c7",
  },
  bottom_container: {
    width: "100%",
    height: 70,
    backgroundColor: "#000",
  },
});

export default WelcomeScreen;
