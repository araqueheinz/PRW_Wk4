import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, ScrollView, Button, Alert } from 'react-native';
import ExpenseList from './ExpenseList'


export default class Main extends React.Component {

    state = {
        exList:[
            {
                expense: 'Water bill',
                amount: '56.00'
            },
            {
                expense: 'Car bill',
                amount: '100.00'
            },
        ]
    }

   
    componentWillMount(){

    }
    changeExpense = expense =>{
        
       this.setState({expense})
       
    }

    changeAmount = amount =>{

        this.setState({amount})
    }


    addExpense = e =>{

        if(this.state.expense === null){
            Alert.alert('Please do no leave blank')
            return false;
        }
        if(this.state.amount === null){
            Alert.alert('Please enter an Amount')
            return false;
        }

        this.state.exList.push({'expense':this.state.expense, 'amount': this.state.amount})
        this.setState({exList:this.state.exList})
        
    }



  render() {

    let myExpenses = this.state.exList.map((element, i) =>{
        return <ExpenseList val={element} key={i} delMe={() =>this.removeExpense(i)} />
      })

    return (
      <View style={styles.container}>
            <Text>Expense</Text>
            <TextInput style={styles.myInput} onChangeText={this.changeExpense}/> 
            <Text>Amount</Text>
            <TextInput style={styles.myInput} onChangeText={this.changeAmount}/> 
            <Button 
                style={styles.myButton}
                onPress={this.addExpense}
                title="+ Add Expense"
                />
          
                <ScrollView  >
                    <Text>{myExpenses}</Text>
                </ScrollView>
            
      </View>
      
    );
  }
}


const styles = StyleSheet.create({

    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },

    myInput: {
      
        height: 30,
        width: 150,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10
    },
    myScrollView: {
        
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myButton: {
       borderWidth: 1,
       borderRadius: 15,
       width: 150,
       height: 40,

    },

  });