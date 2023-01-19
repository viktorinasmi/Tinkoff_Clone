import {useProfile} from '@src/hooks/useProfile';
import {Layout} from '@src/components/Layout';
import {Heading} from '@src/components/ui/Heading';
import {Loader} from '@src/components/ui/Loader';
import {Field} from '@src/components/ui/Field';
import {Button} from '@src/components/ui/Button';
import {useUpdateProfile} from '@src/hooks/useUpdateProfile';
import {useAuth} from '@src/hooks/useAuth';
import {Text, View} from 'react-native';
import {styles} from './Profile.styles';

export const Profile = () => {
  const {logout} = useAuth();
  const {isLoading: isProfileLoading, setName, name, profile} = useProfile();
  const {isLoading, isSuccess, updateProfile} = useUpdateProfile({
    name,
    docId: profile.docId,
  });

  return (
    <Layout>
      <Heading text="Profile" isCenter={true} />
      {isSuccess && (
        <View style={styles.containerSuccess}>
          <Text style={styles.successText}>Profile update successfully</Text>
        </View>
      )}
      {isProfileLoading || isLoading ? (
        <Loader />
      ) : (
        <>
          <Field onChange={setName} value={name} placeholder={'Enter name'} />
          <Button onPress={updateProfile} title="Update profile" />
          <Button onPress={logout} title="Logout" secondary={true} />
        </>
      )}
    </Layout>
  );
};
