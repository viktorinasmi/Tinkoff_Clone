import {Layout} from '@src/components/Layout';
import {Heading} from '@src/components/ui/Heading';
import {Contacts} from '@src/components/ui/Contacts/Contacts';
import {Other} from '@src/components/ui/Other';

export const Payments = () => {
  return (
    <Layout>
      <Heading text="Payment" />
      <Contacts />
      <Other />
    </Layout>
  );
};
