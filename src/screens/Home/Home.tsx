import {Header} from '@src/components/ui/Header';
import {Stories} from '@src/components/ui/Stories';
import {Accounts} from '@src/components/Accounts';
import {ApplyNewProduct} from '@src/components/ApplyNewProduct';
import {Layout} from '@src/components/Layout';

export const Home = () => {
  return (
    <Layout>
      <Header />
      <Stories />
      <Accounts />
      <ApplyNewProduct />
    </Layout>
  );
};
