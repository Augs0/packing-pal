import db from '../firebase';

import { collection, query, getDocs } from 'firebase/firestore';

export const fetchLists = () => {
	const listsRef = collection(db, 'lists');
	const listsQuery = query(listsRef);

	return getDocs(listsQuery).then((snapshots) => {
		const listArr = [];

		snapshots.forEach((doc) => {
			const data = doc.data();
			data.uid = doc.id;
			data.items = [];

			for (const itemNumber in data.newItems) {
				const item = { ...data.newItems[itemNumber], itemNumber };
				data.items.push(item);
			}

			listArr.push(data);
		});

		return listArr;
	});
};
