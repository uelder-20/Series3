import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen';
import SeriesPage from './pages/SeriesPage';
import serieDetalhePage from './pages/serieDetalhePage';
import SerieFormPage from './pages/SerieFormPage';



const AppNavigator = createStackNavigator({
  'Login':{
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem Vindo!'
    }
  },

  
  'Main':{
    screen:SeriesPage
  },

  'SerieForm':{
    screen: SerieFormPage,
    navigationOptions: {
      title: 'Nova Serie'
    }
  },

  
  
  'serieDetalhe':{
    screen: serieDetalhePage,
    navigationOptions: ({navigation}) => {
      const {serie} = navigation.state.params;
      
      return{
      title: serie.title
    }
  }

  },

  


  
 
 
  

},{
   defaultNavigationOptions:{
     title: "series",
     headerTintColor: 'white',
     headerStyle:{
       backgroundColor:'#6ca2f7',
       borderBottomWidth:1,
       borderBottomColor:'#C5C5C5',
     },
     headerTitleStyle:{
       color: 'white',
       fontSize:30,

     }
   }
});

const AppContainer = createAppContainer (AppNavigator);

export default AppContainer;