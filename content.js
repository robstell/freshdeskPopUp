var title = "Helpdesk : CRP-RJ"
var playedNotification = false

async function playAudio() {

  var audio = new Audio('https://notificationsounds.com/storage/sounds/file-sounds-990-system-fault.mp3');  
  //audio.type = 'audio/wav';

  try {

    await audio.play();
    console.log('Playing...');

  } catch (err) {

    console.log('Failed to play...' + err);

  }
}


const interval = setInterval(() => {  
    
    var refresh_container = document.querySelector('.refresh-notification__container__count').textContent

        
    if (refresh_container){

      if (playedNotification == false){
      
        playAudio()

        playedNotification = true

      }



      
      //console.log(title)
      var newTitle = "(" + refresh_container + ") " + title
      document.title = newTitle

      

      const refresh_button = document.querySelector('.refresh-notification.cursor-pointer').addEventListener("click",()=>{
      
        location.reload()

      })   

    }

}, 1000)

