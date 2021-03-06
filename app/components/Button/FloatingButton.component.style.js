import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {boxShadow} from '../../styles/common.style';

export default StyleSheet.create({
	floatingButtonContainer: {
		...boxShadow,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: theme.MARGIN_NARROW,
		right: theme.MARGIN_NARROW,
		height: theme.ACTION_BUTTON_SIZE,
		width: theme.ACTION_BUTTON_SIZE,
		borderRadius: theme.ACTION_BUTTON_SIZE/2,
		backgroundColor: theme.COLOR_PRIMARY
	},
	floatingButtonIcon: {
		color: theme.COLOR_WHITE,
		fontSize: theme.FONT_SIZE_LARGE
	}
});