import { TOGGLE_SIDE_PANEL } from "../constants";

const initialState = {

};

export const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_SIDE_PANEL:
         const sidePanelID = `${action.payload.id}SidePanel`;
         return {
            ...state,
            [sidePanelID]: action.payload.action !== undefined ? action.payload.action : state[sidePanelID] ? false : true,
         };

      default: return state;
   }
}