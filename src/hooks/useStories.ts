import {useState} from 'react';
import {IStory} from '@src/components/ui/Stories/type';

export const UseStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return {stories, isLoading};
};
