import "../styles/navbar.css"
import {BsArrowRight} from "react-icons/bs"
import{AiOutlineStar, AiOutlineFork} from "react-icons/ai"

export default function Navbar(props){
    return(
        <nav>
            <a href="/" rel="noreferrer"><img className="peerlist-logo" src="./images/peerlist_logo.png" alt="Peerlist Logo" /></a>
            <div className="nav-right">
                <div className="git-btns">
                    <a href="https://github.com/vinitshahdeo/peerlist-readme-badge" target='_blank' rel='noreferrer'><button className="peerlist-star-btn">
                        <AiOutlineStar /><span>|</span><span>Star {props.star}</span>
                    </button></a>
                    <a href="https://github.com/vinitshahdeo/peerlist-readme-badge/fork" target='_blank' rel='noreferrer'><button className="peerlist-fork-btn">
                        <AiOutlineFork /><span>|</span><span>Fork {props.fork}</span>
                    </button></a>
                </div>
                <div>
                    <a href="https://www.peerlist.io" target='_blank' rel='noreferrer'><button className="peerlist-username-btn">
                        Get Your Peerlist Username <BsArrowRight />
                    </button></a>
                </div>
            </div>
        </nav>
    );
}