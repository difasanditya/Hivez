import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {isEmailValid} from '../../utils/validator.utils';
import styles from './EmailField.component.style';

const EmailField = (props) => {
	const [validity, setValidity] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	return (
		<View style={props.style}>
			<View style={ props.editable ? [validity ? styles.inputText : styles.inputTextInvalid, styles.container] :
				[styles.containerDisabled, styles.container, props.style]}>
				<View style={styles.iconContainerLeft}>
					<FontAwesome5 name={'envelope'} style={styles.inputIcon} />
				</View>
				<TextInput
					autoCapitalize={'none'}
					editable={props.editable}
					keyboardType={'email-address'}
					onChangeText={(value) => {
						props.onChangeText(value);
						if (props.validateInput) {
							const validationResult = props.customValidateInput ? props.customValidateInput(value) : isEmailValid(value);
							setValidity(value.length > 0 ? validationResult.isValid : true);
							setErrorMessage(value.length > 0 ? validationResult.message : '');
						}
					}}
					placeholder={props.placeholder}
					style={[props.editable ? {} : styles.inputTextDisabled, styles.textInput]}
					value={props.value} />
				<TouchableOpacity
					style={props.editable ? styles.hidden : styles.iconContainerRight}
					onPress={props.onPressPasswordToggle} >
					<FontAwesome5 name={'edit'} style={styles.inputIcon} />
				</TouchableOpacity>
			</View>
			<Text style={props.editable && !validity ? styles.errorMessage : styles.hidden}>{props.contentText[errorMessage]}</Text>
		</View>
	);
}

export default EmailField;