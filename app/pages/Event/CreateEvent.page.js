import React, {useContext, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {LocalizationContext} from '../../utils/language.utils';
import {isEventNameValid} from '../../utils/validator.utils';
import CreateEvent from '../../components/Event/CreateEvent.component';

const CreateEventPage = ({navigation}) => {
	const {translations, initializeAppLanguage} = useContext(LocalizationContext);
	initializeAppLanguage();
	
	const [image, setImage] = useState('');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [nextButtonAccessbility, setNextButtonAccessbility] = useState(false);

	const onChangeName = (name) => {
		setName(name);
		setNextButtonAccessbility(isEventNameValid(name).isValid);
	};

	const onChangeDescription = (description) => {
		setDescription(description);
	};

	const changeImage = (image) => {
		setImage(image.data);
		ImagePicker.clean().then(() => {
			alert('Change event picture');
		}).catch(e => {
			console.log(e);
		})
	};

	const deleteImage = () => {
		setImage('');
	};

	const pickerOption = {
		compressImageQuality: 0.8,
		cropping: true,
		cropperCancelText: translations['DropdownChangePicture']['CANCEL'],
		cropperChooseText : translations['DropdownChangePicture']['SAVE'],
		cropperCircleOverlay: true,
		cropperToolbarTitle: translations['DropdownChangePicture']['SELECT_PROFILE_PICTURE'],
		height: 480,
		includeBase64: true,
		mediaType: 'photo',
		useFrontCamera: true,
		width: 480
	};

	const openLibrary = () => {
		ImagePicker.openPicker(pickerOption).then(image => {
			changeImage(image);
		}).catch(e => {
			console.log(e);
		});
	};

	const openCamera = () => {
		ImagePicker.openCamera(pickerOption).then(image => {
			changeImage(image);
		}).catch(e => {
			console.log(e);
		});
	};

	const onChangeImageDropdown = (value) => {
		switch (value) {
			case 'TAKE_PHOTO':
				openCamera();
				break;
			case 'CHOOSE_FROM_LIBRARY':
				openLibrary();
				break;
			case 'DELETE_PROFILE_PICTURE':
				deleteImage();
				break;
			default:
				console.log('Error!');
				break;
		}
	};

	const createEvent = () => {
		navigation.navigate('EventDrawer', {
			screen: 'EventDetail',
			initial: true,
			params: {eventID: 'EVENT0001'}
		});
		alert('Create event');
	};

	const goBack = () => {
		navigation.pop();
	}

	return (
		<CreateEvent
			contentText={translations['CreateEvent']}
			eventNameText={translations['EventNameValidation']}
			image={image}
			name={name}
			validateName={isEventNameValid}
			setName={onChangeName}
			description={description}
			setDescription={onChangeDescription}
			nextButtonAccessbility={nextButtonAccessbility}
			confirmCreateText={translations['ConfirmCreateEvent']}
			dropdownChangePictureContext={translations['DropdownChangePicture']}
			onChangeImageDropdown={onChangeImageDropdown}
			goBack={goBack}
			createEvent={createEvent} />
	);
};

export default CreateEventPage;