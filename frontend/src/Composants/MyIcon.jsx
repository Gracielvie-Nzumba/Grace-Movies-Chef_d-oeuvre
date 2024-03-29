export default function MyIcon(props) {
    return (
        <div className="flex gap-3.5 pt-4">
          <img icon={props.icon} alt={props.styleName} />
          {props.text}
        </div>
    );
  }