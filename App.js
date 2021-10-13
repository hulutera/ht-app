import React, { useCallback} from "react";
import { Alert, Button, Linking, StyleSheet, View, Image, SafeAreaView, Text, TouchableOpacity, Dimensions, setState} from "react-native";

const supportedURL_EN = "https://hulutera.com";
const supportedURL_AM = "https://hulutera.com?lan=am";
const supportedURL_AO = "https://hulutera.com?lan=ao";
const supportedURL_TG = "https://hulutera.com?lan=tg";
const supportedURL_SO = "https://hulutera.com?lan=so";
const screenWidth = Dimensions.get('window').width

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.top_div}></View>
      <View style={styles.ht_logo}>
        <Image style={{width: screenWidth}}      
        source={require('./ht-logo-4.png')}
      />

      </View>
      <View style={styles.middle_txt}>
      <View style={styles.main_view}>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 2, marginBottom: 3}}>
      <Text style={{fontSize: 25}}>Choose Language Version</Text>
      </View>
      <View style={styles.language_view_cmpt}>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(supportedURL_EN)}>
      <Text style={styles.language_txt}>ENGLISH
      </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.language_view_cmpt}>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(supportedURL_AM)}>
      <Text style={styles.language_txt}>
      አማርኛ
      </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.language_view_cmpt}>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(supportedURL_AO)}>
      <Text style={styles.language_txt}>
      AFAAN OROMOO
      </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.language_view_cmpt}>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(supportedURL_TG)}>
      <Text style={styles.language_txt}>
      ትግርኛ
      </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.language_view_cmpt}>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(supportedURL_SO)}>
      <Text style={styles.language_txt}>
      SOMALI
      </Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      
      <View style={styles.bottom_div}>
      <Text style={styles.bottom_txt}>Powered by Hulutera.com</Text>
      </View>      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EBEAED"},
  top_div: {height: 60, width: 400, backgroundColor: "grey"},
  ht_logo: {justifyContent: "center", alignItems:"center", paddingTop: 0},
  middle_txt: {justifyContent: "center", alignItems: "center", paddingTop: 100},
  main_view: {justifyContent: "center", alignItems: "center", backgroundColor: '#F5F5F5', padding: 5},
  language_txt: {color: 'white', fontSize: 20, justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: "#008ac3", width: 200},
  language_view_cmpt: {paddingTop: 5},
  bottom_div: {position: "absolute", bottom: 0, height: 60, width: 400, backgroundColor: "grey"},
  bottom_txt: {color: 'black', fontSize: 18, justifyContent: "center", alignItems: "center", textAlign: "center", paddingTop: 20}

});

export default App;