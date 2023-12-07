import React from 'react';
import {People} from '../../models';
import {ThumbNailSummaryContainer} from '../atoms/ThumbnailSummaryContainer';
import {ThumbNailImage} from '../atoms/ThumbnailImage';

export const ThumbNailSummary = ({
  item,
  uri,
}: {
  item: People;
  uri: string;
  notAvailable: boolean;
}) => {
  return (
    <ThumbNailSummaryContainer item={item}>
      <ThumbNailImage uri={uri} />
    </ThumbNailSummaryContainer>
  );
};
