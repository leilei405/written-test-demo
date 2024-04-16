import React, {
  CSSProperties,
  useContext,
  ReactElement,
  ChangeEvent,
} from "react";
import classNames from "classnames";
import FormContext from "./formContexts";

export interface ItemProps {
  className?: string;
  style?: CSSProperties;
  name?: string | any;
  children?: ReactElement | any;
}

const getValueFromEvent = (e: ChangeEvent<HTMLInputElement>) => {
  const { target } = e;
  if (target.type === "checkbox") {
    return target.checked;
  } else if (target.type === "radio") {
    return target.value;
  }

  return target.value;
};

const Item = (props: ItemProps) => {
  const { className, children, style, name } = props;

  const { onValueChange } = useContext(FormContext);

  const childEle =
    React.Children.toArray(children).length > 1
      ? children
      : React.cloneElement(children!, {
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            const value = getValueFromEvent(e);
            onValueChange?.(name, value);
          },
        });

  const cls = classNames("ant-form-item", className);

  return (
    <div className={cls} style={style}>
      <div>{childEle}</div>
    </div>
  );
};

export default Item;
