export class Tenant implements IAudit {
    href: string;
    id: string;
    name: string;
    subdomain: string;
    logo: string;
    emailTemplate: string;
    evoServiceAccount: EvoServiceAccount;
    enabled: boolean;
    createdAt: string;
    createdBy: IAuditAccountBy;
    modifiedAt?: string;
    modifiedBy?: IAuditAccountBy;
  
    public constructor(init?: Partial<Tenant>) {
      Object.assign(this, init);
    }
  
    public setHref(baseUrl: string): Tenant {
      this.href = `${baseUrl}/tenants/${this.id}`;
      return this;
    }
  }