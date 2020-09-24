import React from 'react';
import { useElements, TestLayout } from '@e2e-utils';
// @ts-ignore
import styles from './ImageBackgroundInline.less';

export default () => {
  const { elements, ref } = useElements();

  return (
    <TestLayout elements={elements}>
      <div ref={ref}>
        <span className={styles.checkPng} />
      </div>
    </TestLayout>
  );
};
