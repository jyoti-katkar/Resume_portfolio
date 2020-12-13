
function fun(){
   var element = document.getElementById('resume');
   element.removeAttribute("hidden");
element.animate([
    // keyframes
    { transform: 'translateY(-500px)' },
    { transform: 'translateY(500px)' }
    
  ], { 
    // timing options
    duration: 1000,
    iterations: 1
  });
   
}

function green(){
    document.getElementById("resume").style.color = '#59886b';
}

function blue(){
    document.getElementById("resume").style.color = 'blue';
}

function red(){
    document.getElementById("resume").style.color = 'red';
}

function grey(){
    document.getElementById("resume").style.color = 'brown';
}

function black(){
    document.getElementById("resume").style.color = 'black';
}

function back1(){
    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp1933952.jpg')";
    document.body.style.backgroundRepeat = "repeat";
}

function back2(){
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/337247.jpg')";
    document.body.style.backgroundRepeat = "repeat";
}

function back3(){
    document.body.style.backgroundImage = "url('https://www.setaswall.com/wp-content/uploads/2017/05/Minimal-Wallpaper-038-1920x1080.jpg')";
    document.body.style.backgroundRepeat = "repeat";
}

function back4(){
    document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/74/99/M67dUT.jpg')";
    document.body.style.backgroundRepeat = "repeat";
}

function back5(){
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/57/dd/bb/57ddbb0e894d12a376ae8653edd2092a.png')";
    document.body.style.backgroundRepeat = "repeat";
}



function educate_details(){
    var elem = document.getElementById("animate");   
    elem.removeAttribute("hidden");
    //elem.parentNode.removeChild(elem);
    var close = document.getElementById('enter');
    elem.appendChild(close);
    var chk = document.getElementById("educate");
    chk.removeAttribute("hidden");
    elem.appendChild(chk);
      var pos = 20;
      var id = setInterval(frame, 5);
      function frame() {
        if (pos == 170) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.top = pos + "px"; 
          elem.style.left = pos + 100 +"px"; 
        }
      }
 } 

 function work_exp(){
    var elem = document.getElementById("animate");
    elem.removeAttribute("hidden");
    //elem.parentNode.removeChild(elem);
    var close = document.getElementById('enter');
     elem.appendChild(close);
     var chk = document.getElementById("workexpr");
     chk.removeAttribute("hidden");
          elem.appendChild(chk);
          var pos = 20;
          var id = setInterval(frame, 5);
          function frame() {
            if (pos == 120) {
              clearInterval(id);
            } else {
              pos++; 
              elem.style.top = pos + "px"; 
              elem.style.left = pos + 100 +"px"; 
            }
          }
 }
 function tech_skill(){
  var elem = document.getElementById("animate");
  elem.removeAttribute("hidden");
  //elem.parentNode.removeChild(elem);
  var close = document.getElementById('enter');
   elem.appendChild(close);
   var chk = document.getElementById("techskills");
   chk.removeAttribute("hidden");
        elem.appendChild(chk);
        var pos = 20;
        var id = setInterval(frame, 5);
        function frame() {
          if (pos == 100) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + 120 +"px"; 
          }
        }
}
function personal_details(){
  var elem = document.getElementById("animate");
  elem.removeAttribute("hidden");
  //elem.parentNode.removeChild(elem);
  var close = document.getElementById('enter');
   elem.appendChild(close);
   var chk = document.getElementById("profile1");
   chk.removeAttribute("hidden");
        elem.appendChild(chk);
        var pos = 20;
        var id = setInterval(frame, 5);
        function frame() {
          if (pos == 100) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + 150 +"px"; 
          }
        }
}

function projects(){
  var elem = document.getElementById("animate");
  elem.removeAttribute("hidden");
  //elem.parentNode.removeChild(elem);
  var close = document.getElementById('enter');
   elem.appendChild(close);
   var chk = document.getElementById("projt");
   chk.removeAttribute("hidden");
        elem.appendChild(chk);
        var pos = 20;
        var id = setInterval(frame, 5);
        function frame() {
          if (pos == 100) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + 150 +"px"; 
          }
        }
}
function hide_div()
{
    var elem = document.getElementById("animate");
    elem.parentNode.removeChild(elem);
    window.location.reload();
    //elem.hidden();
}