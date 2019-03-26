import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content, Spinner, Button, } from "native-base";
// Store
import coffeeshops from "./list";
import Cart from "../CoffeeCart";
// Component
import CoffeeItem from "./CoffeeItem";
import { Ionicons } from "react-native-vector-icons"

class CoffeeList extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: "Coffee List",
      headerLeft: null,
      headerRight: (
        <Button transparent onPress={() => navigation.navigate('CoffeeCart')}> 
        <Ionicons
          name="ios-card"
          size={30}
          style={{ paddingRight: 16, color: 'white' }}
        />
      </Button>
      )
    }
  };

  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    let shops;
    
    if (loading) {
      return <Spinner />;
    }
    shops = coffeeShops.map(coffeeShop => (
      <CoffeeItem nav={()=>this.props.navigation.navigate("CoffeeDetail",{coffeeShop:coffeeShop})} coffeeShop={coffeeShop} key={coffeeShop.id} />
    ));

    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer
});

export default connect(mapStateToProps)(CoffeeList);
