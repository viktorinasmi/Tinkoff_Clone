import {TypeRootStackParamList} from '@src/types/types';

export interface IFooterItem {
  iconName: string;
  title: keyof TypeRootStackParamList;
}
