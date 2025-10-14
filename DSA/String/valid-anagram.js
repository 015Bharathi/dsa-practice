// Valid Anagram

function isAnagram(s, t) {
  // Step 1
  if (s.length !== t.length) return false;
  const count = {};
  for (const str of s) {
    count[str] = (count[str] || 0) + 1;
  }
  for (const str of t) {
    if (!count[str]) return false;
    count[str]--;
  }
  return true
}

const s = "racecar";
const t = "carrace";

// const s = "jar";
// const t = "jam";

console.log("isAnagram: ", isAnagram(s, t));
