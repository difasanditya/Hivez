import React, {useContext, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {GroupContext} from '../../contexts/group.context';
import {LocalizationContext} from '../../contexts/language.context';
import {SpinnerContext} from '../../contexts/spinner.context';
import {UserContext} from '../../contexts/user.context';
import {where} from '../../utils/query.utils';
import GroupBillCreationList from '../../components/Group/GroupBillCreationList.component';
import {get} from '../../utils/api.utils';

const GroupBillCreationListPage = ({route, navigation}) => {
	const {groupID} = route.params;

	const {groupData, initializeGroupData} = useContext(GroupContext);
	const {appLanguage, translations} = useContext(LocalizationContext);
	const {showSpinner, hideSpinner} = useContext(SpinnerContext);
	const {userData} = useContext(UserContext);

	const [displayedBillStatus, setDisplayedBillStatus] = useState('NOT_COMPLETED');
	const [billList, setBillList] = useState([]);
	const [displayedBillList, setDisplayedBill] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const customSelectBill = (billList, status) => {
		if (status === 'COMPLETED') return where(billList, 'status', checkItem => checkItem === 'APPROVED');
		return where(billList, 'status', checkItem => checkItem !== 'APPROVED');
	};

	useFocusEffect(
		useCallback(() => {
			const fetchData = async () => {
				showSpinner();
				try {
					await initializeGroupData(groupID, userData.id);
					const bills = await get(`/bills/groups/${groupID}/pending/lists`);
					const billLists = bills['output_schema'].map(item => {
						return {
							id: item['bill_id'],
							name: item['bill_description'],
							date: item['creation_date'],
							value: item['bill_amount'],
							requester: item['creator_name'],
							status: item['approval_status'],
							image: item['creator_picture']
						}
					});
					setBillList(billLists);
					setDisplayedBill(customSelectBill(billLists, displayedBillStatus));
				} catch (error) {
					console.log(error.stack);
				};
				hideSpinner();
			};
			fetchData();
		}, [])
	);

	const onChangeDisplayedBillStatus = (status) => {
		setDisplayedBillStatus(status);
		const currentList = customSelectBill(billList, status);
		if(searchValue === '') setDisplayedBill(currentList);
		else setDisplayedBill(where(currentList, 'name', checkItem => checkItem.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0));
	};

	const onChangeSearch = (searchQuery) => {
		setSearchValue(searchQuery);
		const currentList = customSelectBill(billList, displayedBillStatus);
		if(searchQuery === '') setDisplayedBill(currentList);
		else setDisplayedBill(where(currentList, 'name', checkItem => checkItem.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0));
	};

	const navigateToBillDetail = (billID) => {
		navigation.navigate('GroupBillApproval', {
			billID: billID,
			groupID: groupID
		});
	};

	const goBack = () => {
		navigation.replace('GroupList');
	};

	const openDrawer = () => {
		navigation.openDrawer();
	};

	return (
		<GroupBillCreationList
			contentText={translations['GroupBillCreationList']}
			groupDetail={groupData}
			displayedBillStatus={displayedBillStatus}
			setDisplayedBillStatus={onChangeDisplayedBillStatus}
			billList={displayedBillList}
			searchValue={searchValue}
			onChangeSearch={onChangeSearch}
			navigateToBillDetail={navigateToBillDetail}
			openDrawer={openDrawer}
			goBack={goBack} />
	);
};

export default GroupBillCreationListPage;