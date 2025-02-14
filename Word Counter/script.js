function countWord() {
    let s = document.getElementById("content").value;

    let charCount = 0;
    let wordCount = 0;
    let spaceCount = 0;
    let puncCount = 0;
    let punc = ".,!?;:\"'()-"; 

    let words = s.split(" "); 

    for (let word of words) {
      if (word.trim().length > 0) {
        wordCount++;
      }
    }

    for (let i = 0; i < s.length; i++) {
      charCount++; 
      let char = s[i];

      if (char === " ") {
        spaceCount++; 
      } else if (punc.includes(char)) {
        puncCount++; 
      }
    }

    document.getElementById("wordCount").innerText = `Words : ${wordCount}`;
    document.getElementById("charCount").innerText = `Characters : ${charCount}`;
    document.getElementById("spaceCount").innerText = `Spaces : ${spaceCount}`;
    document.getElementById("puncCount").innerText = `Punctuations : ${puncCount}`;

    document.getElementById("result").style.display = "block";
}