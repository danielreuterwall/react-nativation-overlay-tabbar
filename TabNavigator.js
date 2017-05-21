import React from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";

import { TabNavigator } from "react-navigation";

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Home"
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.view}>
        <Button
          onPress={() => this.props.navigation.navigate("Notifications")}
          title="Go to notifications"
        />
        <Text style={styles.row}>Row 1</Text>
        <Text style={styles.row}>Row 2</Text>
        <Text style={styles.row}>Row 3</Text>
        <Text style={styles.row}>Row 4</Text>
        <Text style={styles.row}>Row 5</Text>
        <Text style={styles.row}>Row 6</Text>
        <Text style={styles.row}>Row 7</Text>
        <Text style={styles.row}>Row 8</Text>
        <Text style={styles.row}>Row 9</Text>
      </ScrollView>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Notifications"
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

class MyTabBar extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Notifications"
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  view: {
    paddingTop: 60
  },
  row: {
    padding: 20,
    backgroundColor: "#e91e63",
    marginBottom: 20
  }
});

export default TabNavigator(
  {
    Home: {
      screen: MyHomeScreen
    },
    Notifications: {
      screen: MyNotificationsScreen
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#e91e63",
      style: {
        opacity: 0.5,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 60
      }
    }
  }
);
