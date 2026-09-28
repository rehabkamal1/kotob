import React from 'react';
import { AdPlaceholder } from './AdPlaceholder';

export const BottomAd: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 w-full my-8">
      <AdPlaceholder slotName="أسفل الصفحة" format="horizontal" />
    </div>
  );
};
