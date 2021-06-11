import React from 'react';
import {View, Text, StyleSheet, Dimensions,Image,TouchableOpacity} from 'react-native';

const AddseriesCard = ({ onNavigate,onPress}) => (
    <TouchableOpacity
    onPress={onNavigate}
     style= {styles.container}>
        <View style = {styles.card}>
        {/*<Image
            source={{
                uri:serie.img

            } }
            aspectRatio={1}
            resizeMode="cover"


        
        />*/}
            <Text>Adicionar Serie</Text>
            
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
    

});
export default AddseriesCard;