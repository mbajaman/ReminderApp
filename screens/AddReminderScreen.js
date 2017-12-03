import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';

import NoteComponent from '../components/NoteComponent'
import CancelButtonComponent from '../components/CancelButtonComponent'
import SaveButtonComponent from '../components/SaveButtonComponent'
import GPSComponent from '../components/GPSComponent'
import ImportButtonComponent from '../components/ImportButtonComponent'

export default class AddScreenComponent extends Component {

  static navigationOptions = {
        header: null,
    };
    
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Header
                      statusBarProps={{ barStyle: 'light-content' }}
                      leftComponent={<CancelButtonComponent />}
                      centerComponent={{ text: 'NEW REMINDER', style: { fontSize: 15, color: '#fff' } }}
                      rightComponent={<SaveButtonComponent />}
                      outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
                    />
                </View>
                <GPSComponent />
                <NoteComponent />
                <ImportButtonComponent />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
    },

    placeholder: {
        height: 280,
        width: 170,
        resizeMode: 'contain',
    },

  notesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    padding: 10,
  },
});