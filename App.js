import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight } from "react-native";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: require("./assets/vs_blue.png"),
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.namephone}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.review}>
        <Stars
          default={2.5}
          count={5}
          half={true}
          starSize={50}
          fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
          emptyStar={<Icon name={"star-outline"} style={styles.myStarStyle} />}
          halfStar={<Icon name={"star-half"} style={[styles.myStarStyle]} />}
        />
        <Text style={{ marginLeft: 40 }}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.price}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>1.990.000đ</Text>
        <Text style={{ textDecorationLine: "line-through" ,marginLeft:125}}>2.990.000đ</Text>
      </View>
      <View style={styles.textFooter}>
        <Text style={{color:"red",fontWeight:"900"}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={{uri:require("./assets/question.png")}}  style={{width:20,height:20,marginLeft:15}}/>
      </View>
      
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text style={{fontWeight:"600"}}>4 MÀU-CHỌN MÀU</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.buy}>
          <Text style={{fontWeight:"bold" ,color:"white"}}>CHON MUA</Text>
        </View>
      </TouchableHighlight>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: "cover",
  },
  namephone: {
    fontSize: 16,
    // fontWeight: "bold",
  },
  myStarStyle: {
    color: "yellow",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontSize: 30,
  },
  review: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    spaceAround: 10,
  },
  textFooter: {
    marginTop: 15,
    flexDirection: "row",
    left: 0,
  },
  button: {
    marginTop: 15,
    alignItems: 'center',
    width: 326,
    height: 50,
    borderWidth:2,
    borderRadius:10,
    borderColor:"gray",
    padding: 10,
  },
  buy: {
    marginTop: 100,
      backgroundColor:"red",
      borderColor:"gray",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      width:326,
      height:50,
      borderWidth:2,
      marginBottom:0,
    },
  mgnLeft:{
    marginLeft:40,
  }
});
