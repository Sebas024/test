const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printTracks = function() {
  let objectKeys = Object.keys(library.tracks);
  for (key of objectKeys) {
    console.log(`${key}: ${library.tracks[key].name} by ${library.tracks[key].artist} \(${library.tracks[key].album}\)`);
  }
};
     
// printTracks()
     
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


printPlaylists: function () {
  for (pListKey in this.playlists) {
    var pListObj = this.playlists[pListKey];
    
    this.printOnePlaylist(pListObj.id, pListObj.name, pListObj.tracks.length);
  }
},

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printPlaylists : function() {
  for (var p in this.playlists){
    console.log(this.playlists[p]['id']+": "+
    this.playlists[p]['name']+" - "+this.playlists[p]['tracks'].length +" tracks");
  }
},
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks : function () {
  for (var tr in this.tracks){
    console.log(this.tracks[tr]['name']+ " by " +
    this.tracks[tr]['artist']+" "+this.tracks[tr]['album']);
  }
},
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

 printPlaylist : function (playlistId) {
// Search thru  playlist for playlistId
// For that ID, print all tracks for that playlist

    console.log("For playlist :"+ playlistId+" Tracks: " + this.playlists[playlistId]['tracks']);
 },

// adds an existing track to an existing playlist

  addTrackToPlaylist : function (trackId, playlistId) {
  this.playlists[playlistId]['tracks'].push(trackId);
  console.log("new track list: "+  this.playlists[playlistId]['tracks']);
 },
// generates a unique id
// (use this for addTrack and addPlaylist)

  uid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
// adds a track to the library

  addTrack : function (name, artist, album) {

    var theid = this.uid();
    this.tracks[theid]={id:theid,name,artist,album};
  }, // adds a playlist to the library

  addPlaylist : function (name) {

    var playId = this.uid();
    this.playlists[playId] = {id:playId, name:name, tracks:[]};
  },

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults : function(query) {
  // Search the list of tracks for a given query string.
  // create an array of all tracks.

    found = false;
    newquery = query.toLowerCase();
    tracks = Object.keys(this.tracks);
    for (var items in this.tracks){
    var name = this.tracks[items]['name'].toLowerCase();
    var artist = this.tracks[items]['artist'].toLowerCase();
    var album =  this.tracks[items]['album'].toLowerCase();
    if ((name.search(newquery) !== -1) || (artist.search(newquery) !== -1)
      || (album.search(newquery)!==-1 )){
      console.log("Track Name: " +name + " Artist: "+artist+" Album: "+album);
      found = true;
    }
  }
  if (found === false)
      console.log(newquery +" was not found in list");
  }


library.printPlaylists();
library.addTrackToPlaylist("t04","p02");
library.printTracks();
library.printPlaylist("p02");
library.addTrack("Flying Low","Marvin Gaye","USA Tour 2003");
library.addPlaylist("Shabba in Town");
library.printPlaylists();
library.printTracks();
library.printSearchResults("usa");
