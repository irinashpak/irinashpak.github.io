$(function(){

  var completedCount = 0;

  $("li").click(lineThrough);

  function lineThrough() {
    
    if ($(this).hasClass('done')) {
    //has a class remove a class ('')
      $(this).attr('class', '');
      // var  Result = completedCount--;
      
      // console.log('complet before substracting', completedCount);
      completedCount = completedCount - 1;
      $("h3").text(completedCount);
      color();
      // console.log('complet after substracting', completedCount);
    //toggle
    //substract one

    } else {
    //add class
    // add 1 to completed count
      $(this).attr('class', 'done');
    
      // console.log('complet before adding', completedCount);
      completedCount = completedCount + 1;
      $("h3").text(completedCount);
      // calling function color
      color();
      // console.log('complet after adding', completedCount);
     // var Result = completedCount++;
    }

  // $("h3").text(Result);
  //no quotes here
  };

  function color() {
    if (completedCount <= 5) {
      $("body").attr("class","yellow");
    } else if (completedCount <=12) {
      $("body").attr("class"," ");
      $("body").attr("class","green");
    } else if (completedCount <=17) {
      $("body").attr("class"," ");
      $("body").attr("class","gr");
    } else if (completedCount <=25) {
      $("body").attr("class"," ");
      $("body").attr("class","yeah");
      $("h3").text("You are Done");
    } else {
      $("body").attr("class"," ");
    }
  }
  
  //   function color() {
  //   if (completedCount > 5) {
  //     $("body").attr("class","yellow");
  //   } else {
  //     $("body").attr("class"," ");
  //   }
  // }


//if it has remove, if id doesn't add

//   $("li").click(function(){
//     $(this).toggleClass("done");
//   });

// if (fun) {
//   'done' > 50%
//   $("body").addClass("green")
// };

//keep track of clicks
//and number of those

//if completed > 10 

});