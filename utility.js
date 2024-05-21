const detect = require("@chattylabs/language-detection");

// const result = detect("১২৩৪");

// const result = detect("সাতখুনের মামলার তদন্ত করবে সিআইডি");

function detectLanguageCode(text) {
  try {
    const result = detect(text);
    var language = result.language;
    if (language != "bn") {
      if (language == "ar") {
        language = "bn";
      } else {
        language = "en";
      }
    }
  } catch (error) {
    console.error("Error detecting language:", error);
    return "en";
  }
  return language;
}

// const languageCode = detectLanguageCode("০১২৩৪৫৬৭৮৯");
// console.log("languageCode detected is :" + languageCode);

let text = "০১২৩৪৫৬৭৮৯";
// let code = text.charCodeAt(0);
let code = text.codePointAt(2);
console.log(code);
