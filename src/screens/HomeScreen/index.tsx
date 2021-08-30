import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppScreen from '../../../src/components/AppScreen'
import { getShows } from './../../serverAPI'

const HomeScreen = () =>
{
    let [showInfVar, setShowsInf] = useState([
        {
            "id": 250,
            "url": "https://www.tvmaze.com/shows/250/kirby-buckets",
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg"
            },
            "name": "Kirby Buckets",
            "language": "English",
        }
    ])

    useEffect(() =>
    {
        getShows((ResVar: any) => 
        {
            console.log("ResVar", ResVar.length)
            setShowsInf(ResVar.slice(0, 20))
        })
    }, [])

    return (
        <AppScreen needScroll={true}>
            <View style={styles.flexCls}>
                {
                    showInfVar.map((showItmVar, idx) =>
                        <View key={idx} style={styles.showItmCls}>
                            <Image source={{
                                width: 60,
                                height: 100,
                                uri: showItmVar.image ?
                                    showItmVar.image.medium :
                                    "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
                            }} />
                            <Text>{showItmVar.name}</Text>
                            <Text>{showItmVar.language}</Text>
                        </View>
                    )
                }
            </View>


        </AppScreen>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    flexCls: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    showItmCls: {
        width: "25%",
        height: 150,
        alignItems: 'center',
        marginVertical: 4
    }
})