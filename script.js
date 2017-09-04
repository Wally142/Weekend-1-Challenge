$(document).ready(onReady)

function onReady() {
    $('#button').on('click', dataInput);
}

var employees = [];
var income = 0;
var MonthlyCost = 0;

    // store the information to calculate monthly costs, 
    // append information to the DOM 
    // clear the input fields. Using the stored information, 
    // calculate monthly costs and append this to the to DOM.

    function dataInput() {
        var person = new Employee($('#firstIn').val(), $('#lastIn').val(), 
        $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val());
        employees.push(person);
        income = Number(person.annualsalary);
        MonthlyCost = Math.round(income / 12);
        $('.input').val('');
        console.log('hi'); //Used to check if function is active and is
    }
    
    function Employee (firstIn, lastIn, idIn, titleIn, salaryIn) {
        this.firstname = firstIn;
        this.lastname = lastIn;
        this.idnumber = idIn;
        this.jobtitle = titleIn;
        this.annualsalary = salaryIn;
    }