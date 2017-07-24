//create a constructor function for a basic flash card
var BasicFlashCard = function(front, back){

  //instanceof--> tests whether an object in its prototype chain has prototype property of a constructor
  /**Syntax
  object instanceof constructor **/

  if (this instanceof BasicFlashCard) {

    //text on the front
    this.front = front;

    //text on the back
    this.back = back;
  }
  return new BasicFlashCard(front,back)

}

//export to be used within the cloze
module.exports = BasicFlashCard;
