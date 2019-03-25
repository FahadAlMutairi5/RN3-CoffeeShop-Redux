import { createStackNavigator } from "react-navigation";
import { createAppContainer } from 'react-navigation';
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import CoffeeItem from "../Components/CoffeeList/CoffeeItem";
import Login from "../Components/Login";

const ourStack = createStackNavigator(
    {
      CoffeeList: CoffeeList,
      CoffeeDetail: CoffeeDetail,
      CoffeeCart: CoffeeCart,
      Login:Login,
      CoffeeItem:CoffeeItem,
    },
    {
      initialRouteName: "Login",
    }
  );

const AppContainer = createAppContainer(ourStack);

export default AppContainer;