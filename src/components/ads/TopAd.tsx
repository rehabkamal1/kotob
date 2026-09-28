import React from 'react';
import { AdPlaceholder } from './AdPlaceholder';

export const TopAd: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 w-full">
      <AdPlaceholder slotName="أعلى الصفحة" format="horizontal" />
    </div>
  );
};
