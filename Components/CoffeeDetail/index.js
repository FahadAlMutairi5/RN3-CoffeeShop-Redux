import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";
import { Ionicons } from "react-native-vector-icons"

// Style
import styles from "./styles";

//List
import coffeeshops from "../CoffeeList/list";

class CoffeeDetail extends Component {
  static navigationOptions = ({navigation}) => {
    console.log(navigation.getParam("coffeeShop"))
    return {
      title: navigation.getParam("coffeeShop").name,
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

  state = {
    drink: "Cappuccino",
    option: "Small"
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    
    this.setState({
      option: value
    });
  };

  render() {
    let coffeeShopsD = this.props.navigation.getParam("coffeeShop","{}");
    const { coffeeShops, loading } = this.props.coffeeReducer;
    if (loading) return <Content />;
    const coffeeshop = coffeeShopsD;
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {coffeeshop.name + "\n"}
                <Text note>{coffeeshop.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{uri:coffeeshop.img}} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer
});

export default connect(mapStateToProps)(CoffeeDetail);
