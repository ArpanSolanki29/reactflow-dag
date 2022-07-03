import React, { PropsWithChildren } from 'react'
import { Provider, useStoreApi, createStore } from '../store';

const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    let isWrapped = true;
  
    try {
      useStoreApi();
    } catch (e) {
      isWrapped = false;
    }
  
    if (isWrapped) {
      return <>{children}</>;
    }
  
    return <Provider createStore={createStore}>{children}</Provider>;
  };

export default Wrapper;