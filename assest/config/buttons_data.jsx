import Accordian from "../Accordian";
import ColorPanel from "../ColorChangePannel";
import StarRating from "../StarRating";
import TreeView from "../Tree_View";
import menus from "../Tree_View/data";
export const buttons = [
  { id: "Accordian", label: "Accordian", component: <Accordian/> },
  { id: "Colour", label: "Colour", component: <ColorPanel/> },
  { id: "StarRating", label: "Starrating", component: <StarRating value={10}/> },
  { id: "TreeView", label: "MenuTreeVIew", component: <TreeView menu={menus}/> },

];