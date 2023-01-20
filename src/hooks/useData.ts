import {useContext} from 'react';
import {DataContext} from '@src/providers/DataProvider';

export const useData = () => useContext(DataContext);
