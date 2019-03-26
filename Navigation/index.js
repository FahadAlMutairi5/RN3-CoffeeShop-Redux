import { createStackNavigator } from "react-navigation";
import { createAppContainer } from 'react-navigation';
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import Login from "../Components/Login";

const ourStack = createStackNavigator(
    {
      CoffeeList: CoffeeList,
      CoffeeDetail: CoffeeDetail,
      CoffeeCart: CoffeeCart,
      Login:Login,
    },
    {
      initialRouteName: "Login",
      defaultNavigationOptions: {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "rgb(20,90,100)"
        },
        headerTextStyle: {
          fontWeight: "bold"
        },
        cardStyle: {
         backgroundColor: "rgb(20,90,100)" 
        }
     }
    }
  );

const AppContainer = createAppContainer(ourStack);

export default AppContainer;