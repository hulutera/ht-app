import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  SafeAreaView
} from "react-native";

function WelcomeScreen() {
  const ht_url_en = "https://hulutera.com";
  const ht_url_am = "https://hulutera.com?lan=am";
  const ht_url_ao = "https://hulutera.com?lan=ao";
  const ht_url_tg = "https://hulutera.com?lan=tg";
  const ht_url_so = "https://hulutera.com?lan=so";
  return (
   
    <ImageBackground style={styles.background}>
      <SafeAreaView style={styles.logo_container}>
        <Image  source={require("../ht_logo_white.png")} />
      </SafeAreaView>

      <View style={styles.title_container}>
        <Text style={styles.title_text}>Choose Language</Text>
      </View>
      <View style={styles.lang_button}>
        <TouchableOpacity onPress={() => Linking.openURL(ht_url_en)}>
          <Text style={styles.lan_text}>English</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lang_button}>
        <TouchableOpacity onPress={() => Linking.openURL(ht_url_am)}>
          <Text style={styles.lan_text}>አማርኛ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lang_button}>
        <TouchableOpacity onPress={() => Linking.openURL(ht_url_ao)}>
          <Text style={styles.lan_text}>Afaan Oromoo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lang_button}>
        <TouchableOpacity onPress={() => Linking.openURL(ht_url_tg)}>
          <Text style={styles.lan_text}>ትግርኛ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lang_button}>
        <TouchableOpacity onPress={() => Linking.openURL(ht_url_so)}>
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
    width: "100%"
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
    backgroundColor: "#337ab7",
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
