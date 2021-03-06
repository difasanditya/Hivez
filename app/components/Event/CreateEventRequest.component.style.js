import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {boxShadow, pageContainer, rootContainer, textHighlight, textPageHeader} from '../../styles/common.style';

export default StyleSheet.create({
	button: {
		// flex: 1
	},
	changePictureButton: {
		flex: 1,
		marginLeft: theme.MARGIN_NARROW
	},
	createRequestContainer: {
		...boxShadow,
		backgroundColor: theme.COLOR_WHITE,
		borderRadius: theme.ROUNDNESS_DEFAULT,
		margin: theme.MARGIN_WIDE,
		padding: theme.PADDING_DEFAULT,
	},
	eventImage: {
		alignSelf: 'center',
		borderRadius: 120/ 2,
		height: 120,
		marginBottom: theme.MARGIN_DEFAULT,
		width: 120
	},
	eventName: {
		color: theme.COLOR_SOFT_GREY,
		fontSize: theme.FONT_SIZE_SUB_HEADER,
		fontWeight: theme.FONT_WEIGHT_BOLD,
		textAlign: 'center'
	},
	header: {
		...textPageHeader,
		marginBottom: theme.MARGIN_EXTRA_WIDE,
		marginTop: theme.MARGIN_EXTRA_WIDE_EXPANDED,
		textAlign: 'center'
	},
	hidden: {
		display: 'none'
	},
	icon: {
		color: theme.COLOR_WHITE,
		marginRight: theme.MARGIN_NARROW
	},
	noMargin: {
		marginLeft: 0
	},
	noPreview: {
		flexDirection: 'column',
		marginBottom: theme.MARGIN_DEFAULT
	},
	numberField: {
		marginBottom: theme.MARGIN_NARROW
	},
	pageContainer: {
		...pageContainer
	},
	pageContentView: {
		// ...pageContent
	},
	pictureConfigContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: theme.MARGIN_DEFAULT
	},
	rootContainer: {
		...rootContainer
	},
	selectPayee: {
		marginBottom: theme.MARGIN_DEFAULT
	},
	switch: {
		margin: theme.MARGIN_WIDE,
		marginBottom: 0
	},
	textField: {
		marginBottom: theme.MARGIN_DEFAULT
	},
	timePicker: {
		marginBottom: theme.MARGIN_DEFAULT
	},
	viewImageContainer: {
		flex: 1,
		marginRight: theme.MARGIN_NARROW
	},
	viewImage: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: theme.COLOR_PRIMARY,
		borderRadius: theme.ROUNDNESS_DEFAULT,
		height: 40,
		justifyContent: 'center'
	},
	viewImageText: {
		...textHighlight,
		color: theme.COLOR_WHITE
	},
	income: {
		color: theme.COLOR_GREEN
	},
	expense: {
		color: theme.COLOR_RED
	},
});