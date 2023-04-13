import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ text = "click", icon, type, onClick, total, center, right, circle, style, notificationNumber = 0, version }) {
   const buttonProps = {
      className: `button${center ? " center" : ""}${right ? " right" : ""}${circle ? " circle" : ""}${total ? " total" : ""}`,
      style,
   };

   if (onClick !== null) buttonProps.onClick = onClick;
   if (version !== null) buttonProps.version = version;
   if (notificationNumber !== 0) buttonProps["notificationnumber"] = notificationNumber;

   const buttonContent = (
      <>
         {
            circle && icon &&
            <FontAwesomeIcon icon={icon} size="6x" />
         }
         {
            !circle &&
            text
         }
      </>
   )

   return (
      <>
         {
            type !== "submit" &&
            <p {...buttonProps}>{buttonContent}</p>
         }
         {
            type === "submit" &&
            <button type="submit" {...buttonProps}>{buttonContent}</button>
         }
      </>
   );
}

export default Button;