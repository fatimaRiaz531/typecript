//lower case
let personName: string ="Fatima"
console.log("lowercase:", personName.toLowerCase());

//upper case
console.log("uppercase:", personName.toLocaleUpperCase());

//title case
console.log("titlecase:", personName.replace(/\b\w/g,c => c.toUpperCase()));