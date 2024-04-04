export default function MyImage (props) {
    return <div>
        <img src={props.src} alt={props.text}/>
        {/* <img src="" alt="" /> */}
    </div>
}