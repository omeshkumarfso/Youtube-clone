import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function Header() {

  const navigation = useNavigation();

  return (
    <View style={{
      flexDirection: "row",
      elevation: 2,
      backgroundColor: "#e6dfdf",
    }}
    >
      <View style={{
        flexDirection: "row",
        width: Dimensions.get("screen").width / 2,
        alignItems: "center",
        elevation:5
      }}>
        <Ionicons name="logo-youtube" size={40} color="red" style={{ marginLeft: 10 }} />
        <Text style={{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 10,
        }}
        >
          YouTube
        </Text>
      </View>

      <View style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: Dimensions.get("screen").width / 2
      }}>
        <Ionicons name="md-camera" size={30} style={{ marginRight: 15, }} />
        <Ionicons
          name="md-search"
          size={30}
          style={{ marginRight: 15 }}
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons name="account-circle" size={30} style={{ marginRight: 15 }} />
      </View>
    </View>
  )
}