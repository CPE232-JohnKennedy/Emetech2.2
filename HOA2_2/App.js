import { useState } from 'react';
import { Button, StyleSheet, Text, 
  TextInput, View, FlatList, 
  TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("")
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

{/*Bad Programming Practice*/}
  function addGoalHandler(){
    if (enteredGoalText.trim() === ''){
      return;
    }
    setCourseGoals((currentCourseGoals)=>
    [...courseGoals, { id: Math.random().toString(), value: enteredGoalText}]);
    setEnteredGoalText('');
  };

  return (
    <ImageBackground
      source={require('./assets/bg.png')}
      style={styles.backgroundImage}>

      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputText} placeholder=' Your Course Goal' 
          onChangeText={goalInputHandler} value={enteredGoalText}/>
          <Button title='Add Goal' color='#CBBAB0'
          onPress={addGoalHandler}/>
        </View>

        {/*<View style={styles.goalsContainer}> 
          <Text>List of Goals</Text>
      </View>*/}

        <View style={styles.goalListContainer}>
          <FlatList keyExtractor={(item, index) => item.id}
            data={courseGoals} renderItem={itemData => (
            <ScrollView style={styles.goalItem}>       
              <Text style={styles.goalText}>{itemData.item.value}</Text>
            </ScrollView>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  appContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 5,
    borderColor: '#9C949C',
  },
  inputText: {
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#CBBAB0',
    padding: 10,
    borderRadius: 20,
    marginRight: 12,
    fontSize: 16,
  },
  goalItem: {
    padding: 10,
    backgroundColor: '#CBBAB0',
    borderColor: '#383532',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 100,
  },
  goalText: {
    fontSize: 12,
    color: '#333',
    fontSize: 16,
  },
  goalsContainer: {
    fontSize: 16,
    color: 'white',
  },
  goalListContainer: {
    flex: 3,
  }
});