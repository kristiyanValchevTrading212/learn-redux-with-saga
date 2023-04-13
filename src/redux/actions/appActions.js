import { TOGGLE_SIDE_PANEL } from "../constants";

export const toggleSidePanel = (id, action) => {
   return {
      type: TOGGLE_SIDE_PANEL,
      payload: {
         id,
         action,
      },
   };
}