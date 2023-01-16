import {TypeRootStackParamList} from './src/types/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TypeRootStackParamList {}
  }
}
