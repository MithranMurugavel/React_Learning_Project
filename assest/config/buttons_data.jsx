import Accordian from "../Accordian";
import ColorPanel from "../ColorChangePannel";
import Qrcode from "../Qr_Code_Generator";
import StarRating from "../StarRating";
import TreeView from "../Tree_View";
import menus from "../Tree_View/data";
export const buttons = [
  { id: "Accordian", label: "Accordian", component: <Accordian/> },
  { id: "Colour", label: "Colour", component: <ColorPanel/> },
  { id: "StarRating", label: "Starrating", component: <StarRating value={10}/> },
  { id: "TreeView", label: "MenuTreeView", component: <TreeView menu={menus}/> },
  { id: "QRGenerator", label: "QrGenerator", component: <Qrcode/> },

];