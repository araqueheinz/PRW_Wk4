import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Header />
        <Main />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
      marginTop: 50,
    },

  })
