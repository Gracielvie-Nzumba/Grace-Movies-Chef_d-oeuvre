export default function Image (props) {
    return <div>
        <img src={props.src} alt={props.text}/>
        {/* <img src="" alt="" /> */}
    </div>
}