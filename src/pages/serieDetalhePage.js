import React from 'react';
import {ScrollView, Text,StyleSheet, Image,Button,View} from 'react-native';

import Line  from '../pages/components/Line';
import LongText  from '../pages/components/LongText';

/*
title
gender
rate
*/

class serieDetalhePage extends React.Component{
    render(){
        const { navigation } = this.props;
		const { serie } = navigation.state.params;
       


        return (
            <ScrollView>
                <Image
                style={styles.image}
                 source = {{

                    uri: serie.img
                }}   />         
                

                
                    <Line label ="titulo" content={serie.title}/>
                    <Line label ="gender" content={serie.gender}/>
                    <Line label ="Nota" content={serie.rate}/>
                    <LongText label ="Descrição" content={serie.description}/>
                    
                    <View style={styles.button}>
					<Button
						title="Editar"
						onPress={() => {
							navigation.replace('SerieForm', { serieToEdit: serie })
						}} />
				</View>




                    </ScrollView>

                    

        )
    }

}
        
     
            


        const  styles = StyleSheet.create({
            image:{
                aspectRatio: 1
            }
        

        });
    

export default serieDetalhePage;