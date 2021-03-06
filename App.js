/*
Created by Kelvin Lau and Mohammed Bajaman as part of Final Project in Web and Mobile App Development Course
04-12-2017
*/
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from "./screens/HomeScreen"
import AddReminderScreen from "./screens/AddReminderScreen"
import NoteComponent from './components/NoteComponent'

export const ReminderApp = StackNavigator({ //Navigator
	Home: {
		screen: HomeScreen
	},
	Add: {
		screen: AddReminderScreen
	},
	Note: {
		screen: NoteComponent
	}
});

export default class App extends Component {
    render() {
      return (
      	<ReminderApp /> //Initializes app
      )
    }
}