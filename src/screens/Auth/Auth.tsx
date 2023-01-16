import {Pressable, Text, View} from 'react-native';
import {FC, useState} from 'react';
import {styles} from '@src/screens/Auth/Auth.styles';
import {useAuth} from '@src/hooks/useAuth';
import {Loader} from '@src/components/ui/Loader';
import {Field} from '@src/components/ui/Field';
import {Button} from '@src/components/ui/Button';

interface IData {
  email: string;
  password: string;
}

export const Auth: FC = () => {
  const {isLoading} = useAuth();

  const [data, setData] = useState({} as IData);
  const [isReg, setIsReg] = useState(false);

  const authHandler = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.itemContainer}>
          <Text style={styles.headerText}>{isReg ? 'Sing Up' : 'Sing In'}</Text>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                value={data.email}
                placeholder="Enter email"
                onChange={value => setData({...data, email: value})}
              />
              <Field
                value={data.password}
                placeholder="Enter password"
                onChange={value => setData({...data, password: value})}
                isSecure={true}
              />
              <Button onPress={authHandler} title={"Let's go"} />
              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={styles.regButtonText}>
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};
