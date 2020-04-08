const employees = [
    {
        name: 'Atticus',
        employeeNumber: '2405',
        annualSalary: '47000',
        reviewRating: 3
    },
    {
        name: 'Jem',
        employeeNumber: '62347',
        annualSalary: '63500',
        reviewRating: 4
    },
    {
        name: 'Scout',
        employeeNumber: '6243',
        annualSalary: '74750',
        reviewRating: 5
    },
    {
        name: 'Robert',
        employeeNumber: '26835',
        annualSalary: '66000',
        reviewRating: 1
    },
    {
        name: 'Mayella',
        employeeNumber: '89068',
        annualSalary: '35000',
        reviewRating: 1
    }
];



//Processing Employee Bonuses
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}
//Function Logic
function eachEmployee(number) {
    let bonusPercentage = 0;
    let totalBonus = 0;
    if (employees[number].reviewRating <= 2) {
        console.log(employees[number].name, 'No bonus');
    } else if (employees[number].reviewRating === 3) {
        console.log(employees[number].name, ' receive a base bonus of 4%');
        console.log(bonusPercentage += 0.04);
    } else if (employees[number].reviewRating === 4) {
        console.log(employees[number].name, 'receive a base bonus of 6%');
        console.log(bonusPercentage += 0.06);
    } else if (employees[number].reviewRating === 5) {
        console.log(employees[number].name, 'receive a base bonus of 10%');
        console.log(bonusPercentage += 0.1);
    }
    if (employees[number].employeeNumber.length === 4) {
        console.log(employees[number].name, 'receive a base bonus of 5%');
        console.log(bonusPercentage += 0.05);
    }
    if (employees[number].annualSalary > 65000) {
        console.log(employees[number].name, 'bonus down 1%');
        console.log(bonusPercentage -= 0.01);
    }
    if (bonusPercentage > 0.13) {
        console.log(employees[number].name, 'bonus is > 13% ');
        console.log(employees[number].name, 'bonus now: ', bonusPercentage = 0.13);
    }
    if (bonusPercentage < 0) {
        console.log(employees[number].name, 'bonus is < 0 ');
        console.log(employees[number].name, 'bonus now: ', bonusPercentage = 0);
    }
    totalBonus = Math.round(bonusPercentage * employees[number].annualSalary);
    console.log('Total bonus of ' + employees[number].name + ' is: $' + totalBonus)
    let compensation = Math.round(Number(employees[number].annualSalary) + Number(bonusPercentage * employees[number].annualSalary));
    console.log('Total compensation is: $' + compensation)
    employee = {
        name: employees[number].name,
        bonusPercentage: bonusPercentage,
        totalCompensation: compensation,
        totalBonus: totalBonus,
    }
    return employee;
}//end eachEmployee
console.log(eachEmployee(2));