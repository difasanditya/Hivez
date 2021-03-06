import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {boxShadow, pageContainer, rootContainer, textPageHeader} from '../../styles/common.style';

export default StyleSheet.create({
	actionButtonContainer: {
		flexDirection: 'row',
		marginTop: theme.MARGIN_NARROW
	},
	actionButtonItem: {
		flex: 1,
		paddingHorizontal: theme.PADDING_NARROW,
		paddingVertical: theme.PADDING_DEFAULT
	},
	actionIcon: {
		color: theme.COLOR_GREY,
		fontSize: theme.FONT_SIZE_LARGE,
		textAlign: 'center'
	},
	actionText: {
		color: theme.COLOR_SOFT_GREY,
		fontSize: theme.FONT_SIZE_SMALL,
		marginTop: theme.MARGIN_EXTRA_NARROW,
		textAlign: 'center'
	},
	balanceContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: theme.PADDING_DEFAULT
	},
	balanceValueContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	balance: {
		color: theme.COLOR_GREEN,
		fontSize: theme.FONT_SIZE_LARGE,
		fontWeight: theme.FONT_WEIGHT_BOLD,
		marginRight: theme.MARGIN_NARROW
	},
	balanceIcon: {
		color: theme.COLOR_GREY,
		fontSize: theme.FONT_SIZE_MEDIUM
	},
	groupImageContainer: {
		alignSelf: 'center',
		borderRadius: 160/ 2,
		height: 160,
		marginBottom: theme.MARGIN_EXTRA_WIDE,
		marginTop: theme.MARGIN_EXTRA_WIDE_EXPANDED,
		overflow: 'hidden',
		width: 160
	},
	groupImage: {
		height: '100%',
		width: '100%'
	},
	groupName: {
		...textPageHeader,
		// marginTop: theme.MARGIN_DEFAULT
		textAlign: 'center'
	},
	groupDescription: {
		fontSize: theme.FONT_SIZE_LARGE,
		fontStyle: 'italic',
		marginBottom: theme.MARGIN_WIDE,
		marginTop: theme.MARGIN_NARROW,
		textAlign: 'center'
	},
	hidden: {
		display: 'none'
	},
	hideBalance: {
		color: theme.COLOR_GREY,
		fontSize: theme.FONT_SIZE_MEDIUM,
		fontWeight: theme.FONT_WEIGHT_BOLD,
		marginRight: theme.MARGIN_NARROW
	},
	itemText: {
		color: theme.COLOR_PRIMARY,
		fontSize: theme.FONT_SIZE_SUB_HEADER,
		fontWeight: theme.FONT_WEIGHT_BOLD
	},
	minus: {
		color: theme.COLOR_RED
	},
	pageContainer: {
		...pageContainer
	},
	pageContentView: {
		// ...pageContent
	},
	plus: {
		color: theme.COLOR_GREEN
	},
	rootContainer: {
		...rootContainer
	},
	sectionContainer: {
		...boxShadow,
		backgroundColor: theme.COLOR_WHITE,
		borderRadius: theme.ROUNDNESS_DEFAULT,
		marginHorizontal: theme.MARGIN_WIDE,
		marginBottom: theme.MARGIN_WIDE,
		overflow: 'hidden'
	},
	sectionHeader: {
		color: theme.COLOR_PRIMARY,
		fontSize: theme.FONT_SIZE_SUB_HEADER,
		fontWeight: theme.FONT_WEIGHT_BOLD,
		margin: theme.MARGIN_DEFAULT,
		marginBottom: 0
	},
	transactionList: {
		...boxShadow,
		marginBottom: theme.MARGIN_WIDE
	}
});