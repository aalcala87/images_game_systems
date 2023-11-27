"use strict";

$(document).ready(function() {
    $("#image_list a").each(function() {
      let image = $(this).attr("href");
      let caption = $(this).attr("title");
      let img = new Image();
      img.src = image;
      img.alt = caption;
    });
  
    $("#image_list a").click(function(evt) {
      //Cancel default action of link
      evt.preventDefault(); 
      
      //Display image and caption
      let image = $(this).attr("href");
      let caption = $(this).attr("title");
  
      //Update image and caption
      $("#image").attr("src", image).attr("alt", caption);
      $("#caption").text(caption);
    });
  
    //Focus to the first link
    $("#image_list a:first").focus();
  });