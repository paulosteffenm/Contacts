export class Contact {

  public Id!: string;
  public UserName!: string;
  public Phone!: number;
  public Email!: string;
  public BirthDate!: string;
  public Company!: string;
  public Photo!: string;

  constructor(data?: Partial<Contact>) {
    Object.assign(this, data);
  }

}
