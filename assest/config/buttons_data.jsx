import Accordian from "../Accordian";
import ColorPanel from "../ColorChangePannel";
import GitFinder from "../GitHubProfileFinder";
import Qrcode from "../Qr_Code_Generator";
import ScrollProgress from "../ScrollProgress";
import Suggession from "../searchSugg";
import StarRating from "../StarRating";
import TestTab from "../TabContent/Testtab";
import TreeView from "../Tree_View";
import menus from "../Tree_View/data";
export const buttons = [
  { id: "Accordian", label: "Accordian", component: <Accordian /> },
  { id: "Colour", label: "Colour", component: <ColorPanel /> },
  { id: "StarRating", label: "Star Rating", component: <StarRating value={10} /> },
  { id: "TreeView", label: "Menu Tree View", component: <TreeView menu={menus} /> },
  { id: "QRGenerator", label: "QR Generator", component: <Qrcode /> },
  { id: "ScrollPercentage", label: "Scroll Percentage", component: <ScrollProgress url={"https://dummyjson.com/products?limit=100"} /> },
  { id: "Multi-Tab", label: "Multi-Tab", component: <TestTab /> },
  { id: "GitHub", label: "GitHubFinder", component: <GitFinder/> },
  { id: "AutoSearch", label: "AutoSearch", component: <Suggession/> },

];