import React, { CSSProperties, useState, FormEvent, ReactNode } from "react";
import classNames from "classnames";
import FormContext from "./formContexts";

// 参数传入初始值 initialValues
// 点击提交的回调 onFinish
// 点击提交有错误时的回调 onFinishFailed。
// 这里的 Record<string,any>是ts的类型，任意的对象的意思。
// 用useState保存values，用useRef保存errors和validator
export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  className?: string;
  style?: CSSProperties;
  onFinish?: (values: Record<string, any>) => void;
  initialValues?: Record<string, any>;
  children?: ReactNode;
}

const Form = (props: FormProps) => {
  const { className, style, children, onFinish, initialValues } = props;

  const [values, setValues] = useState<Record<string, any>>(
    initialValues || {}
  );

  // onValueChange 的时候就是修改 values 的值
  const onValueChange = (key: string, value: any) => {
    values[key] = value;
  };

  // submit 的时候调用 onFinish 传入 values
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onFinish?.(values);
  };

  const cls = classNames("ant-form", className);

  // 然后把这些方法保存到 context 中，并且给原生 form 元素添加 onSubmit 的处理
  return (
    <FormContext.Provider
      value={{
        onValueChange,
        values,
        setValues: (v) => setValues(v),
      }}
    >
      <form className={cls} style={style} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
