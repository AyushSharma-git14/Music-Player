
let songIndex=0;
let audioElement= new Audio('songs/1.mp3')
let Play=document.getElementById('playbutton');
let Progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gift');
let songs=[
    {songName:"chorni",filepath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"chorni",filepath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"chorni",filepath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"chorni",filepath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"chorni",filepath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"chorni",filepath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"chorni",filepath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"chorni",filepath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"chorni",filepath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"chorni",filepath:"songs/1.mp3",coverPath:"cover/1.jpg"},
]

//play/pause button

Play.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play()
        Play.classList.remove('fa-play-circle')
        Play.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioElement.pause()
        Play.classList.remove('fa-pause-circle')
        Play.classList.add('fa-play-circle')
        gif.style.opacity=0
    }
    
})

//listen
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    Progressbar.value=progress;
})


Progressbar.addEventListener('change',()=>{
    audioElement.currentTime=Progressbar.value*audioElement.duration/100
})