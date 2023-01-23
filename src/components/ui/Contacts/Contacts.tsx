import {ScrollView, View} from 'react-native';
import {useContacts} from '@src/hooks/useContacts';
import {FC} from 'react';
import {styles} from './Contacts.styles';
import {SubHeading} from '@src/components/ui/SubHeading';
import {Loader} from '@src/components/ui/Loader';
import {ContactItem} from '@src/components/ui/ContactItem';

export const Contacts: FC = () => {
  const {contacts, isLoading} = useContacts();
  return (
    <View style={styles.container}>
      <SubHeading text="Phone transfers" />
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          style={styles.isLoaderScroll}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {contacts.map(c => {
            <ContactItem key={c._id} contact={c} />;
          })}
        </ScrollView>
      )}
    </View>
  );
};
