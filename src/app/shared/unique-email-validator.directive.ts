// import { Directive } from '@angular/core';
// import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidatorFn  } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { AuthService } from '../auth.service'

// export function uniqueEmailValidator(authService: AuthService): AsyncValidatorFn {
//   return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
//     return authService.getUserByEmail(c.value).pipe(
//       map(users => {
//         return users && users.length > 0 ? { 'uniqueEmail': true } : null;
//       })
//     );
//   };
// }

// @Directive({
//   selector: '[uniqueEmail]',
//   providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi: true }]
// })
// export class UniqueEmailValidatorDirective implements AsyncValidator {

 
//   constructor(private authService: AuthService) { }

//  // @Input('uniqueEmail') authService: string;

//   validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
//     return uniqueEmailValidator(this.authService)(c);
//   }

// }
