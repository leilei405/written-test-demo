// 1. 在context里保存values也就是Store的值
// 2. 然后添加 setValues来修改values
// 3. onValueChange监听value变化

import { createContext } from 'react';

export interface FormContextProps {
  values?: Record<string, any>;
  setValues?: (values: Record<string, any>) => void;
  onValueChange?: (key: string, value: any) => void;
}

export default createContext<FormContextProps>({})

