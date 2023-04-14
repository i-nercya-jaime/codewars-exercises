  /* 
    data = ["John","James","Smith","01-Jan-2000","M"]

    0 = Forename
    1 = Middle Name (if any)
    2 = Surname
    3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
    4 = M-Male or F-Female

--------------------------------------------------------------------------------------------------------------------------------------------

    1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

    6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

    7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

    9–10: The date within the month of birth

    11: The year digit from the year of birth (e.g. for 1987 it would be 7)

    12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

    14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

    15–16: Two computer check digits. We will always use "AA"

--------------------------------------------------------------------------------------------------------------------------------------------

    You will need to output the full 16 digit driving license number.

*/

export function driver(data: Array<string>): string{

    let dLicense: string = '';
    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let name: string = data[0];
    let middleName: string = data[1]; //puede no tener
    let surname: string = data[2];
    let dateOfBirth: string = data[3];
    let gender: string = data[4];

    function getFiveFirstNumbers(){
        let firstFive: string = surname.slice(0,5).toUpperCase();

        for(let x = firstFive.length; x < 5; x++) {
            firstFive = firstFive + '9';
        }

        return firstFive;
    }

    function getDecade(){
        let decade: string = dateOfBirth.substring(dateOfBirth.length - 2, 1)

        return decade;
    }

    function getMonthAndGender(){

        let month: string = dateOfBirth.substring(3, 3);

        for (var x = 0; x < 12; x++) {

            if(month === months[x]) {
                if(gender === "F") {
                    return x + 51;
                } else {
                    x++;
                    if(x.toString().length === 1){
                        x = 0 + x;
                    }
                    return x;
                }
            }
        }
    }

    function getDateWithinMonthOfBirth(){
        return dateOfBirth.substring(0, 2)
    }

    function getYearDigit(){
        return dateOfBirth.substring(dateOfBirth.length -1);
    }

    function getInitials(){

        let firstInit:string = name.substr(0, 1);
        let middleInit:any = '';
        if (middleName.length > 0) {
          middleInit = middleName.substr(0,1);
        } else {
          middleInit = 9;
        }
        return firstInit + middleInit;
    }

    function number14(){
        return 9;
    }

    function number15and16(){
        return 'AA'
    }
    
    return dLicense = getFiveFirstNumbers() + getDecade() + getMonthAndGender() + getDateWithinMonthOfBirth() +getYearDigit() + getInitials() + number14() + number15and16();
  
  }