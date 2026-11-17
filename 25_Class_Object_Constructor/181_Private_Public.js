class Browser{
 constructor(name){
this.name =name;
this.isOpen =true;
console.log(name+"launched");
 }
startBrowser()
{
    console.log("Start Browser...Opened");
}
closeBrowser()
{
    console.log("Closing Browser...Closed");
}
}
let chrome= new Browser("Chrome");
let firefox= new Browser("Firefox");
console.log(chrome.isOpen);
chrome.startBrowser();
chrome.closeBrowser();