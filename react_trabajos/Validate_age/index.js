const query=()=>{

    let name=document.getElementById("name").value
    let dateSelect=document.getElementById("dateSelect").value
    let message=document.getElementById("message")
    console.log(dateSelect)
    let date=dateSelect.split("-")
    

      let year=parseInt(date[0]);
      let month=parseInt(date[1]);
      let day=parseInt(date[2]);
      
      let currentDate=new Date();
      let currentYear=parseInt(currentDate.getFullYear());
      let currentMonth=parseInt(currentDate.getMonth());
      let currentDay=parseInt(currentDate.getDate());

     
      console.log(currentMonth+1 + '   1')
      console.log(month + '   2')
   

      if(currentYear-year>=18 && currentMonth+1-month>-1 && currentDay-day>=0){
        
        message.innerHTML=name + " you can vote"
      }else if(currentYear-year>18){
        message.innerHTML=name + " you can vote"
        
      }else{
        message.innerHTML=name +" you cant vote"

      }
  }