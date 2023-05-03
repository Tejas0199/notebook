import { Link } from "react-router-dom"
import './style.css';
const linkOptions = [{
    label : "Profile",
    url_path : "/profile",
    icon : <i className="fa fa-user"></i>
},{
    label : "Books",
    url_path : "/books",
    icon : <i className="fa fa-book"></i>
},{
    label : "Posts",
    url_path : "/posts",
    icon : <i className="fa fa-image"></i>
}]

const SideBar = () => {
    return <div className="sidebar">
        <div>
            {
                linkOptions.map((option,index) => <SidebarOptions key={index} option={option}/>)
            }
        </div>
        <div>
            <Link>Log-out</Link>
        </div>
    </div>
}

const SidebarOptions = ({option : {label,url_path,icon}}) => {
    return <div>
        <Link to={url_path}>
            {icon}
            <p>{label}</p>
        </Link>
    </div>
}

export default SideBar;