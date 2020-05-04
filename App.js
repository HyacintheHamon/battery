import React, { Component, useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, Animated } from "react-native";

import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import Shimmer from 'react-native-shimmer';

var { windowWidth } = Dimensions.get('window');

var shimmerBg = require('./transparent.png');

export default class App extends Component {

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Battery</Text>
        </View>
        <View style={styles.bodyContainer}>
          {/* Regular progress bar */}
          <Text style={{ color: "#FFF", marginTop: 10, marginBottom: 10 }}>Test 1 - Progress bar</Text>
          <Progress.Bar
            animated={true}
            progress={0.7}
            color={"green"}
            unfilledColor={"grey"}
            borderWidth={0}
            borderColor={'#111117'}
            width={200}
            height={50}
            //borderRadius={3}
            useNativeDriver={true}
            // animationConfig
            animationType={'timing'}
          />

          {/* Shimmer on Text */}
          <Text style={{ color: "#FFF", marginTop: 10, marginBottom: 10 }}>Test 2 - Shimmer effect</Text>
          <Shimmer direction={"right"} autoRun={true} style={{ width: 180, height: 40 }}>
            <Text style={{ fontSize: 30, color: "#FFF" }}>.........................</Text>
          </Shimmer>

          <Text style={{ color: "#FFF", marginTop: 10, marginBottom: 10 }}>Test 3 - Shimmer effect + progress bar</Text>
          {/* Shimmer on View with Text. Shimmer isn't working */}
          <Shimmer direction={"right"} autoRun={true} style={{ width: 180, height: 40 }}>
            <View style={{ backgroundColor: "green", width: 180, height: 40 }}>
              <Text style={{ fontSize: 30, color: "#FFF" }}>.........................</Text>
            </View>
          </Shimmer>

          <Text style={{ color: "#FFF", marginTop: 10, marginBottom: 10 }}>Test 4 - Shimmer on view</Text>
          {/* Shimmer on View without Text. Shimmer isn't working */}
          <Shimmer direction={"right"} autoRun={true} style={{ width: 180, height: 40 }}>
            <View style={{ backgroundColor: "green", width: 180, height: 40 }} />
          </Shimmer>

          <Text style={{ color: "#FFF", marginTop: 10, marginBottom: 10 }}>Test 5 - Shimmer + Linear gradient</Text>
          {/* Shimmer + Linear Gradient. Shimmer isn't working */}
          <Shimmer direction={"right"} >
            <LinearGradient colors={['#397C5D', '#37DD5D']} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} style={styles.linearGradient}>
              <View style={styles.gradientView} />
            </LinearGradient>
          </Shimmer>


          <Text style={{ color: "#FFF", marginTop: 10, marginBottom: 10 }}>Test 6 - Linear gradient + Shimmer</Text>
          {/* Shimmer + Linear Gradient. Shimmer isn't working */}
          <LinearGradient colors={['#397C5D', '#37DD5D']} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} style={styles.linearGradient}>
            <Shimmer direction={"right"} >
              <View style={{ width: 170, height: 50 }} />
            </Shimmer>
          </LinearGradient>

          <Text style={{ color: "#FFF", marginTop: 10, marginBottom: 10 }}>Test 7 - Shimmer + Image</Text>
          <Shimmer autoRun={true} direction={"right"} >
            <Image source={shimmerBg} />
          </Shimmer>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111117"
  },
  headerContainer: {
    justifyContent: "center",
  },
  header: {
    paddingHorizontal: 34,
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  bodyContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: "center"
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  gradientView: {
    width: 170,
    height: 50
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  }
});

