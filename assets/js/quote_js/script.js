//Variable output section
var elevatorNeeded = document.getElementById('elevator-amount');

//Residential section variable 
var r_basements, r_apps, r_floors, r_av_apps, r_column_required, r_all_input, r_total_floors

//Corporate section variable
var cr_all_input, cr_floors, cr_basements, cr_occupants, cr_column_required_cr, cr_column_avg_cr, cr_column_final_cr;

//Hybrid section variable
var h_all_input, h_floors, h_basements, h_occupants, h_column_required_h, h_column_avg_h, h_column_final_h;

//All input
var quote_all_input = document.querySelectorAll(".reset");


//Select tabs
function selectTab(tab){

    //reset value
    quote_all_input.forEach(item => {
        item.value = 0;
        item.checked = false;
    })

    var tabcontent = document.getElementsByClassName("content");

    for (var i = 0; i < tabcontent.length; i++) {

        tabcontent[i].style.display = "none";

    }

    document.querySelector(tab).style.display = "block";
    
}

//==Commercial Section==
var elevartoCom = document.querySelector(".commercial #number-of-elevators");

elevartoCom.addEventListener('change', () => {
    elevatorNeeded.value = elevartoCom.value;
    cost();
})

//==Residential section==

//Output
r_column_required = document.querySelector(".residential #column_required_r");
//All input
r_all_input = document.querySelectorAll(".residential .item");
//Input for calcul 
r_basements = document.querySelector(".residential #number-of-basements");
r_apps = document.querySelector(".residential #number-of-apartments");
r_floors = document.querySelector(".residential #number-of-floors");

r_all_input.forEach(item => {

    item.addEventListener('change', () => {

        //Calcul the numbers of floors
        r_total_floors = parseInt(r_floors.value) - parseInt(r_basements.value);
        //Calcul the average of appartement
        r_av_apps = parseInt(r_apps.value) / r_total_floors;

        if(r_total_floors <= 20){
            //Display Section
            elevatorNeeded.value = (Number.isNaN(Math.ceil(r_av_apps / 6) * Math.ceil(r_total_floors / 20))) ? 0 : Math.ceil(r_av_apps / 6) * Math.ceil(r_total_floors / 20);
            r_column_required.value = Math.ceil(r_total_floors/ 20);
            cost();
        }else{
            //Display Section
            elevatorNeeded.value = (Number.isNaN(Math.ceil(r_av_apps / 6) * Math.ceil((r_total_floors / 20) + 1))) ? 0 : Math.ceil(r_av_apps / 6) * Math.ceil((r_total_floors / 20) + 1);
            r_column_required.value = Math.ceil((r_total_floors /20) + 1); 
            cost();
        }
    })
    
})

//==Corporate section==

//All input
cr_all_input = document.querySelectorAll(".corporate .item");
//Input for calcul
cr_floors = document.querySelector(".corporate #number-of-floors");
cr_basements = document.querySelector(".corporate #number-of-basements");
cr_occupants = document.querySelector(".corporate #maximum-occupancy");
//Output
cr_column_required_cr = document.querySelector(".corporate #column_required_cr");
cr_column_avg_cr = document.querySelector(".corporate #column_avg_cr");
cr_column_final_cr = document.querySelector(".corporate #column_final_cr");

cr_all_input.forEach(item => 

    item.addEventListener('change', () => {
        var cr_nb_floors, cr_nb_occupants, cr_elevator_required, cr_columns_required, cr_avg_elevator_per_columns, cr_final_amount_elevator;

        //Calul the numbers of floors
        cr_nb_floors = parseInt(cr_floors.value) + parseInt(cr_basements.value);
        //Calcul the total numbers of occupants
        cr_nb_occupants = parseInt(cr_occupants.value) * cr_nb_floors;
        //Calcul the numbers of elevator required
        cr_elevator_required = Math.floor(cr_nb_occupants / 1000);
        //Calcul the numbers of column required
        cr_columns_required = Math.ceil(cr_nb_floors / 20);
        //Calcul the average elevators per column 
        cr_avg_elevator_per_columns = Math.ceil(cr_elevator_required / cr_columns_required);
        //Calcul the final amount of elevator neeeded
        cr_final_amount_elevator = cr_columns_required * cr_avg_elevator_per_columns;

        //Display Section
        elevatorNeeded.value = cr_elevator_required;
        cr_column_avg_cr.value = (Number.isNaN(cr_avg_elevator_per_columns)) ? 0 : cr_avg_elevator_per_columns;
        cr_column_required_cr.value = cr_columns_required;
        cr_column_final_cr.value = (Number.isNaN(cr_final_amount_elevator)) ? 0 : cr_final_amount_elevator;
        cost();
    })
)


//==Hybrid section==

//All input
h_all_input = document.querySelectorAll(".hybrid .item");
//Input for calcul
h_floors = document.querySelector(".hybrid #number-of-floors");
h_basements = document.querySelector(".hybrid #number-of-basements");
h_occupants = document.querySelector(".hybrid #maximum-occupancy");
//Output
h_column_required_h = document.querySelector(".hybrid #column_required_h");
h_column_avg_h = document.querySelector(".hybrid #column_avg_h");
h_column_final_h = document.querySelector(".hybrid #column_final_h");

h_all_input.forEach(item => 

    item.addEventListener('change', () => {
        var h_nb_floors, h_nb_occupants, h_elevator_required, h_columns_required, h_avg_elevator_per_columns, h_final_amount_elevator;

        //Calul the numbers of floors
        h_nb_floors = parseInt(h_floors.value) + parseInt(h_basements.value);
        //Calcul the total numbers of occupants
        h_nb_occupants = parseInt(h_occupants.value) * h_nb_floors;
        //Calcul the numbers of elevator required
        h_elevator_required = Math.floor(h_nb_occupants / 1000);
        //Calcul the numbers of column required
        h_columns_required = Math.ceil(h_nb_floors / 20);
        //Calcul the average elevators per column 
        h_avg_elevator_per_columns = Math.ceil(h_elevator_required / h_columns_required);
        //Calcul the final amount of elevator neeeded
        h_final_amount_elevator = h_columns_required * h_avg_elevator_per_columns;

        //Display Section
        elevatorNeeded.value = h_elevator_required;
        h_column_avg_h.value = (Number.isNaN(h_avg_elevator_per_columns)) ? 0 : h_avg_elevator_per_columns;
        h_column_required_h.value = h_columns_required;
        h_column_final_h.value = (Number.isNaN(h_final_amount_elevator)) ? 0 : h_final_amount_elevator;
        cost();
    })
)




//-- Budget section ==

//Display function
function cost(){
    var product_line = document.querySelectorAll(".product-line");

    var x, y, z, t;

    if (product_line[0].checked == true){
        product_line[0].value = 7565;
        y = x * 0.10;
        z = x + y;
        
        if (cr_column_final_cr.value > 0) {
            x = parseInt(cr_column_final_cr.value) * product_line[0].value;
            y = x * 0.10;
            z = x + y;
            t = parseInt(z / parseInt(cr_column_final_cr.value));

            //Display Section
            document.querySelector("#elevator-total-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(x);
            document.querySelector("#installation-fees").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(y);
            document.querySelector("#final-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(z);
            document.querySelector("#elevator-unit-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(parseInt(z / parseInt(cr_column_final_cr.value)));

        } else if (h_column_final_h.value > 0) {
            x = parseInt(h_column_final_h.value) * product_line[0].value;
            y = x * 0.10;
            z = x + y;
            t = parseInt(z / parseInt(h_column_final_h.value));

            //Display Section
            document.querySelector("#elevator-total-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(x);
            document.querySelector("#installation-fees").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(y);
            document.querySelector("#final-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(z);
            document.querySelector("#elevator-unit-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(parseInt(z / parseInt(h_column_final_h.value)));

        } else {   
            x = parseInt(elevatorNeeded.value) * product_line[0].value;
            y = x * 0.10;
            z = x + y;
            t = parseInt(z / parseInt(elevatorNeeded.value));
            
            //Display Section
            document.querySelector("#elevator-total-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(x);
            document.querySelector("#installation-fees").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(y);
            document.querySelector("#final-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(z);
            document.querySelector("#elevator-unit-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(parseInt(z / parseInt(elevatorNeeded.value)));
        }
        
    }else if (product_line[1].checked == true){
        product_line[1].value = 12345;
        y = x * 0.13;
        z = x + y;

        if (cr_column_final_cr.value > 0) {
            x = parseInt(cr_column_final_cr.value) * product_line[1].value;
            y = x * 0.13;
            z = x + y;
            t = parseInt(z / parseInt(cr_column_final_cr.value));
            
            //Display Section
            document.querySelector("#elevator-total-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(x);
            document.querySelector("#installation-fees").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(y);
            document.querySelector("#final-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(z);
            document.querySelector("#elevator-unit-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(parseInt(z / parseInt(cr_column_final_cr.value)));


        } else if (h_column_final_h.value > 0) {
            x = parseInt(h_column_final_h.value) * product_line[1].value;
            y = x * 0.13;
            z = x + y;
            t = parseInt(z / parseInt(h_column_final_h.value));

            //Display Section
            document.querySelector("#elevator-total-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(x);
            document.querySelector("#installation-fees").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(y);
            document.querySelector("#final-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(z);
            document.querySelector("#elevator-unit-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(parseInt(z / parseInt(h_column_final_h.value)));

        } else {   
            x = parseInt(elevatorNeeded.value) * product_line[1].value;
            y = x * 0.13;
            z = x + y;
            t = parseInt(z / parseInt(elevatorNeeded.value));

            //Display Section
            document.querySelector("#elevator-total-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(x);
            document.querySelector("#installation-fees").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(y);
            document.querySelector("#final-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(z);
            document.querySelector("#elevator-unit-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(parseInt(z / parseInt(elevatorNeeded.value)));

        }
    } else if (product_line[2].checked == true) {
        product_line[2].value = 15400;
        y = x * 0.16;
        z = x + y;
        
        if (cr_column_final_cr.value > 0) {
            x = parseInt(cr_column_final_cr.value) * product_line[2].value;
            y = x * 0.16;
            z = x + y;
            t = parseInt(z / parseInt(cr_column_final_cr.value));

            //Display Section
            document.querySelector("#elevator-total-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(x);
            document.querySelector("#installation-fees").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(y);
            document.querySelector("#final-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(z);
            document.querySelector("#elevator-unit-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(parseInt(z / parseInt(cr_column_final_cr.value)));

        } else if (h_column_final_h.value > 0) {
            x = parseInt(h_column_final_h.value) * product_line[2].value;
            y = x * 0.16;
            z = x + y;
            t = parseInt(z / parseInt(h_column_final_h.value));

            //Display Section
            document.querySelector("#elevator-total-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(x);
            document.querySelector("#installation-fees").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(y);
            document.querySelector("#final-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(z);
            document.querySelector("#elevator-unit-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(parseInt(z / parseInt(h_column_final_h.value)));

        } else {   
            x = parseInt(elevatorNeeded.value) * product_line[2].value;
            y = x * 0.16;
            z = x + y;
            t = parseInt(z / parseInt(elevatorNeeded.value));

            //Display Section
            document.querySelector("#elevator-total-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(x);
            document.querySelector("#installation-fees").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(y);
            document.querySelector("#final-price").value = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(z);
            document.querySelector("#elevator-unit-price").value = (Number.isNaN(t)) ? Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(0) : Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(parseInt(z / parseInt(elevatorNeeded.value)));

        }
    }
}


