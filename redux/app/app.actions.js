import { AppActionTypes } from "./app.types";
import ItemDescription from "../../components/itemDescription";

// Sets the currently active page
export const setActivePage = (activePage) => ({
  type: AppActionTypes.SET_ACTIVE_PAGE,
  payload: activePage,
});

// Sets the currently active page
export const setCurrentLevel = (currentLevel) => ({
  type: AppActionTypes.SET_CURRENT_LEVEL,
  payload: currentLevel,
});

// Toggles the Character Menu
export const toggleCharacterMenu = () => ({
  type: AppActionTypes.TOGGLE_CHARACTER_MENU,
});

// Toggles the Inventory Menu
export const toggleInventoryMenu = () => ({
  type: AppActionTypes.TOGGLE_INVENTORY_MENU,
});

// Toggles inventory category based on which one is clicked
export const toggleInventoryCategory = (inventoryCategory) => ({
  type: AppActionTypes.TOGGLE_INVENTORY_CATEGORY,
  payload: inventoryCategory,
});

// Toggles the Logs Menu
export const toggleLogsMenu = () => ({
  type: AppActionTypes.TOGGLE_LOGS_MENU,
});

// Toggles log category based on which one is clicked
export const toggleLogCategory = (logCategory) => ({
  type: AppActionTypes.TOGGLE_LOG_CATEGORY,
  payload: logCategory,
});

// Toggles default inventory information
export const toggleInventoryDefault = () => ({
  type: AppActionTypes.TOGGLE_INVENTORY_DEFAULT,
});

// Sets the item description for the currently selected item
export const setCurrentItemDescription = (itemDescription) => ({
  type: AppActionTypes.SET_CURRENT_ITEM_DESCRIPTION,
  payload: itemDescription,
});
