//adding in my constructor for BasicFlashCard
var BasicFlashCard = require("./BasicCard");

//constructor for the cloze
function ClozeFlash (text, cloze){
  if(this instanceof ClozeFlash){


    //text will be lowercase for both parameters
    var textNew = text.toLowerCase();
    var clozeNow = cloze.toLowerCase();

    //alert the user and make sure they are following directions
    if(!textNew.includes(clozeNow)) {
      console.log("Error")
      return;
    }
    //else
    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "......")
  }
  else {
    return new ClozeFlash(text,cloze);
  }
}

//export here
module.exports = ClozeFlash


//create your flash cards here (advanced will be dynamic) but for now do it "basic"
var currentPres = BasicFlashCard("Who is the current president of the United States?", "Donald Trump");
console.log(currentPres.front);
console.log(currentPres.back); //Donald Trump

var currentPresCloze = ClozeFlash("Who is the current president of the United States?", "Donald Trump");

/*************************/
//check if the following works...
console.log(currentPresCloze.cloze);
console.log(currentPresCloze.partial);
console.log(currentPresCloze.full);
