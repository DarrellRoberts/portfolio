
const createJson = (titlesArr, srcsArr) => {
  const emptyJson = [];
  if (titlesArr.length !== srcsArr.length) {
    console.log("Arrays length are not the same");
  } else {
    for (let i = 0; i < titlesArr.length; i++) {
      const emptyObject = {};
      emptyObject["title"] = titlesArr[i];
      emptyObject["src"] = srcsArr[i];
      emptyJson.push(emptyObject);
    }
    return emptyJson;
  }
};

