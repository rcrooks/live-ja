var appID = "00c26be3-4421-41e6-bb00-1dee68740f67"; 
// token for anonymous profile
var token =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODI4MDQzNDF9.RYf2x65FXvdDURzM h00i76KfUrYlsDLsw6mVuEv6zmE';
// -----
  Talla.config = Talla.init(
    appID,
    Talla.OptionJWTCredentials(token), 
    Talla.OptionBotName("Brightcove Live Doc Search"),
    Talla.OptionAnonymous(true),
    Talla.OptionThemeColor('rgb(149, 192, 57)'),
    Talla.OptionDisplayName('Search Brightcove Live Docs'),
    Talla.OptionKnowledgeGroups(['6143c1e1-558c-408f-9d8d-86fcf3b9e2ef']),
    Talla.OptionWideBeacon(true),
    Talla.OptionBeaconCTA("Have a question?"),
    Talla.OptionOpenIcon('https://learning-services-media.brightcove.com/doc-assets/site-assets/images/site/search.png'),
    Talla.OptionBotIcon('https://learning-services-media.brightcove.com/doc-assets/site-assets/images/site/search.png'),
    Talla.OptionAutodetectSession,
    //---- NEW-----Redirects to portal
    Talla.OptionRequestSubmittedCallback( function(widget, data) {
      window.open("https://supportportal.brightcove.com/s/login/?language=en_US&startURL=%2Fs%2F&ec=302")
    })
  );
// configure to load up as custom placement
Talla.chat = Talla.config.configure(Talla.OptionLoadChat);
// function to load up the chat
 function displayChat() {
   Talla.chat.managedDisplay(Talla.OptionDetectParent(() => { return document.querySelector('#talla_chat')} ));
 }