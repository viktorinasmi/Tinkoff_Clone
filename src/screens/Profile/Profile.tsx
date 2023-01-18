import {useProfile} from '@src/hooks/useProfile';
import {Layout} from '@src/components/Layout';
import {Heading} from '@src/components/ui/Heading';
import {Loader} from '@src/components/ui/Loader';
import {Field} from '@src/components/ui/Field';
import {Button} from '@src/components/ui/Button';
import {logout} from '@src/firebase';

export const Profile = () => {
  const {isLoading: isProfileLoading, setName, name} = useProfile();
  const {} = useUpdateProfile();

  return (
    <Layout>
      <Heading text="Profile" isCenter={true} />
      {isProfileLoading ? (
        <Loader />
      ) : (
        <>
          <Field onChange={setName} value={name} placeholder={'Enter name'} />
          <Button onPress={() => {}} title="Update profile" />
          <Button onPress={logout} title="Logout" secondary={true} />
        </>
      )}
    </Layout>
  );
};
