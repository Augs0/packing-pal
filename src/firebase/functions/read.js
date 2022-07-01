import db from '../firebase';

import { doc, collection, query, where, getDoc, getDocs } from 'firebase/firestore';

export const fetchLists = () => {
	const listsRef = collection(db, 'lists');
	const listsQuery = query(listsRef);

	return getDocs(listsQuery).then((snapshots) => {
		const listArr = [];

		snapshots.forEach((doc) => {
			const data = doc.data();
			data.uid = doc.id;
			data.type = data.type;
			data.destination = data.destination;
			data.items = data.items.map((item) => item);
			listArr.push(data);
		});

		return listArr;
	});
};
