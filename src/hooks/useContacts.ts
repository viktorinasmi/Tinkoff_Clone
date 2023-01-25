import {useEffect, useState} from 'react';
import {IContact} from '@src/components/ui/Contacts/types';
import {useAuth} from '@src/hooks/useAuth';
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import {db} from '@src/firebase';
import {IProfile} from '@src/hooks/useProfile';

export const useContacts = () => {
  const {user} = useAuth();
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  //Get users
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'accounts'), where('userId', '!=', user?.uid)),
        async snapshot => {
          const contactsFire = await Promise.all(
            snapshot.docs.map(async d => {
              const data = d.data() as IContact & {
                userId: string;
              };

              let displayName = ' ';

              //get all docs
              const q = query(
                collection(db, 'users'),
                where('_id', '==', data.userId),
              );

              const querySnapshot = await getDocs(q);

              //overwritten docs
              querySnapshot.forEach(doc => {
                displayName = (doc.data() as IProfile).displayName;
              });

              return {
                ...data,
                id: d.id,
                displayName,
              };
            }),
          );

          //clear duplicate user(card)
          setContacts(
            contactsFire
              .filter(
                (v, i, a) =>
                  a.findIndex(t => t.displayName === v.displayName) === i,
              )
              .filter(i => i.displayName), //availability displayName
          );
          setIsLoading(false);
        },
      ),
    [user?.uid],
  );

  return {contacts, isLoading};
};
