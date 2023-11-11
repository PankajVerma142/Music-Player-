
// initilize the variables
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay'); 
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songsItems =Array.from(document.getElementsByClassName('songItem'));

let songs =[ 
    {songsName : "Mad Out" , filePath : "./songs/1.mp3"  , coverPath :"./covers/1.jpg"},
    {songsName : "Mann Jogiya" , filePath : "./songs/2.mp3"  , coverPath :"./covers/2.jpg"},
    {songsName : "Ram Siya Ram" , filePath : "./songs/3.mp3"  , coverPath :"./covers/3.jpg"},
    {songsName : "_Tere Naal" , filePath : "./songs/4.mp3"  , coverPath :"./covers/4.jpg"},
    {songsName : "Chaleya" , filePath : "./songs/5.mp3"  , coverPath :"./covers/5.jpg"},
    {songsName : "Har Har Shambhu" , filePath : "./songs/6.mp3"  , coverPath :"./covers/6.jpg"},
    {songsName : "Kahani Suno" , filePath : "./songs/7.mp3"  , coverPath :"./covers/7.jpg"},
    {songsName : "Kesariya" , filePath : "./songs/8.mp3"  , coverPath :"./covers/8.jpg"},
    {songsName : "Raatan Lambiyan" , filePath : "./songs/9.mp3"  , coverPath :"./covers/9.jpg"},
    {songsName : "Tere Pyar Mein" , filePath : "./songs/10.mp3"  , coverPath :"./covers/10.jpg"},
]
// For the title and cover Photo of song
songsItems.forEach((element,i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsName;
})
// handle play/pause audio
masterPlay.addEventListener('click',() =>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
       gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity= 0;
     }
});
// listen to events
audioElement.addEventListener('timeupdate', () =>{
//   for the seek bar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener('change' ,()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        incIndex =songIndex+1;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        // to solve the index  sequence 
        audioElement.src = './songs/'+incIndex+'.mp3';
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(incIndex>=10){
        incIndex=0
    }
    else{
        incIndex +=1;
    }
    audioElement.src = './songs/'+incIndex+'.mp3';
    masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
});


document.getElementById("previous").addEventListener('click',()=>{
    if(incIndex<=0){
        incIndex=0
    }
    else{
        incIndex -=1;
    }
        audioElement.src = './songs/'+incIndex+'.mp3';
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
});