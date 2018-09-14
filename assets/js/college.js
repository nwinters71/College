/*
  $("#tblDatatr:has(td)").click(function(e) {
  $("#tblData td").removeClass("highlight");
  var clickedCell= $(e.target).closest("td");
  clickedCell.addClass("highlight");
  $("#spnText").html(
    'Clicked table cell value is: <b> ' + clickedCell.text() + '</b>');
  });
*/
currTwitter = "Yale";
$(document).ready(function() {
  //alert("Loaded!");
  //jsonTest();
  colleges = jsonColleges();
  $("#tblDatatr:has(.jump)").mouseover(function(e) {
    $(this).css("cursor", "pointer");   
  });

  $('.size').styleddropdown();
  
  $('.usnwr').on("click", function() {
      //alert($(this).attr("value"));
      $('#usnwrList').attr("baseurl", $(this).attr("value"));
      selectCell($(this));
  });

  $('.niche').on("click", function() {
      $('#nicheList').attr("baseurl", $(this).attr("value"));
      selectCell($(this));
  });

  $('.jump').on("click", function() {
      // $(this).css("background-color", "blue");
    // $("#explain").text('Hello World');
      if($(this).hasClass("premium") === false) {
        try {
          if ($(this).parent().attr("value").indexOf("^") != -1) {
            window.open($(this).parent().attr("value").replace("^", $(this).attr("value")));
          }
        } catch(err) {
          window.open($(this).attr("value"));
        }
      }
    /* else {
        window.open($(this).attr("value") + $(this).parent().attr("value"));        
      }*/      
  });
/*
$('.sub-niche').on("click", function() {
      //alert($(this).attr("value"));
      window.open($(this).attr("value") + $(this).parent().attr("value"));
      selectCell($(this));
  });
  $('.sub-cappex').on("click", function() {
      //alert($(this).attr("value"));
      window.open($(this).attr("value") + $(this).parent().attr("value"));
      selectCell($(this));
  });
*/
  
  $('.browse').on("mouseover", function() {
      this.style.backgroundColor='yellow';
      this.style.cursor='pointer';
      // $("img", this).attr("src", "./assets/images/external.svg");
  });
  $('.browse').on("mouseout", function() {
      this.style.backgroundColor='white';
      this.style.cursor='cursor';
      // $("img", this).attr("src", "./assets/images/external.svg");
  });

  $('.jump').on("mouseover", function() {
      if($(this).hasClass("premium")) {
        $("img", this).attr("src", "./assets/images/lock2.png");  
        highlightHeaders(this, "#9d9", "100%");
        this.style.backgroundColor='#9d9';
      } else {
        highlightHeaders(this, "#FF9933", "100%");
        this.style.backgroundColor='#FF9933';
        this.style.cursor='pointer';
        $("img", this).attr("src", "./assets/images/external.svg");
      }
  });

  $('.jump').on("mouseout", function() {
      highlightHeaders(this, "black", "100%");
      this.style.backgroundColor='white';
      $("img", this).attr("src", "./assets/images/space.png");      
  });
  
  console.log(colleges);

});

function highlightHeaders(TD, color, fs) {
  var td = $(TD);
  var tr = td.parent();
  var children = tr.children().length;
  var tdIndex = td.index()-1;
  var trIndex = tr.index()+2;
  var table = $("#jumpTable")[0];  
  var rowHeader = $(table.rows[trIndex].cells[0]);
  var colHeader = $(table.rows[1].cells[tdIndex]);
  rowHeader.css("color", color);  
  rowHeader.css("font-size", fs);
  colHeader.css("color", color);
  colHeader.css("font-size", fs);  
  $("#side-image").attr("src", "./assets/images/school/" + colleges[tdIndex].image);
  $("#side-title").text(colleges[tdIndex].name);
  $("#side-logo").attr("src", colleges[tdIndex].logo);
  $("#side-address").attr("href", 'https://maps.google.com/?q=' + colleges[tdIndex].address);
  $("#side-address").html(colleges[tdIndex].address);
  $("#side-phone").text(colleges[tdIndex].phone);
  // $("#side-map").attr("src", 'https://www.google.com/maps/embed/v1/place?key=Wt2NglZQFHLG4POYCFzNxOE4ANVUqyJT&q=' + colleges[tdIndex].address);

  
  /*
  if (currTwitter != $(table.rows[104].cells[tdIndex]).attr("value")) {
    currTwitter = $(table.rows[104].cells[tdIndex]).attr("value");
    $("#twTimeline").html(`<a class="twitter-timeline" href="` + currTwitter + `">Tweets</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`);    
  }
  */
  //console.log("Check1: (" + colHeader.text() +  ") " + $("#twitterTimeline").attr("href"));
  //console.log($("#twTimeline").children().attr("alt"));
  
  // console.log("Twitter updated?:" + $("#twTimeline").attr("href"));
}
  

// Code to hide/show subrows for sections with subrows
function sectionToggle(section) {
  $(".subrow-" + section).toggle();
  $("." + section + "-expand").toggle();
  $("." + section + "-collapse").toggle();  
}


// Pop up menu code
(function($) {
  $.fn.styleddropdown = function() {
    return this.each(function() {
      var obj = $(this)      
      obj.find('.list li').click(function() { //onclick event, change field value with selected 'list' item and fadeout 'list'
        window.open($(this).parent().parent().attr("baseurl") + $(this).attr("value"));        
      });
    });
  };
})(jQuery);  
  
function selectCell(TD) {
		if(TD.hasClass("tdSiteSelected")) {		
			TD.removeClass("tdSiteSelected");      
			$("#usnwrList").hide();
		} else {
			$(".tdSiteSelected").removeClass("tdSiteSelected");
			TD.addClass("tdSiteSelected");
      thisPos = TD.position();
      if(TD.hasClass("usnwr"))
        obj = $("#usnwrList");
      if(TD.hasClass("niche"))
        obj = $("#nicheList");      
      obj.css("left", thisPos.left);
      obj.css("top", thisPos.top);
      obj.find('.list').fadeIn(0);

      $(document).keyup(function(event) { //keypress event, fadeout on 'escape'
        if(event.keyCode == 27) {
          obj.find('.list').fadeOut(0);
        }
      });

      obj.find('.list').hover(function(){ },
      function() {
        $(this).fadeOut(0);
      });     
			$("#usnwrList").show();
		}
}

  
