import React from 'react';
import {View, Text, StyleSheet, Dimensions,Image,TouchableOpacity} from 'react-native';

const SeriesCard = ({serie, onNavigate}) => (
    <TouchableOpacity
    onPress={onNavigate}
     style= {styles.container}>
        <View style = {styles.card}>
            <Image
            source={{
                uri:serie.img

            } }
            aspectRatio={1}
            resizeMode="cover"


            
            />
            <View style ={styles.cardTitleWrapper}></View>
         <Text style={styles.cardTitle}>{serie.title}</Text>
         </View>

    </TouchableOpacity >

);

const styles = StyleSheet.create({
    container:{
        //flex:.5,
        width:'50%',
        padding:20,
        height: Dimensions.get('window').width/2,
        

        
        
    

    },
    card:{
        flex:1,
        borderWidth:1,

    },
    cardTitleWrapper:{
        backgroundColor: 'blue',
        height:50,
        position: 'absolute',
        bottom:0,
        opacity: 0.5,
        width: '100%',

        paddingTop:10,
        paddingBottom:10,

        paddingLeft:3,
        paddingRight:3,
        alignItems: 'center'

        

    },
    cardTitle:{
        color:'blue',
        fontSize:15,
        fontWeight:'bold'

    }
    


});
export default SeriesCard;