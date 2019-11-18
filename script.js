$(document).ready(function(){
       
    let mobile =  false;
    
    $(".hamburger").click( () =>{
        if(mobile === false)
        {
            $(".hamburger").toggleClass("change"); $("#mobile_view").show(1000);
            
            mobile = true;
            return;
        }
        else {
            mobile = false;
            $(".hamburger").toggleClass("change");
            $("#mobile_view").hide(1000);  
        }
        
        
//        $(".change:visible").css("display", "block");
                   
    });
}); 