import chef_claude_icon from "../assets/chef-claude-icon.png"

export default function Header(){
    return(
        <header>
            <img src={chef_claude_icon} alt="Chef Claude Icon" className="chef-claude-icon"></img>
            <h1>Chef Claude</h1>
        </header>
    )
}