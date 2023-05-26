/**
 *
 * @param {number} duration in ms
 * @param {string} label
 * @param {number} rate max count allowed in given duration
 * @returns bool
 */

export const isEarlyBird=true;

export const rateLimiter = (duration, label, rate) => {
  let item = localStorage.getItem(label);
  if (item) {
    item = JSON.parse(item);
    if (item.date + duration < Date.now()) {
      item.date = Date.now();
      item.count = 0;
    }
    if (item.count < rate) {
      item.count += 1;
    } else {
      return false;
    }
    localStorage.setItem(label, JSON.stringify(item));
    return true;
  } else {
    localStorage.setItem(
      label,
      JSON.stringify({
        date: Date.now(),
        count: 1,
      })
    );
    return true;
  }
};

export const STEPS = [
  "Initiate your transfer",
  "Waiting for your funds",
  "Verifying your deposited funds",
  "Your funds paid to the recipient",
];

export const removeInitialsFromName = (name) => {
  let splittedName = name.split(" ");
  let initials = ["mr", "mrs", "mast", "ms"];
  for (let i = 0; i < initials.length; i++) {
    if (splittedName[0].toLowerCase().startsWith(initials[i])) {
      return splittedName.slice(1).join(" ").trim();
    }
  }
  return name.trim();
};

export function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(" ");
}


//export const devURL = "https://3.75.148.145:2000";
export const devURL = "https://scopex.dev/api";
export const testURL="https://scopex.dev";

export const greetings = {
  In: "Namaste",
  India:"Namaste",
  Nepal:"Namaste",
  Austria:"Servus",
  Belgium:"Salut",
  Croatia:"Zdravo",
  Cyprus:"Yasas",
  Estonia:"Tere",
  Finland:"Hei",
  France:"Salut",
  Germany:"Hallo",
  Greece:"Yiasou",
  Ireland:"Dia duit",
  Italy:"Ciao",
  Latvia:"Sveiki",
  Lithuania:"Labas",
  Luxembourg:"Moien",
  Malta:"Bongu",
  Netherlands:"Hallo",
  Portugal:"Olá",
  Slovakia:"Ahoj",
  Slovenia:"Zdravo",
  Spain:"Hola"
}
export const options = ["India","Nepal","Austria","Belgium","Croatia","Cyprus","Estonia","Finland","France","Germany","Greece","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Portugal","Slovakia","Slovenia","Spain"];
export const mailformat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

