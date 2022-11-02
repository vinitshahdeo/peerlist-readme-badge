import "../styles/generator.css"
import { useState } from "react";
import { SiPostman, SiTwitter } from "react-icons/si"

export default function Generator(props){
    const [profile, setProfile] = useState(false);
    const [src, setSrc] = useState("");
    const [markdown, setMarkdown] = useState("");
    const [html, setHTML] = useState("");

    const handleSubmit = event =>{
        event.preventDefault();
        const peerlistName = document.getElementsByName("generator-name")[0].value;
        const peerlistStyle = document.getElementsByName("generator-dropdown")[0].value;
        const peerlistUsername = document.getElementsByName("generator-username")[0] && document.getElementsByName("generator-username")[0].value;
        setSrc(`https://peerlist-readme-badge.herokuapp.com/api/${peerlistName}?style=${peerlistStyle}`);
        setHTML(`<img src="https://peerlist-readme-badge.herokuapp.com/api/${peerlistName}?style=${peerlistStyle}" alt="Peerlist Badge" />`)
        if(peerlistUsername){
            setMarkdown(`[![Peerlist](https://peerlist-readme-badge.herokuapp.com/api/${peerlistName}?style=${peerlistStyle})](https://peerlist.io/${peerlistUsername})`);
        }else{
            setMarkdown(`![Peerlist](https://peerlist-readme-badge.herokuapp.com/api/${peerlistName}?style=${peerlistStyle})`);
        }
        
    }


    return(
        <div className="generator">
            <h1><span className="generator-peerlist">Peerlist</span> Readme Badge Generator</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-div name-div">
                    <label>Enter your name <span className="asterisk">*</span></label>
                    <input name="generator-name" type='text' className="generator-name" required />
                </div>

                <div className="input-div style-div">
                    <label>Choose your style <span className="asterisk">*</span></label>
                    <select name="generator-dropdown" className="generator-dropdown">
                        <option defaultValue value='flat'>flat</option>
                        <option value='flat-square'>flat-square</option>
                        <option value='plastic'>plastic</option>
                        <option value='social'>social</option>
                        <option value='for-the-badge'>for-the-badge</option>
                    </select>
                </div>


                <div onChange={() => setProfile(!profile)} className="checkbox-input"><input className="checkbox" type='checkbox'/><span>Link to Peerlist Profile</span></div>

                {profile?<div className="input-div username-div">
                    <label>Peerlist Username <span className="asterisk">*</span></label>
                    <input type='text' name="generator-username" className="generator-username" required />
                </div>:<></>
                }
                
                {src?<img className="peerlist-badge" src={src} alt="Peerlist Badge"/>:<></>}
                <button type="submit" onSubmit={handleSubmit} className="peerlist-generate">Generate Badge</button>  
            </form>
            <a className="topmate-link" href="https://topmate-readme-badge.netlify.app/" target='_blank' rel='noreferrer'>Click here to get your <span className="topmate-span">Topmate.io badge</span><span className="topmate-arrow">↗</span></a>

            {markdown?<div className="markdown-div">
                <h3 className="markdown-heading">Markdown</h3>
                <div className="markdown-text">{markdown}</div>
            </div>:<></>}

            {html?<div className="html-div">
                <h3 size='md' className="html-heading">HTML</h3>
                <div className="html-text">{html}</div>
            </div>:<></>}

            <div className="external-links">
                <button className="postman-btn"><SiPostman />Run on Postman</button>
                <button className="twitter-btn"><SiTwitter />Share on Twitter</button>
            </div>
        </div>
    );
}