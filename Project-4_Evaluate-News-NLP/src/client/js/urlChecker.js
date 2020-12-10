
function checkUrl(inputText) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(inputText)) {
      alert('ERROR: URL not valid, please enter a valid URL!');
      console.log('ERROR: URL not valid, please enter a valid URL!');
      return false;
    } else {
        console.log('URL valid!!');
      return true;
    }
  }

export { checkUrl }