import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
export default function MiniCard(props) {

    const navigation = useNavigation();

    return (
       <TouchableOpacity
       onPress={() => navigation.navigate("videoPlayer", {videoId: props.videoId, title: props.title})}
       >
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginTop: 0,
        }}>
            <Image
                source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/default.jpg` }}
                style={{
                    width: Dimensions.get("screen").width / 2,
                    height: 120,
                }}
            />
            <View style={{
                width: (Dimensions.get("screen").width / 2) - 20,
                margin: 5,
                marginTop: 0,
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: "bold",
                }}
                    numberOfLines={3}
                    ellipsizeMode="tail"
                >
                   {props.title}
                </Text>
                <Text style={{
                    fontSize: 15,
                }}>
                {props.channel}
                </Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}