import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {boxContainer, pageContainer, pageContent, rootContainer} from '../../styles/common.style';

export default StyleSheet.create({
	buttonFixed: {
		margin: theme.MARGIN_DEFAULT
	},
	boxContainer: {
		...boxContainer,
		flex: 1,
		maxHeight: theme.CONTAINER_WIDTH,
		maxWidth: theme.CONTAINER_WIDTH,
		padding: 0,
		overflow: 'hidden'
	},
	centerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	hidden: {
		display: 'none'
	},
	pageContainer: {
		...pageContainer
	},
	pageContentView: {
		...pageContent
	},
	rootContainer: {
		...rootContainer,
		padding: theme.PADDING_WIDE,
		backgroundColor: 'rgba(0,0,0,0.8)'
	},
	elementStyle: {
		paddingTop: theme.PADDING_DEFAULT
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	}
});