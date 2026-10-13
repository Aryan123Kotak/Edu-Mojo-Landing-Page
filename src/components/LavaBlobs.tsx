import React from 'react';
import { InteractiveGridDotMatrix } from './InteractiveGridDotMatrix';

export const LavaBlobs: React.FC = () => {
  return <InteractiveGridDotMatrix initialMode="mesh" showHud={false} />;
};
