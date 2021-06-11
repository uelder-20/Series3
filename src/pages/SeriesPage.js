import React from 'react';
import {StyleSheet, View,  FlatList, ActivityIndicator} from 'react-native';


import AddseriesCard from './components/AddseriesCard';
import SeriesCard from './components/SeriesCard';
import {connect} from 'react-redux'
import { watchSeries } from '../actions';



const isEven = number => number % 2 === 0;
class  SeriesPage extends React.Component {
    componentDidMount(){
        this.props.watchSeries();

    }
    render(){
        const {series,navigation} = this.props;
        if (series === null) {
			return <ActivityIndicator />;
		}
        return(
            <View>
    <FlatList
    key={''}
data={[...series, {isLast: true}]}
renderItem={({item, index}) => ( 
    item.isLast 
    ? <AddseriesCard
    isFirstColumn={isEven(index)}
    onNavigate={() => navigation.navigate('SerieForm')}/>
    
    
    : <SeriesCard

 serie={item}
 isFirstColumn={isEven(index)}
onNavigate={() => navigation.navigate('serieDetalhe', {serie: item})}
/>
)}
keyExtractor={item =>item.id}
numColumns={2}
ListHeaderComponent={props => (<View style={styles.marginTop} />)}
					ListFooterComponent={props => (<View style={styles.marginBottom} />)}

/>
</View>

        );
    }

}

    


const styles = StyleSheet.create({
    container:{

    }


})

const mapStateToProps = state => {
	const { series } = state;
	if (series === null) {
		return { series }
	}

	const keys = Object.keys(series);
	const seriesWithKeys = keys.map(id => {
		return { ...series[id], id }
	});
	return { series: seriesWithKeys };
    

}

export default connect(mapStateToProps,
     {watchSeries}
     )(SeriesPage);