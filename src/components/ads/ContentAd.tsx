import React from 'react';
import { AdPlaceholder } from './AdPlaceholder';

export const ContentAd: React.FC = () => {
  return (
    <div className="w-full my-6">
      <AdPlaceholder slotName="داخل المحتوى" format="responsive" />
    </div>
  );
};
