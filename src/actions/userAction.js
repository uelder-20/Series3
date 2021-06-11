import firebase from 'firebase';
import {Alert} from 'react-native';

export const USER_LOGIN_SUCESS = 'USER_LOGIN';
const userLoginSucess =  user => ({
    type: USER_LOGIN_SUCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
    
});




 export const tryLogin = ({email, password}) => dispatch =>{

    
    

    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user =>{
        const action = userLoginSucess(user);
        dispatch(action);
        return user;
    })
    .catch(error =>{
       if (error.code == 'auth/user-not-found' ) {
           return new Promise((resolve, reject) =>{



           
 
            Alert.alert(
               'usuário não encontrado',
                'Deseja Criar um Cadastro?',
                [{
                   text:'Não',
                     onPress: () =>  resolve(),
                    },{
                       text: 'sim',
                        onPress:() =>{
                            firebase
                            .auth()
                            .createUserWithEmailAndPassword(email, password)
                          .then(resolve)
                            .catch(reject)

                            

                        }
                    }
               ],
                {cancelable:false}
            )

            })
        
        } 
        return Promise.reject(error)
        
        
        
       
    


        //console.log ('usuario nao encontrado',error);
    })
   // .then(() => this.setState({isLoading:false}));
 }
