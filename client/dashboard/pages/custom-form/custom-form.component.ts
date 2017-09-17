import { Component }    from '@angular/core';

@Component({
  selector: 'custom-form',
  templateUrl: 'custom-form.pug'
})
export class CustomFormComponent {

  loginForm = {
    "properties": {
      "email": {
        "type": "string",
        "description": "email",
        "format": "email"
      },
      "password": {
        "type": "string",
        "description": "Password"
      },
      "rememberMe": {
        "type": "boolean",
        "default": false,
        "description": "Remember me"
      }
    },
    "required": ["email","password","rememberMe"]
  }
}
