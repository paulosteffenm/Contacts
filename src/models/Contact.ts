export class Contact {

  public Id!: string;
  public UserName!: string;
  public Phone!: number;
  public Photo!: string;

  constructor(data?: Partial<Contact>) {
    Object.assign(this, data);
  }

}
