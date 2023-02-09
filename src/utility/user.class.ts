export class User {
  private id = -1;

  constructor(
    private firstName: string,
    private lastName: string,
    private email: string,
    private phoneNumber: string,
    private skills: string,
    private currentId: number
  ) {
    this.id = Math.floor(Math.random() * 100000);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.skills = skills;
    this.currentId = currentId;
  }
}
