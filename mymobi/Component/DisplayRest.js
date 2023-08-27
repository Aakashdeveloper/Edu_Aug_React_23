import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image} from 'react-native';

const Display = (props) => {

    const renderList = ({restList}) => {
        if(restList){
            return restList.map((item) => {
                return(
                    <View key={item._id}>
                        <Image source={{uri:item.restaurant_thumb}}
                        style={styles.restImg}/>
                        <Text style={styles.text}>{item.restaurant_name}</Text>
                    </View>
                )
            })
        }
    }

    return(
        <View>
            <ScrollView style={styles.container}>
                {renderList(props)}
            </ScrollView>
        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontSize:25
    },
    restImg:{
        width:180,
        height:180
    }
})

export default Display;