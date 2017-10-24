import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PhoneValidator{

    static onlyNumber(control : AbstractControl) : ValidationErrors | null {
        if(isNaN(control.value)){
            let input = control.value as string;
            let input1 : string[] = input.split(RegExp("[a-zA-Z]"));
            input1.forEach(element => {
                if(isNaN(Number(element))){
                    input1[input1.indexOf(element)] = "";
                }
            });
            control.setValue(input1[0]);
            return { PhoneValidator : true }
        }
        return null;
    }
}