/**
 * Created by fanzhengchen on 11/9/16.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {fetchHomePage} from './ApiProvider';

export default class Main extends Component {

    componentWillMount() {
        fetchHomePage();
    }

    render() {
        return (
            <Text>fetch</Text>
        );
    }
}