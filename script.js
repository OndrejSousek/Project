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
    
    $(function() {
        $("#button").click(function(){
           $("#button").addClass("onclic", 250, validate); 
        });
        
        function validate(){
            setTimeout(function(){
                $("#button").removeClass("onclic");
                $("#button").addClass("validate", 450, callback);
            }, 2250);
        }
        
        function callback() {
            setTimeout(function(){
                $("#button").removeClass("validate");
            }, 1250);
        }
                
    });
});
   