const detect = require("@chattylabs/language-detection");

// const result = detect("১২৩৪");

// const result = detect("সাতখুনের মামলার তদন্ত করবে সিআইডি");

function detectLanguageCode(text) {
  try {
    const language_code = ["bn", "ar"];
    const result = detect(text);
    var language = result.language;
    if (language_code.includes(language) == false) {
      language = "en";
    } else {
      language = "bn";
    }
  } catch (error) {
    console.error("Error detecting language:", error);
    return "en";
  }
  return language;
}

const languageCode = detectLanguageCode("০১২৩৪৫৬৭৮৯");
console.log("languageCode detected is :" + languageCode);

// let text = "০১২৩৪৫৬৭৮৯";
// let code = text.charCodeAt(0);
// let code = text.codePointAt(2);
// console.log(code);
