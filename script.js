$(document).ready(onReady)

function onReady() {
    $('.dataCollect').on('click', dataCollect);
}

var employees = [];

function worker (firstIn, lastIn, idIn, titleIn, salaryIn) {
    this.firstname = firstIn;
    this.lastname = lastIn;
    this.idnumber = idIn;
    this.jobtitle = titleIn;
    this.annualsalary = salaryIn;
    this.monthlyCost = (salaryIn / 12);
    employees.push(this);

function dataCollect(){

}

