export function evolutionSync(ssoAccount: Account, evoAccount: EvoAccount): Promise<Account> {
    console.info(`accountService.sync (account id: ${ssoAccount.id})`);
  
    const accountUpdates = new Account();
    let updateRequired = false;
  
    if (ssoAccount.username !== evoAccount.username.toLowerCase()) {
      accountUpdates.username = evoAccount.username.toLowerCase();
      updateRequired = true;
    }
  
    if (ssoAccount.password !== evoAccount.password) {
      accountUpdates.password = evoAccount.password;
      updateRequired = true;
    }
  
    if (ssoAccount.email !== evoAccount.email) {
      accountUpdates.email = evoAccount.email;
      updateRequired = true;
    }
  
    if (ssoAccount.givenName !== evoAccount.firstName) {
      accountUpdates.givenName = evoAccount.firstName;
      updateRequired = true;
    }
  
    if (ssoAccount.surname !== evoAccount.lastName) {
      accountUpdates.surname = evoAccount.lastName;
      updateRequired = true;
    }
  
    if (ssoAccount.passwordExpiresAt !== evoAccount.passwordExpiration) {
      accountUpdates.passwordExpiresAt = evoAccount.passwordExpiration;
      updateRequired = true;
    }
  
    if (!_.isEqual(ssoAccount.clients.sort(), evoAccount.clients.sort())) {
      accountUpdates.clients = evoAccount.clients;
      updateRequired = true;
    }
  
    return new Promise<Account>((resolve, reject) => {
      if (updateRequired) {
        updateAccount(ssoAccount, ssoAccount, accountUpdates)
          .then((updatedAccount: Account) => {
             resolve(updatedAccount);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        resolve(ssoAccount);
      }
    });
  }