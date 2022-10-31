import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function DetailScreen({route, navigation}) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id} </Text>
      <Button
        title="다음"
        onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    jsutifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default DetailScreen;
