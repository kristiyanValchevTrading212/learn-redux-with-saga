import { useDispatch, useSelector } from "react-redux";
import { toggleSidePanel } from "../../redux/actions/appActions";

function SidePanel({ id, children, backgroundDark }) {
   const dispatch = useDispatch();
   const appData = useSelector(state => state.appData);

   return (
      <div className={`sidePanel${appData[`${id}SidePanel`] ? " opened" : ""}${backgroundDark ? " backgroundDark" : ""}`} onClick={event => dispatch(toggleSidePanel(id))}>
         <div className="sidePanelContent" onClick={event => event.stopPropagation()}>
            {children}
         </div>
      </div>
   );
}

export default SidePanel;