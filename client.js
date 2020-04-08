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

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function takeEmployee(employee) {
  for (i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
  }
}
takeEmployee(employees[2]);


function bonusEmployee(name, totalCompensation, bonusPercentage, totalBonus) {
  //the function above run the new object
  function bonusEmployee(allEmployees) {
    let allElgibleEmployees = [];
    let employee = {
      name: name,
      bonusPercentage: totalCompensation,
      totalCompensation: bonusPercentage,
      totalBonus: totalBonus,
    };
    allElgibleEmployees.push(employee);

    for (let employee of allEmployees) {
      let totalCompensation = 0;
      let bonusPercentage = 0;
      let totalBonus = 0;
      if (employee.reviewRating < 2) {
        console.log(employee.name, 'recieves no bonus');
        console.log(totalCompensation += Number(employee.annualSalary));
      } else if (employee.reviewRating === 3) {
        console.log(employee.name, 'receive a bonus of 4%')
        console.log(bonusPercentage += .04);
        console.log(totalBonus += employee.annualSalary * bonusPercentage);
        console.log(totalCompensation += Number(employee.annualSalary) + Number(totalBonus));
      } else if (employee.reviewRating === 4) {
        console.log(employee.name, 'recieve a bonus of 6%')
        console.log(bonusPercentage += .06);
        console.log(totalBonus += employee.annualSalary * bonusPercentage);
        console.log(totalCompensation += Number(employee.annualSalary) + Number(totalBonus));
      } else if (employee.reviewRating === 5) {
        console.log(employee.name, 'receive a bonus of 10%');
        console.log(bonusPercentage += .1);
        console.log(totalBonus += employee.annualSalary * bonusPercentage)
        console.log(totalCompensation += Number(employee.annualSalary) + Number(totalBonus));
      }
      if (employee.employeeNumber.length === 4) {
        console.log(employee.name, 'recieve an additional bonus of 5%')
        console.log(bonusPercentage += .05);
        console.log(totalBonus += employee.annualSalary * bonusPercentage)
        console.log(totalCompensation += Number(employee.annualSalary) + Number(totalBonus));
      }
      if (employee.annualSalary >= 65000) {
        console.log(bonusPercentage -= .01);
        console.log(totalBonus += employee.annualSalary * bonusPercentage);
        console.log(totalCompensation += Number(employee.annualSalary) + Number(totalBonus));
      }
      if (bonusPercentage > 0.13) {
        console.log(bonusPercentage = .13);
        console.log(totalBonus += employee.annualSalary * bonusPercentage);
        console.log(totalCompensation += Number(employee.annualSalary) + Number(totalBonus));
      }
      if (bonusPercentage < 0) {
        console.log(bonusPercentage = 0);
        console.log(totalBonus += employee.annualSalary * bonusPercentage);
        console.log(totalCompensation += Number(employee.annualSalary) + Number(totalBonus));
      }
    }

    return allEmployees;
    return employee;
  }


  console.log(bonusEmployee(employees));
  console.log(allElgibleEmployees);

}





// let allElgibleEmployees = [];
// function newObject(){
//     let employee = {
//         name: name,
//         bonusPercentage:  ,
//         totalCompensation: ,
//         totalBonus: ,
//     };
//     allElgibleEmployees.push(employee);
//     return employee;
// }
// newObject();
// console.log(allElgibleEmployees);

//console.log(name, bonusPercentage, totalCompenation, totalBonus)