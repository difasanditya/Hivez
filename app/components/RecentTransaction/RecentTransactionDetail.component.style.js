import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {textHighlight, textPageSubHeader} from '../../styles/common.style';

export default StyleSheet.create({
	allTransactionButton: {
		alignItems: 'flex-end',
		flexDirection: 'row'
	},
	allTransactionIcon: {
		color: theme.COLOR_PRIMARY,
		marginLeft: theme.MARGIN_NARROW
	},
	allTransactionText: {
		...textHighlight
	},
	container: {
		backgroundColor: theme.COLOR_WHITE,
		borderRadius: theme.ROUNDNESS_DEFAULT,
		marginHorizontal: theme.MARGIN_WIDE,
		overflow: 'hidden',
		paddingVertical: theme.PADDING_DEFAULT
	},
	filterList: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginHorizontal: theme.MARGIN_DEFAULT
	},
	filterButton: {
		alignSelf: 'center',
		borderRadius: theme.ROUNDNESS_MINIMUM,
		backgroundColor: theme.COLOR_WHITE,
		borderColor: theme.COLOR_GREY,
		borderWidth: theme.BORDER_THIN,
		marginRight: theme.MARGIN_NARROW,
		padding: 6
	},
	filterButtonActive: {
		backgroundColor: theme.COLOR_PRIMARY,
		borderColor: theme.COLOR_PRIMARY
	},
	filterText: {
		color: theme.COLOR_SOFT_GREY,
		fontSize: theme.FONT_SIZE_SMALL,
	},
	filterTextActive: {
		color: theme.COLOR_WHITE
	},
	headerSecion: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: theme.MARGIN_DEFAULT,
		marginTop: 0
	},
	headerTextContainer: {
		flexDirection: 'column'
	},
	headerText: {
		...textHighlight,
		fontSize: theme.FONT_SIZE_SUB_HEADER
	},
	hidden: {
		display: 'none'
	},
	noRecentTransaction: {
		color: theme.COLOR_SOFT_GREY,
		fontSize: theme.FONT_SIZE_MEDIUM,
		textAlign: 'center',
	},
	transactionDate: {
		...textPageSubHeader,
		fontSize: theme.FONT_SIZE_SMALL,
		marginTop: theme.MARGIN_EXTRA_NARROW
	},
	transactionDescriptionContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		flexGrow: 1,
		justifyContent: 'space-between'
	},
	transactionDetailContainer: {
		flexDirection: 'row'
	},
	transactionDetailIcon: {
		color: theme.COLOR_GREY,
		marginLeft: theme.MARGIN_NARROW
	},
	transactionDetail: {
		...textPageSubHeader,
		fontSize: theme.FONT_SIZE_SMALL
	},
	transactionImage: {
		borderRadius: 48/2,
		flexGrow: 0,
		height: 48,
		marginRight: theme.MARGIN_DEFAULT,
		width: 48
	},
	transactionItem: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: theme.PADDING_NARROW,
		paddingVertical: theme.PADDING_EXTRA_NARROW
	},
	transactionListContainer: {
		marginTop: theme.MARGIN_DEFAULT
	},
	transactionName: {
		...textHighlight,
		color: theme.COLOR_SOFT_GREY,
	},
	transactionTitleContainer: {
		flexDirection: 'column'
	},
	transactionValueContainer: {
		alignItems: 'center',
		flexDirection: 'row'
	},
	transactionValue: {
		fontSize: theme.FONT_SIZE_MEDIUM,
		fontWeight: theme.FONT_WEIGHT_BOLD
	},
	separator: {
		backgroundColor: theme.COLOR_GREY,
		opacity: 0.5,
		height: 1,
		marginBottom: theme.MARGIN_NARROW,
		marginLeft: (theme.MARGIN_DEFAULT + 40)
	},
	subHeaderText: {
		color: theme.COLOR_SOFT_GREY,
		marginTop: theme.MARGIN_EXTRA_NARROW
	},
	expense: {
		color: theme.COLOR_RED,
	},
	income: {
		color: theme.COLOR_GREEN,
	},
});