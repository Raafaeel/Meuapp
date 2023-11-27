import React from 'react';
import { TouchableOpacity , Text } from 'react-native' ;
import styles from './styles';

const Button = ({ label, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
    </TouchableOpacity > );
export default Button;