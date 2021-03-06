import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {boxShadow, pageContainer, rootContainer, textHighlight, textPageHeader, textPageSubHeader} from '../../styles/common.style';

export default StyleSheet.create({
	boxShadow: {
		...boxShadow,
	},
	editIcon: {
		color: theme.COLOR_PRIMARY,
		marginLeft: theme.MARGIN_NARROW
	},
	editListButton: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	favouriteGroup: {
		marginTop: theme.MARGIN_DEFAULT
	},
	favouriteGroupWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: theme.MARGIN_EXTRA_WIDE,
	},
	groupApprovalCard: {
		marginHorizontal: theme.MARGIN_WIDE,
		marginTop: 0,
		marginBottom: theme.MARGIN_EXTRA_WIDE
	},
	header: {
		...textPageHeader,
		marginTop: theme.MARGIN_EXTRA_WIDE,
		marginBottom: theme.MARGIN_EXTRA_NARROW
	},
	hidden: {
		display: 'none'
	},
	indentSection: {
		paddingHorizontal: theme.PADDING_WIDE
	},
	textHighlight: {
		...textHighlight
	},
	pageContainer: {
		...pageContainer
	},
	pageContentView: {
		// ...pageContent
	},
	recentTransaction: {
		...boxShadow,
		marginBottom: theme.MARGIN_WIDE
	},
	rootContainer: {
		...rootContainer
	},
	subHeader: {
		...textPageSubHeader
	}
});