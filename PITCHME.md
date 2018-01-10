---?image=assets/image/ivan_televnyy.jpg

# Orion

### 2017 Q4 Sprint 6 Demo

---?image=assets/image/lukas_blazek.jpg

## Items

<br>

- Login failure for SBAdmin-stereotyped SSO accounts (PF-1251) |
- API support for updating SSO tenants (PF-731) |

---?code=src/ts/account.ts&lang=typescript&title=Account Definition

@[1,24-26](Account constructor - note the Partial keyword)
@[17](List of clients managed by the account)

---?code=src/ts/account-sync.ts&lang=typescript&title=Account Sync

@[1,36-41]( *sort()* == black ice!)

---?image=assets/image/lukas_blazek.jpg

## ...could it have been prevented? if not...

- *Assumptions is the mother of all...* (Code author) | 
- Treating the pre-production staging tier as *production* (if something goes kaput, file a bug asap) |
  - Timeless question - how close is the pre-production test data mirroring that of the *real world* ? |
- Error rate monitoring & alerts. (Single Sign-on Team - DougieFresh & Ol'Flo + crew) |

---?image=assets/image/gitpitch-audience.jpg


### Questions?

<br>


