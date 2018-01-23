<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
var slider = document.getElementById("trainValue");
console.log("trainValue",trainValue);
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function train() {

    // $trainData = $('#form').val();
    var inputValue=document.getElementById('trainValue');
    var dropdown=document.getElementById('algorithm');
    var algorithmValue = dropdown.options[dropdown.selectedIndex].value;
    var obj={};
    obj.trainValue=inputValue;
    obj.algorithm=algorithmValue;
        $.ajax({
            //the url to send the data to
            url: "http:/127.0.0.1:3000/train",
            //the data to send to
            data: JSON.stringify(Obj),
            //type. for eg: GET, POST
            type: "POST",
            //datatype expected to get in reply form server
            dataType: "json",
            //on success
            success: function(data){
                //do something after something is recieved from php
            },
            //on error
            error: function(){
                //bad request
            }
        });
}

// pickle file generate


function DownloadPickle(){

var pickles = document.getElementsByName("pickles");
var picklesize = pickles.length;
var id = 0;
for(i=0;i<picklesize;i++){
              if(pickles[i].checked)
              {
              id = pickles[i].value;
              alert(id);
              alert('before ajax');
              $.ajax({
                  //the url to send the data to
                  url: "http://127.0.0.1:3000/pickle",
                  //type. for eg: GET, POST
                  type: "GET",
                  //on success
              });
          }
}
}

