
var trancheCount = 0;
var trancheNumber = document.getElementById('trancheCounter');


document.getElementById('oneMoreTranche').onclick = function() {
  animateTranche();
  trancheCount = trancheCount + 1;
  trancheNumber.innerText = trancheCount;
};

document.getElementById('oneLessTranche').onclick = function() {
  trancheCount = trancheCount - 1;
  trancheNumber.innerText = trancheCount;
};


function animateTranche() {
  $( "#trancheImg").css('display',"block");
  $( "#trancheImg" ).animate({
    top: "-200px"
  }, 2000, function() {
  });
  // create element
  // add image
  // make it go up
    // while going up, reduce opacity
  // destroy element
};
