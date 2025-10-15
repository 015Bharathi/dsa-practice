// Encode and Decode Strings

function encode(strs) {
  let encode = "";
  for (const str of strs) {
    encode += `${str.length}#${str}`;
  }

  const decode = [];
  let i = 0;
  while (i < encode.length) {
    let pos = encode.indexOf("#", i);
    let len = parseInt(encode.slice(i, pos));
    i = pos + 1;
    const str = encode.slice(i, i + len);
    decode.push(str);
    i = i + len;
  }
  return decode;
}

const strs = ["neet", "code", "love", "you"];
console.log("string:", encode(strs));
