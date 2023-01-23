import {IFooterItem} from '@src/components/Footer/types';

export interface IOtherItem extends Pick<IFooterItem, 'iconName'> {
  title: string;
}
