$(document).ready(function(){
// alert("hi");

$(function (){
  $.get('https://www.reddit.com/r/aww/.json', function(awwData) {

    // console.log(awwData);
    // console.log(awwData.data.children[i]);
    for(var i=0; i<10; i++){
      var title = awwData.data.children[i].data.title;
      var author = awwData.data.children[i].data.author;
      var thumbnail = awwData.data.children[i].data.thumbnail;

      console.log(title);
      console.log(author);
      console.log(thumbnail);

      $('div').append('<img>');
      $('img:last').attr('src', thumbnail);
      $('div:last').append(title);
      $('div:last').append(author);
      $('div:last').append(thumbnail);




    };
  });
});
});
