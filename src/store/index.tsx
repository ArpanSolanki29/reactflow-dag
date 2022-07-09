import React from 'react'
import create from 'zustand';
import initialState from './initialState';
import {DAGState, Node} from './state';


const useStore = () => create<DAGState>((set, get) => ({
    ...initialState,
    addNode: (nodes: Node[]) => set(state => ({
        ...state.nodes,
        nodes: nodes
    }))
}));

export default useStore;