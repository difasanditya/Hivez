import React, {useContext, useState} from 'react';
import {LocalizationContext} from '../utils/language.utils';
import GroupDetail from '../components/GroupDetail/GroupDetail.component';

const GroupDetailPage = ({route, navigation}) => {
	const { groupID } = route.params;
	console.log(groupID);

	const {translations, initializeAppLanguage} = useContext(LocalizationContext);
	initializeAppLanguage();

	const groupDetailDummy = {
		id: 'GROUP0001',
		image: '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',
		name: 'Lelaki Fearless',
		description: 'Ga ada loe ga rame'
	};

	const transactionListDummy = [{
		id: 'TRX0001',
		name: 'Beli Mangga',
		date: '2020-05-03 01:18:16',
		approver: 'Difa Sanditya',
		type: 'Debit',
		value: 150000,
		status: 'On Progress'
	}, {
		id: 'TRX0002',
		name: 'Beli Jambu',
		date: '2020-05-03 00:59:16',
		approver: 'Difa Sanditya',
		type: 'Credit',
		value: 50000,
		status: 'Approved'
	}, {
		id: 'TRX0003',
		name: 'Beli Mangga',
		date: '2020-05-02 23:59:16',
		approver: 'Samuel Theodorus',
		type: 'Debit',
		value: 150000,
		status: 'On Progress'
	}, {
		id: 'TRX0004',
		name: 'Beli Jambu',
		date: '2020-04-29 23:59:16',
		approver: 'Samuel Theodorus',
		type: 'Credit',
		value: 50000,
		status: 'Declined'
	}, {
		id: 'TRX0005',
		name: 'Beli Jambu',
		date: '2020-04-12 23:59:16',
		approver: 'Jeffebry Dale',
		type: 'Credit',
		value: 50000,
		status: 'On Progress'
	}, {
		id: 'TRX0006',
		name: 'Beli Mangga',
		date: '2020-04-11 23:59:16',
		approver: 'Difa Sanditya',
		type: 'Debit',
		value: 150000,
		status: 'On Progress'
	}, {
		id: 'TRX0007',
		name: 'Beli Jambu',
		date: '2020-04-03 02:59:16',
		approver: 'Difa Sanditya',
		type: 'Credit',
		value: 50000,
		status: 'Declined'
	}, {
		id: 'TRX0008',
		name: 'Beli Mangga',
		date: '2020-04-02 23:59:16',
		approver: 'Samuel Theodorus',
		type: 'Debit',
		value: 150000,
		status: 'Declined'
	}, {
		id: 'TRX0009',
		name: 'Beli Jambu',
		date: '2020-04-01 23:59:16',
		approver: 'Samuel Theodorus',
		type: 'Credit',
		value: 50000,
		status: 'Declined'
	}, {
		id: 'TRX0010',
		name: 'Beli Jambu',
		date: '2020-03-30 23:59:16',
		approver: 'Jeffebry Dale',
		type: 'Credit',
		value: 50000,
		status: 'Approved'
	}, {
		id: 'TRX0011',
		name: 'Beli Mangga',
		date: '2020-03-15 23:59:16',
		approver: 'Difa Sanditya',
		type: 'Debit',
		value: 150000,
		status: 'On Progress'
	}, {
		id: 'TRX0012',
		name: 'Beli Jambu',
		date: '2020-03-12 02:59:16',
		approver: 'Difa Sanditya',
		type: 'Credit',
		value: 50000,
		status: 'Approved'
	}, {
		id: 'TRX0013',
		name: 'Beli Mangga',
		date: '2020-03-02 23:59:16',
		approver: 'Samuel Theodorus',
		type: 'Debit',
		value: 150000,
		status: 'Declined'
	}, {
		id: 'TRX0014',
		name: 'Beli Jambu',
		date: '2020-03-01 23:59:16',
		approver: 'Samuel Theodorus',
		type: 'Credit',
		value: 50000,
		status: 'Approved'
	}, {
		id: 'TRX0015',
		name: 'Beli Jambu',
		date: '2020-02-12 23:59:16',
		approver: 'Jeffebry Dale',
		type: 'Credit',
		value: 50000,
		status: 'Approved'
	}];

	const [groupDetail, setGroupDetail] = useState(groupDetailDummy);
	const [billList, setBillList] = useState(transactionListDummy);
	const [transactionList, setTransactionList] = useState(transactionListDummy);

	const viewBillDetail = (billID) => {
		// navigation.navigate('BillDetails', {
		// 	billID: billID
		// });
		alert(`Navigate to bill detail ${billID}`);
	}

	const viewTransactionDetail = (transactionID) => {
		navigation.navigate('GroupTransactionDetail', {
			transactionID: transactionID
		});
	}

	const goBack = () => {
		navigation.replace('GroupList');
	}

	return (
		<GroupDetail
			contentText={translations['GroupDetail']}
			recentBillText={translations['RecentBill']}
			recentTransactionText={translations['RecentTransaction']}
			groupDetail={groupDetail}
			billList={billList}
			transactionList={transactionList}
			onBillClick={viewBillDetail}
			onTransactionClick={viewTransactionDetail}
			goBack={goBack} />
	);
};

export default GroupDetailPage;