import { memo, useCallback } from "react";

function InputFieldIterator({
  count = 0,
  min,
  max,
  onNumberUp = () => null,
  onNumberDown = () => null,
  className = "",
}) {
  const onUpClicked = useCallback(() => {
    if (count >= max) return;

    onNumberUp();
  }, [count, max, onNumberUp]);

  const onDownClicked = useCallback(() => {
    if (count <= min) return;

    onNumberDown();
  }, [count, min, onNumberDown]);

  return (
    <div
      className={`inputFieldIterator${className !== "" ? ` ${className}` : ""}`}
    >
      <div className="inputFieldIteratorElement">{count}</div>
      <div className="inputFieldIteratorElement">
        <div className="inputFieldIteratorElementButton" onClick={onUpClicked}>
          +
        </div>
        <div
          className="inputFieldIteratorElementButton"
          onClick={onDownClicked}
        >
          -
        </div>
      </div>
    </div>
  );
}

export default memo(InputFieldIterator);

