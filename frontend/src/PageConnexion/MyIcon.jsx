import Shorts from "../BarNavigator/Shorts";
// import MyIcon from "../PageConnexion/MyIcon";
// import NavBar from '../NavBar';

export default function MyIcon(props) {
  return (
    <div>
      <div className="flex gap-3.5 pt-4">
        <img icon={props.icon} alt={props.styleName} />
        {props.text}
      </div>
      {/* <div>
        <NavBar/>
      </div> */}
    </div>
  );
}
