//weer//
window.onload = function myFunction() {
    document.getElementsByClassName('icons')[0].style.visibility = 'hidden';
};

fetch('https://weerlive.nl/api/json-data-10min.php?key=4c9967ff90&locatie=Amsterdam&callback=?', {
    
})
    .then(res => res.json())

    .then(data => document.getElementById('windkmh').innerHTML = (data['liveweer'][0]['windkmh']))



fetch('https://weerlive.nl/api/json-data-10min.php?key=4c9967ff90&locatie=Amsterdam&callback=?', {
    
})
    .then(res => res.json())

    .then(data => document.getElementById('windr').innerHTML = (data['liveweer'][0]['windr']))



//map//
var platform = new H.service.Platform({
  'apikey': 'vRBJhaT_Y0LX-KEs_3njwkWU75tnlpRpEROVBGbmGM8'
});

var defaultLayers = platform.createDefaultLayers();


var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 11,
      center: { lat: 52.328362, lng: 4.904633 }
        
    });

function addMarkersToMap(map) {
    var bijvenIjMarker = new H.map.Marker({lat:52.404563, lng:4.922179});
    map.addObject(bijvenIjMarker);

    var olvgMarker = new H.map.Marker({lat:52.374827, lng: 4.837848});
    map.addObject(olvgMarker);

    var pietHeinMarker = new H.map.Marker({lat:52.376819, lng:4.927620});
    map.addObject(pietHeinMarker);

    var amcMarker = new H.map.Marker({lat:52.297377, lng: 4.972733});
    map.addObject(amcMarker);

    
}

window.addEventListener('resize', () => map.getViewPort().resize());

window.onload = function () {
  addMarkersToMap(map);
}      



//chatbot//

 var sampleConversation = [
        "Hi",
        "My name is Fry",
        "Where is China?",
        "What is the population of China?",
        "Bye"
    ];
    var config = {
        botName: 'Duck Duck Go Bot',
        inputs: '#humanInput',
        inputCapabilityListing: true,
        engines: [ChatBot.Engines.duckduckgo()],
        normalizer: [function( text ) {
            return text.replace('!' , '');
        } , 'trim' ],
        addChatEntryCallback: function(entryDiv, text, origin) {
            entryDiv.delay(200).slideDown();
        }
    };
    ChatBot.init(config);
    ChatBot.setBotName("Doomsdaybuddy");
    ChatBot.addPattern("^hi$", "response", "Howdy, friend", undefined, "Say 'Hi' to be greeted back.");
    ChatBot.addPattern("^bye$", "response", "See you later buddy", undefined, "Say 'Bye' to end the conversation.");
    ChatBot.addPattern("(?:my name is|I'm|I am) (.*)", "response", "hi $1, thanks for talking to me today", function (matches) {
        ChatBot.setHumanName(matches[1]);
    },"Say 'My name is [your name]' or 'I am [name]' to be called that by the bot");
    ChatBot.addPattern("(what is the )?meaning of life", "response", "42", undefined, "Say 'What is the meaning of life' to get the answer.");
    ChatBot.addPattern("compute ([0-9]+) plus ([0-9]+)", "response", undefined, function (matches) {
        ChatBot.addChatEntry("That would be "+(1*matches[1]+1*matches[2])+".","bot");
    },"Say 'compute [number] plus [number]' to make the bot your math monkey");


