import validator from "./validator";

describe("Password validator", () => {
  it("have at least one uppercase letter", () => {
    expect(validator("asdf").hasUpperCase).toBeFalsy();
    expect(validator("Upper").hasUpperCase).toBeTruthy();
  });

  it("have at least one lowercase letter", () => {
    expect(validator("ADUHGDG").hasLowerCase).toBeFalsy();
    expect(validator("Lower").hasLowerCase).toBeTruthy();
  });

  it("have at least one number", () => {
    expect(validator("kajshbgas").hasNumber).toBeFalsy();
    expect(validator("1234").hasNumber).toBeTruthy();
  });

  it("have at least one special character (!@#$%^&*.)", () => {
    expect(validator("akjahsgasdf").hasSpecial).toBeFalsy();
    expect(validator("!@#$%^&*").hasSpecial).toBeTruthy();
  });

  it("longer than 8 characters", () => {
    expect(validator("asdfwer").isLongerThan8).toBeFalsy();
    expect(validator("123456789").isLongerThan8).toBeTruthy();
  });
});
