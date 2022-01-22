var num = 11;
setTimeout(function(){
    document.getElementById('res').innerHTML ="Countdown Starts Now";

setTimeout(function(){
    num--;
    document.getElementById('res').innerHTML = num;
    setTimeout(function(){
        num--;
        document.getElementById('res').innerHTML = num;
        setTimeout(function(){
            num--;
            document.getElementById('res').innerHTML = num;
            setTimeout(function(){
                num--;
                document.getElementById('res').innerHTML = num;
                setTimeout(function(){
                    num--;
                    document.getElementById('res').innerHTML = num;
                    setTimeout(function(){
                        num--;
                        document.getElementById('res').innerHTML = num;
                        setTimeout(function(){
                            num--;
                            document.getElementById('res').innerHTML = num;
                            setTimeout(function(){
                                num--;
                                document.getElementById('res').innerHTML = num;
                                setTimeout(function(){
                                    num--;
                                    document.getElementById('res').innerHTML = num;                  
                                    setTimeout(function(){
                                        num--;
                                       document.getElementById('res').innerHTML = num;                                       
                                       setTimeout(function(){
                                           document.getElementById('res').innerHTML = "Happy Birthday";  
                                       },1300)
                                    },1300)
                                },1300)
                            },1300)
                        },1300)
                    },1300)
                },1300)
            },1300)
        },1300)
    },1300)
},1300);
},1000);