export class Account implements IAudit {
    tenantId: string;
    href: string;
    id: string;
    username: string;
    email: string;
    password: string;
    salt: string;
    givenName: string;
    surname: string;
    middleName: string;
    customData: any;
    description: string;
    evoSbUserId: number;
    hankey: string;
    passwordExpiresAt: string;
    clients: number[];
    enabled: boolean;
    createdAt: string;
    createdBy: IAuditAccountBy;
    modifiedAt?: string;
    modifiedBy?: IAuditAccountBy;
  
    public constructor(init?: Partial<Account>) {
      Object.assign(this, init);
    }
  
    public setHref(baseUrl: string): Account {
      this.href = `${baseUrl}/tenants/${this.tenantId}/accounts/${this.id}`;
      return this;
    }
  
    /**
     * Returns a cleansed copy of the account. A cleansed copy is the valid account object
     * with sensitive properties deleted. Example of sensitive properties is the
     * account's passowrd and password salt.
     */
    cleanse(): Account {
      const cleansedAccount = new Account(this);
  
      delete cleansedAccount.password;
      delete cleansedAccount.salt;
  
      return cleansedAccount;
    }
  }