import React, {useContext} from 'react';
import {Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {GroupContext} from '../../contexts/group.context';
import {LocalizationContext} from '../../contexts/language.context';
import {UserContext} from '../../contexts/user.context';
import ConfirmModal from '../Modal/ConfirmModal.component';
import styles from './GroupDrawer.component.style';

const DrawerItem = (props) => {
	return (
		<TouchableHighlight
			activeOpacity={1}
			accessibilityRole='button'
			onPress={() => {
				props.navigation.closeDrawer();
				props.onPress();
			}}
			style={[styles.button, props.isFocused ? styles.buttonFocused : {}]}
			underlayColor={props.isFocused ? '#FFC60B' : 'rgba(0,0,0,0.05)'}>
			<View style={styles.buttonContainer}>
				<FontAwesome5 name={props.icon} solid style={[styles.buttonIcon, props.textStyle, props.isFocused ? styles.buttonIconFocused : {}]} />
				<Text style={[styles.buttonText, props.textStyle, props.isFocused ? styles.buttonTextFocused : {}]}>{props.text}</Text>
			</View>
		</TouchableHighlight>
	);
};

const GroupDrawer = ({state, descriptors, navigation}) => {
	const {translations} = useContext(LocalizationContext);
	const {groupData} = useContext(GroupContext);
	const {userData} = useContext(UserContext);

	const groupID = state ? state.routes[state.index].params.groupID : '';

	const leaveGroup = (groupID) => {
		navigation.closeDrawer();
		navigation.replace('GroupList');
		alert(`User ${userData['id']} leave group: ${groupID}`);
	};
	
	return (
		<ScrollView showsVerticalScrollIndicator={false} >
			<View style={styles.headerContainer}>
				<Image
					source={groupData.image === '' ? require('../../assets/images/DefaultGroupImage.png') : {uri: `data:image/jpeg;base64,${groupData.image}`}}
					style={styles.groupImage}/>
				<Text style={styles.header}>{groupData.name}</Text>
				<Text style={styles.subHeader}>{`${translations['GroupDrawerNavigator'][groupData.role]}`}</Text>
			</View>
			{state.routes.map((route, index) => {
				const {options} = descriptors[route.key];

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'draweItemPress',
						target: route.key,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, {
							...route.params,
							groupID: groupID
						});
					}
				};

				return (
					<DrawerItem
						icon={options.icon}
						isFocused={isFocused}
						key={index}
						navigation={navigation}
						onPress={onPress}
						text={translations['GroupDrawerNavigator'][options.text]} />
				);
			})}
			<ConfirmModal
				contentText={translations['ConfirmLeaveGroup']}
				action={() => leaveGroup(groupID)}
				style={styles.button}>
				<View style={styles.buttonContainer}>
					<FontAwesome5 name={'door-open'} solid style={[styles.buttonIcon, styles.leave]} />
					<Text style={[styles.buttonText, styles.leave]}>{translations['GroupDrawerNavigator']['LEAVE_GROUP']}</Text>
				</View>
			</ConfirmModal>
		</ScrollView>
	);

	
};

export default GroupDrawer;