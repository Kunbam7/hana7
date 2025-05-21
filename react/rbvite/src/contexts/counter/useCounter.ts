import { useContext } from 'react';
import { CounterContext } from './CounterContex';

export const useCounter = () => useContext(CounterContext);