import { memo, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({
  text = "click",
  icon,
  type,
  onClick,
  total,
  center,
  right,
  circle,
  style,
  notificationNumber = 0,
  version,
}) {
  const buttonProps = {
    className: `button${center ? " center" : ""}${right ? " right" : ""}${
      circle ? " circle" : ""
    }${total ? " total" : ""}`,
    style,
    onClick,
    version,
    ["notification-number"]:
      notificationNumber > 0 ? notificationNumber : undefined,
  };

  const Content = useMemo(() => {
    if (!circle) {
      return text;
    }

    if (icon) {
      return <FontAwesomeIcon icon={icon} size="6x" />;
    }

    return null;
  }, [circle, icon, text]);

  switch (type) {
    case "submit": {
      return (
        <button type="submit" {...buttonProps}>
          {Content}
        </button>
      );
    }

    case "link": {
      return <a {...buttonProps}>{Content}</a>;
    }

    default: {
      return (
        <button type="button" {...buttonProps}>
          {Content}
        </button>
      );
    }
  }
}

export default memo(Button);

