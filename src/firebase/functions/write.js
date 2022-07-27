import db from '../firebase';

import { doc, updateDoc } from 'firebase/firestore';

export const updateList = (listId, itemId, packedStatus) => {
	const itemRef = doc(db, 'lists', `${listId}`);
	// console.log(listId, itemId, packedStatus, 'write')
	return updateDoc(itemRef, {
		[`newItems.${itemId}.packed`]: !packedStatus
	});
};
