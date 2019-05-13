import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Category = props => {
  console.log(props);

  return(
  <SafeAreaView style={styles.container}>
    <View style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <Text>
          nada Page
      </Text>
      <Button
        title="Abra"
        onPress={ () => props.navigation.goBack() } 
      />
    </View>
  </SafeAreaView>
);}

export default Category;
