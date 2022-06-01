//Variable output section
var elevatorNeeded = document.getElementById('elevator-amount');

//Residential section variable 
var r_basements, r_apps, r_floors, r_av_apps, r_column_required, r_all_input, r_total_floors

//Select tabs
function selectTab(tab){
    
    //reset value
    elevatorNeeded.value = 0;
    elevartoCom.value = 0;
    r_column_required.value = 0;
    r_basements.value = 0;
    r_apps.value = 0;
    r_floors.value = 0;

    var tabcontent = document.getElementsByClassName("content");

    for (var i = 0; i < tabcontent.length; i++) {

        tabcontent[i].style.display = "none";
        
    }

    document.querySelector(tab).style.display = "block";
    
}

//Commercial Section
var elevartoCom = document.querySelector(".commercial #number-of-elevators");

elevartoCom.addEventListener('change', function(){
    elevatorNeeded.value = elevartoCom.value
})

//Residential section
r_column_required = document.querySelector(".residential #column_required_r");
r_all_input = document.querySelectorAll(".residential .item");
r_basements = document.querySelector(".residential #number-of-basements");
r_apps = document.querySelector(".residential #number-of-apartments");
r_floors = document.querySelector(".residential #number-of-floors");

r_all_input.forEach(item => {

    item.addEventListener('change', event => {

        r_total_floors = parseInt(r_floors.value) - parseInt(r_basements.value)
        r_av_apps = parseInt(r_apps.value) / r_total_floors;

        if(r_total_floors <= 20){

            elevatorNeeded.value =  Math.ceil(r_av_apps / 6) * Math.ceil(r_total_floors / 20);
            r_column_required.value = Math.ceil(r_total_floors/ 20);

        }else{

            elevatorNeeded.value = Math.ceil(r_av_apps / 6) * Math.ceil((r_total_floors / 20) + 1);
            r_column_required.value = Math.ceil((r_total_floors /20) + 1);

        }
    })

  })
  
  