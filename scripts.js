// change play speed by clicking speed setting element
function changePlaybackRate(speed){
    var setting = document.getElementsByClassName("ytp-button ytp-settings-button")[0];

    // this element actually has settings other than ones related to playback rate
    var speedSetting= document.getElementsByClassName("ytp-menuitem-label");
    setting.click();
    for (var i = 0; i < speedSetting.length; i++) {
        if (speedSetting[i].textContent == "再生速度") {
            speedSetting[i].click();
        }
        if (speedSetting[i].textContent == speed) {
            speedSetting[i].click();
        }
    }
    setting.click();
}


window.onload = function() {
    changePlaybackRate("標準");
    console.log("changed speed 1.0");         
    var videoLinks = document.getElementsByClassName( "style-scope ytd-watch-next-secondary-results-renderer" );
    for( var i = 0; i < videoLinks.length; i++ ) {
        videoLinks[i].onclick = function () {
            changePlaybackRate("標準");
            console.log("changed speed 1.0");        
        }
    }
};