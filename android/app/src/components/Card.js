import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
export default function Card(props) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("videoPlayer", {videoId: props.videoId, title: props.title})}
        >
            <View style={{
                marginBottom: 15
            }}
            >
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                    style={{
                        width: Dimensions.get("screen").width,
                        height: 200
                    }}
                />

                <View style={{ flexDirection: "row" }}>
                    <View style={{
                        marginLeft: 5,
                        marginTop: 5
                    }}>
                        <MaterialIcons name="account-circle" size={30} style={{ marginRight: 15 }} />
                    </View>

                    <View style={{
                        width: Dimensions.get("screen").width - 70,
                    }}>
                        <Text style={{
                            fontSize: 20,
                        }}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >
                            {props.title}
                        </Text>
                        <Text style={{
                            fontSize: 15
                        }}>{props.channel}</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}