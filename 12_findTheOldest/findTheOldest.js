const findTheOldest = function(people) {

    const sortedByAge = people.sort(function(a, b){
        let a_YOD = 0;
        let b_YOD = 0;
        if("yearOfDeath" in a){
            a_YOD = a.yearOfDeath;
        }
        else{
            a_YOD = 2022;
        }
        if("yearOfDeath" in b){
            b_YOD = b.yearOfDeath;
        }
        else{
            b_YOD = 2022;
        }
        const currentPersonAge = a_YOD - a.yearOfBirth;
        const nextPersonAge = b_YOD - b.yearOfBirth;
        return currentPersonAge > nextPersonAge ? -1 : 1;
    });

    return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
