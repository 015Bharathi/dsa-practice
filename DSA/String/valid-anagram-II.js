// Valid Anagram II

function isAnagram(strs) {
    const store = {}
    for(const str of strs) {
        const sortedStr = str.split("").sort().join("")
        if(!store[sortedStr]){
            store[sortedStr] = []
        }
        store[sortedStr].push(str)
    }
    return Object.values(store)
}

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log("isAnagram: ", isAnagram(strs));

