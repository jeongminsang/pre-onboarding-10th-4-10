import { useRef } from 'react';
import { UseFocusProps } from '../types/todo';

const useFocus = (): UseFocusProps => {
  const ref = useRef<HTMLInputElement>(null);
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
