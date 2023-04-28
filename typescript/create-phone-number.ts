export function createPhoneNumber(numbers: number[]): string {
    let phoneNumber:string = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++){
      phoneNumber = phoneNumber.replace("x", numbers[i].toString())
    }
      
    return phoneNumber;
  }

  console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))