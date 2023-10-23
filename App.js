import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.img}>
        <Image source={require("./assets/vs_blue.png")} style={style.image} />
      </View>
      <View style={style.dscContainer}>
        <Text style={{ marginTop: 40, fontSize: 15, fontFamily: "Roboto" }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Image
            source={require("./assets/star.png")}
            style={{ width: 20, height: 20 }}
          />
          <Image
            source={require("./assets/star.png")}
            style={{ width: 20, height: 20 }}
          />
          <Image
            source={require("./assets/star.png")}
            style={{ width: 20, height: 20 }}
          />
          <Image
            source={require("./assets/star.png")}
            style={{ width: 20, height: 20 }}
          />
          <Image
            source={require("./assets/star.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ marginLeft: 50 }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ marginTop: 15, flexDirection: "row" }}>
          <Text
            style={{ fontSize: 20, fontFamily: "Roboto", fontWeight: "bold" }}
          >
            2.290.000 đ
          </Text>
          <Text style={{ marginLeft: 30, textDecorationLine: "line-through" }}>
            2.990.000 đ
          </Text>
        </View>
        <Text style={{ color: "red", fontWeight: "bold", marginTop: 10 }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <View
          style={{
            borderWidth: 1,
            width: 300,
            height: 40,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Pressable
            onPress={() => {
              console.log("aaahh");
            }}
          >
            4 MÀU CHỌN 1 MÀU
          </Pressable>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: 300,
            height: 40,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "red",
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("ProductDetail");
            }}
          >
            CHỌN MUA
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const ProductDetail = ({ navigation }) => {
  const [image, setImage] = useState(require("./assets/vs_blue.png"));
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Go back</Text>
      </Pressable>
      <View style={style2.container}>
        <View style={style2.img}>
          <Image
            source={image}
            style={{ width: 120, height: 170, resizeMode: "contain" }}
          />
          {/* <Text style={{}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text> */}
        </View>
        <View style={style2.box}>
          <Pressable
            onPress={() => {
              setImage(require("./assets/vs_silver.png"));
            }} style={style2.boxSliver}
          ></Pressable>
          <Pressable style={style2.boxRed} onPress={()=>{
            setImage(require("./assets/vs_red.png"))
          }}></Pressable>
          <Pressable style={style2.boxBlack} onPress={()=>{
            setImage(require("./assets/vs_black.png"))
          }}></Pressable>
          <Pressable style={style2.boxBlue} onPress={()=>{
            setImage(require("./assets/vs_blue.png"))
          }}></Pressable>
        </View>
      </View>
    </View>
  );
};
const style2 = StyleSheet.create({
  box: {
    alignItems: "center",
    backgroundColor: "gray",
  },
  container: {},
  boxSliver: {
    marginTop: 10,
    width: 100,
    height: 100,
    backgroundColor: "silver",
    marginBottom: 10,
  },
  boxRed: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    marginBottom: 10,
  },
  boxBlack: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    marginBottom: 10,
  },
  boxBlue: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    marginBottom: 10,
  },
});
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  image: {
    width: 250,
    height: 350,
    resizeMode: "contain",
  },
  dscContainer: {
    flex: 6,
    marginLeft: 50,
  },
});

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
