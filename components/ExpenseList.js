import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ExpenseList extends React.Component {
  render() {
    return (
      <View>
        <Text>Expense: {this.props.val.expense} </Text>
        <Text>Amount: {this.props.val.amount}</Text>
      </View>
    );
  }
}

