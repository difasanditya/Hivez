import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {LocalizationContext} from '../../contexts/language.context';
import Modal from './Modal.component';
import styles from './TermsAndConditions.component.style';

const TermsAndConditionsModal = (props) => {
	const {translations} = useContext(LocalizationContext);
	

	const [visibility, setVisibility] = useState(false);
	const toggleModal = () => {setVisibility(!visibility)};
	return (
		<Modal
			element={props.children}
			fixedCloseButton={true}
			touchableType={props.touchableType}
			style={props.style}
			visibility={visibility}
			toggleModal={toggleModal}>
			<View style={styles.section}>
				<Text style={styles.header}>{translations['TermsAndConditions']['TERMS_AND_CONDITIONS']}</Text>
				{translations['TermsAndConditions']['TERMS_AND_CONDITIONS_TEXT'].map((value, key) => {
					return <Text key={key} style={[styles.text, key == translations['TermsAndConditions']['TERMS_AND_CONDITIONS_TEXT'].length - 1 ? {} : styles.listText]}>{value}</Text>
				})}
			</View>
			<View style={styles.section}>
				<Text style={styles.header}>{translations['TermsAndConditions']['CHANGES_TO_THIS_TERMS_AND_CONDITIONS']}</Text>
				{translations['TermsAndConditions']['CHANGES_TO_THIS_TERMS_AND_CONDITIONS_TEXT'].map((value, key) => {
					return <Text key={key} style={[styles.text, key == translations['TermsAndConditions']['CHANGES_TO_THIS_TERMS_AND_CONDITIONS_TEXT'].length - 1 ? {} : styles.listText]}>{value}</Text>
				})}
			</View>
			<View style={{}}>
				<Text style={styles.header}>{translations['TermsAndConditions']['CONTACT_US']}</Text>
				<Text style={styles.text}>{translations['TermsAndConditions']['CONTACT_US_TEXT']}</Text>
			</View>
		</Modal>
	);
}

export default TermsAndConditionsModal;