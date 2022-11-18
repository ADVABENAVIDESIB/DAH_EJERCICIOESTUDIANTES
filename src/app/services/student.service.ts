import { Injectable } from '@angular/core';
import {Student} from "../models/student"; 

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[]; 
  private admin: boolean = false; 
  constructor() { 
    this.students = [ 
      {
        controlnumber: "18401087",
        age: 22,
        career: "ISC",
        curp: "BEIA000202HZTSLNA6",
        email: "advabenavidesib@ittepic.edu.mx",
        name: "Andrian Valentin Benavides Ibarra",
        nip: 2222,
        photo: "https://picsum.photos/600/?random=2"
      },
      {
        controlnumber: "12345678",
        age: 22,
        career: "ISC",
        curp: "BEIA000202HZTSLNA6",
        email: "juanpablo@ittepic.edu.mx",
        name: "Juan Pablo Campos Casillas",
        nip: 1111,
        photo: "https://picsum.photos/600/?random=1"
      },

      {
        controlnumber: "17401091",
        age: 22,
        career: "IM",
        curp: "BEIA000202HZTSLNA6",
        email: "iarjonavizcaino@ittepic.edu.mx",
        name: "Israel Arjona Vizcaíno",
        nip: 3333,
        photo: "https://picsum.photos/600/?random=3"
      }
    ];
  }

  public getStudents(): Student[]{
    return this.students;
  }
  public removeStudent(pos:number){
    this.students.splice(pos,1);
  }
  public getStudentByControlNumber(cn: string) : Student {
    let item: Student;
    item = this.students.find(
      (student)=>{
        return student.controlnumber === cn;
      }
    );
    return item;
  }

  public newStudent(student:Student) : void {
      this.students.push(student);
  }
  
  public editStudent(st: Student) {
    this.students.find((student)=> {
      if(student.controlnumber===st.controlnumber)
        student=st 
    });
  }
  esAdmin(){
    return this.admin;
  }

  adminSi(){
    this.admin=true;
  }

  adminNo(){
    this.admin=false;
  }
}
