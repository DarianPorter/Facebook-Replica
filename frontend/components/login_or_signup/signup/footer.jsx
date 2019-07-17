import React from 'react'

export default ()=>{
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="lan">
                    <ul>
                        <li id="eng"> English (US)</li>
                        <li>Français (France)</li>
                        <li>Español</li>
                        <li>中文(简体)</li>
                        <li>العربية</li>
                        <li>Português (Brasil)</li>
                        <li>Italiano</li>
                        <li>한국어</li>
                        <li>Deutsch</li>
                        <li>हिन्दी</li>
                        <li>日本語</li>
                    </ul>
                </div>
                <div className="seperator">

                </div>
                <div className="ui-list">   
                    <i className="fab fa-github" onClick={() => {
                        window.open("https://github.com/DarianPorter" ,'_blank').focus();}}>
                    </i>
                    <i className="fab fa-angellist" onClick={() => {
                        window.open("https://angel.co/darian-baptiste?public_profile=1", '_blank').focus();}}>
                    </i>
                    <i className="fab fa-linkedin" onClick={() => {
                        window.open("https://www.linkedin.com/in/darian-baptiste-09a8aa189/", '_blank').focus();}}>
                    </i>
                    <i className="fas fa-globe" onClick={() => {
                        window.open("https://darianporter.github.io/", '_blank').focus();}}>
                    </i>
                </div>
            </div>
        </div>
    )
}