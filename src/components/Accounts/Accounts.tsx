import {Text, View} from 'react-native';
import {useAccounts} from '@src/hooks/useAccounts';
import {Padding} from '@src/components/ui/Padding';
import {Loader} from '@src/components/ui/Loader';
import {Fragment} from 'react';
import {styles} from './Accounts.styles';
import {AccountItem} from '@src/components/ui/AccountItem';

export const Accounts = () => {
  const {accounts, isLoading} = useAccounts();

  return (
    <Padding>
      {isLoading ? (
        <Loader />
      ) : accounts.length ? (
        accounts.map((account, idx) => (
          <Fragment key={account._id}>
            <AccountItem account={account} />
            {idx + 1 !== accounts.length && <View style={styles.line} />}
          </Fragment>
        ))
      ) : (
        <Text>You don't have cards</Text>
      )}
    </Padding>
  );
};
