import React, {useContext, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {isEmailValid, isFullNameValid, isUsernameValid} from '../../utils/validator.utils';
import {LocalizationContext} from '../../contexts/language.context';
import Button from '../Button/Button.component';
import EmailField from '../TextField/EmailField.component';
import Modal from './Modal.component';
import TextField from '../TextField/TextField.component';
import styles from './ChangeProfileModal.component.style';

const ChangeProfileModal = (props) => {
	const {translations} = useContext(LocalizationContext);

	const [visibility, setVisibility] = useState(false);
	const toggleModal = () => {setVisibility(!visibility)};

	const [fullName, setFullName] = useState(props.profileData.fullName);
	const [email, setEmail] = useState(props.profileData.email);
	const [username, setUsername] = useState(props.profileData.username);

	useEffect(() => {
		setFullName(props.profileData.fullName);
		setEmail(props.profileData.email);
		setUsername(props.profileData.username);
	}, []);

	const [saveButtonAccessbility, setSaveButtonAccessbility] = useState(true);

	const validateSaveButton = (fullName, email, username) => {
		setSaveButtonAccessbility(isFullNameValid(fullName).isValid &&
			isEmailValid(email).isValid &&
			isUsernameValid(username).isValid);
	};

	const onChangeFullName = (fullName) => {
		setFullName(fullName);
		validateSaveButton(fullName, email, username);
	};

	const onChangeEmail = (email) => {
		setEmail(email);
		validateSaveButton(fullName, email, username);
	};

	const onChangeUsername = (username) => {
		setUsername(username);
		validateSaveButton(fullName, email, username);
	};

	return (
		<Modal
			element={props.children}
			style={props.style}
			touchableType={'highlight'}
			visibility={visibility}
			toggleModal={toggleModal}>
				<Text style={styles.header}>{translations['ChangeProfileModal']['PAGE_TITLE']}</Text>
				<TextField
					contentText={translations['FullNameValidation']}
					textIcon={'address-card'}
					customValidateInput={isFullNameValid}
					onChangeText={onChangeFullName}
					placeholder={translations['ChangeProfileModal']['FULL_NAME_PLACEHOLDER']}
					style={styles.inputText}
					validateInput={true}
					value={fullName} />
				<EmailField
					contentText={translations['EmailValidation']}
					editable={true}
					onChangeText={onChangeEmail}
					placeholder={translations['ChangeProfileModal']['EMAIL_PLACEHOLDER']}
					style={styles.inputText}
					validateInput={true}
					value={email} />
				<TextField
					contentText={translations['UsernameValidation']}
					customValidateInput={isUsernameValid}
					onChangeText={onChangeUsername}
					textIcon={'at'}
					placeholder={translations['ChangeProfileModal']['USERNAME_PLACEHOLDER']}
					validateInput={true}
					value={username} />
				<View style={styles.buttonContainer}>
					<Button
						accessability={true}
						customUnderlayColor={'#FF5F5F'}
						onPress={() => {
							toggleModal();
							// setFullName(props.data.fullName);
							// setEmail(props.data.email);
							// setUsername(props.data.username);
						}}
						style={[styles.button, styles.cancelButton]}
						text={translations['ChangeProfileModal']['CANCEL']} />
					<Button
						accessability={saveButtonAccessbility}
						onPress={() => {
							toggleModal();
							props.saveData(fullName, email, username);
						}}
						style={styles.button}
						text={translations['ChangeProfileModal']['SAVE']} />
				</View>
		</Modal>
	);
};

export default ChangeProfileModal;