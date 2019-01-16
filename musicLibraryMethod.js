var library = { // obj with 2 obj track, playlist
    tracks: {
        t01: {
            id: "t01", //nested objs  with 3 (t01,02,03)
            name: "Code Monkey",
            artist: "Jonathan Coulton",
            album: "Thing a Week Three"
        },
        t02: {
            id: "t02",
            name: "Model View Controller",
            artist: "James Dempsey",
            album: "WWDC 2003"
        },
        t03: {
            id: "t03",
            name: "Four Thirty-Three",
            artist: "John Cage",
            album: "Woodstock 1952"
        }
    },
    playlists: {
        p01: {
            id: "p01",
            name: "Coding Music",
            tracks: [ "t01", "t02" ]
        },
        p02: {
            id: "p02",
            name: "Other Playlist",
            tracks: [ "t03" ]
        }
    }
}

// FUNCTIONS TO IMPLEMENT:
//----------------------------------------------------------//
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function ()
{
    // assigned libraryplaylist to a var called playlist
    var playlists = library.playlists
    //console.log( 'playlists:', playlists );
    //for in loo is for obj --------------"for of" is for arrays
    for ( var playlistId in playlists )
    {
        var playlist = playlists[ playlistId ]; //assigning that playlist obj inside the playlist var
        console.log( playlistId + ': ', playlist.name + ' - ', playlist.tracks.length + 'tracks' )
        // p01: Coding Music - 2 tracks
        // p02: Other Playlist - 1 tracks // this is 
        // console.log( 'playlists:', playlists[ playlistId ] )

    }
}
/*
printPlaylists()
*/
//---------------------------------------------------//
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function ()
{

    // var printTracks = library.tracks do this after the loop
    var tracks = library.tracks
    for ( var trackId in tracks )
    {
        //var playlist = playlists[ playlistId ]; same as above
        var track = tracks[ trackId ]
        console.log( trackId + ": ", track.name + ' ', track.album )//longer
        //EXAMPLE FROM ABOVE - console.log( playlistId + ': ', playlist.name + ' - ', playlist.tracks.length + 'tracks' )
        //shorter way :
        //console.log( `${ trackId }: ${ track.name }  ${ track.album }` ) // cleaner
    }

}
// similar to the above issue
/*
printTracks()
*/





//---------------------------------------------------//
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function ( playlistId )
{

    var playList = library.playlists[ playlistId ]

    console.log( `${ playlistId }: ${ playList.name } - ${ playList.tracks.length } tracks` )
    for ( var trackId of playList.tracks )
    {
        var track = library.tracks[ trackId ]
        console.log( `${ trackId }: ${ track.name } by  ${ track.artist } (${ track.album })` )
    }



}
/*
printPlaylist( "p01" )
*/
//---------------------------------------------------//


var getPlaylistById = function ( playlistId )
{

    return library.playlists[ playlistId ]

}


//---------------------------------------------------//
// adds an existing track to an existing playlist
var addTrackToPlaylist = function ( trackId, playlistId )
{
    var playList = getPlaylistById( playlistId )
    playList.tracks.push( trackId );
    // console.log( 'playlist value ', playList )

}

var trackId = 't03';
var playlistId = 'p01';
addTrackToPlaylist( /*t03*/trackId, /*"p01"*/ playlistId );

// console.log( 1, library.playlists[ playlistId ].tracks );
//addTrackToPlaylist( trackId, playlistId );
// console.log( 2, library.playlists[ playlistId ].tracks );
//---------------------------------------------------//




// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function ()
{
    return Math.floor( ( 1 + Math.random() ) * 0x10000 ).toString( 10 ).substring( 0, 2 ); // substring = (0,2) is giving you a result of just 2 digits 
}


//---------------------------------------------------//






// adds a track to the library

var addTrack = function ( name, artist, album )
{

    var trackId = "t" + uid()

    var newTrack = {
        id: trackId,
        name: name, // being pulled from addTrack 1st element
        artist: artist, // being pulled from the 2nd element
        album: album,// 3rd elelment
    }
    library.tracks[ trackId ] = newTrack;
    //console.log( newTrack );
}

//addTrack( "shape of you", "Ed Sheeran", "divide" )
//console.log( library )




//---------------------------------------------------//
// adds a playlist to the library

var addPlaylist = function ( name )
{
    //same as above apply 
    var playlistId = "P" + uid()

    var newPlaylist = {
        id: playlistId,
        name: name,
        tracks: []
    }
    library.playlists[ playlistId ] = newPlaylist;
    //console.log( newTrack );
}
addPlaylist( 'summer Vibes' )
console.log( library )

