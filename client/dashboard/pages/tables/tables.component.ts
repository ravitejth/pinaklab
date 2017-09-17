import { Component }    from '@angular/core';

@Component({
  selector: 'tables',
  templateUrl: 'tables.pug'
})
export class TablesComponent {
  data = [
    {
      "id": 1,
      "name": "new name",
      "userId": 3,
      "username": "NKiAGlLrnyOf",
      "firstName": "skdjf",
      "lastName": "",
      "mobile": "9822222222",
      "email": "hfm@jhsdf.sdf",
      "aadhaar_no": "asd",
      "voter_no": "asd",
      "ration_no": "12"
    }, {
      "id": 2,
      "name": "My company",
      "userId": 32,
      "username": "xyZ3V51AlOnF",
      "firstName": "Me",
      "lastName": "",
      "mobile": "0098009878",
      "email": "me@me.com",
      "aadhaar_no": "111111111111",
      "voter_no": "11111",
      "ration_no": "1111"
    }, {
      "id": 3,
      "name": "Anand bhavan",
      "userId": 38,
      "username": "YMmLYF7hNxCp",
      "firstName": "Mr Anand",
      "lastName": "",
      "mobile": "0001110022",
      "email": "anand@bhavan.com",
      "aadhaar_no": "1212",
      "voter_no": "3212",
      "ration_no": "21312"
    }
  ];
}
