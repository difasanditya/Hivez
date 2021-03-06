import AsyncStorage from '@react-native-community/async-storage';

const keys = {
	'LANGUAGES': 'language',
	'USER_LOGIN_DATA': 'user_login_data'
};

const set = async (storageKey, data) => {
	try {
		await AsyncStorage.setItem(storageKey, data);
	} catch (e) {
		console.log(e);
	}
};

const get = async (storageKey) => {
	try {
		const value = await AsyncStorage.getItem(storageKey);
		return value;
	} catch (e) {
		console.log(e);
		return {};
	}
};

const remove = async (storageKey) => {
	try {
		await AsyncStorage.removeItem(storageKey);
	} catch (e) {
		console.log(e);
	}
};

const clear = async () => {
	try {
		for (var key in keys) {
			if (keys.hasOwnProperty(key)) {
				await AsyncStorage.removeItem(keys[key]);
			}
		}
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	keys,
	set,
	get,
	remove,
	clear
};