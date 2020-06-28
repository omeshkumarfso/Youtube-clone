import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, FlatList, ScrollView,ActivityIndicator } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MiniCard from '../components/MiniCard';
import {useSelector, useDispatch} from 'react-redux';
export default function Search({navigation}) {

    const [value, setValue] = useState("");
    // const [miniCardData, setMiniCardData] = useState([]);
    const dispatch = useDispatch()
    const miniCardData = useSelector(State => {
        return State
    })
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${value}&type=video&key=AIzaSyCNyAnUHo4SvPT1EDWZdzr25G7mdw4fVkA`)
            .then(response => response.json())
            .then(data => {
               setLoading(false)
               dispatch({type : "add", payload: data.items}) 
               // setMiniCardData(data.items)
            })
            .catch((error) => {
                console.error('Error:', error)
            });
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: Dimensions.get("screen").width,
                elevation: 5,
                backgroundColor: "white",
            }}>
                <MaterialIcons name="arrow-back" size={30} 
                onPress={()=> navigation.goBack()}
                />

                <TextInput style={{
                    backgroundColor: "#e6e6e6",
                    borderWidth: 0.1,
                    width: Dimensions.get("screen").width - 90,
                    fontSize: 18,
                    margin: 5,
                }}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />

                <MaterialIcons
                    name="send"
                    size={30}
                    onPress={() => fetchData()} />
            </View>

          {loading ? <ActivityIndicator style={{marginTop:10}} size="large" color="blue"/> : null }
            <FlatList
            data= {miniCardData}
            renderItem={({item}) => {
                return <MiniCard 
                  videoId= {item.id.videoId}
                  title= {item.snippet.title}
                  channel = {item.snippet.channelTitle}
                />
            }}
            keyExtractor={item => item.id.videoId}
            />
 
        </View>
    )
}