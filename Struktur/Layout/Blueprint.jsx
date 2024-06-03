import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';

const Blueprint = () => {
  return (
    <>
    <SafeAreaView style={styles.sav}>
      <ScrollView style={{backgroundColor: 'transparent'}}>
        <View></View>
      </ScrollView>
    </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
  sav:{
    backfaceVisibility:'hidden',
    flex: 1,
    flexDirection:'column',
    position:'absolute',
    width:'100%',
    height:'100%',
    justifyContent: 'flex-start',
  },
  placeholder:{

  },
  placeholder:{

  },
})
export default Blueprint