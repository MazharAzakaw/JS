// 2.       Create a condition where user enter password and condition checks
// a.       if password have 12 characters and include 3 special symbols then show message “your password is strong!”
// b.       if password have 8 characters or password have 5 characters include 3 special symbols then show message “your password is strong enough!”
// c.       else “your password is too short! Try new password”

function checkSpecialCharsLength(str) {
  const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
  let length = 0;
  for (i = 0; i < str.length; i++) {
    specialChars.split("").forEach((specialChar) => {
      if (str[i].includes(specialChar)) {
        length += 1;
      }
    });
  }
  return length;
}

let checkpassword = (password) => {
  let checkSpecialSymbolsLength = checkSpecialCharsLength(password);
  if (password.length === 12 && checkSpecialSymbolsLength === 3)
    console.log("your password is strong!");
  else if (
    password.length === 8 ||
    (password.length === 5 && checkSpecialSymbolsLength === 3)
  ) {
    console.log("your password is strong enough!");
  } else {
    console.log("your password is too short! Try new password");
  }
};

checkpassword("f1534534w@@!");
