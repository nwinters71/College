/*
  $("#tblDatatr:has(td)").click(function(e) {
  $("#tblData td").removeClass("highlight");
  var clickedCell= $(e.target).closest("td");
  clickedCell.addClass("highlight");
  $("#spnText").html(
    'Clicked table cell value is: <b> ' + clickedCell.text() + '</b>');
  });
*/
$(document).ready(function() {
  //alert("Loaded!");
  jsonTest();    
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

  $('.sub-usnwr, .sub-niche, .sub-cappex').on("click", function() {      
      if ($(this).parent().attr("value").indexOf("^") != -1) {
        window.open($(this).parent().attr("value").replace("^", $(this).attr("value")));
      } else {
        window.open($(this).attr("value") + $(this).parent().attr("value"));        
      }
      selectCell($(this));
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
  
  $('.jump').on("mouseover", function() {
      highlightHeaders(this, "#FF4300", "120%");
      this.style.backgroundColor='#FF4300';
      this.style.cursor='pointer';
  });

  $('.jump').on("mouseout", function() {
      highlightHeaders(this, "black", "100%");    
      this.style.backgroundColor='white';
  });

});

function highlightHeaders(TD, color, fs) {
  var td = $(TD);
  var tr = td.parent();
  var children = tr.children().length;
  var tdIndex = td.index();
  var trIndex = tr.index()+1;
  var table = $("#jumpTable")[0];      
  var rowHeader = $(table.rows[0].cells[tdIndex]);
  var colHeader = $(table.rows[trIndex].cells[0]);
  rowHeader.css("color", color);  
  rowHeader.css("font-size", fs);
  colHeader.css("color", color);  
  colHeader.css("font-size", fs);  
}
  
  
function usnwrToggle() {
  $(".subrow-usnwr").toggle();
  $(".usnwr-expand").toggle();
  $(".usnwr-collapse").toggle();
}
function nicheToggle() {
  $(".subrow-niche").toggle();
  $(".niche-expand").toggle();
  $(".niche-collapse").toggle();
}
function cappexToggle() {
  $(".subrow-cappex").toggle();
  $(".cappex-expand").toggle();
  $(".cappex-collapse").toggle();
}
function collegeDataToggle() {
  $(".subrow-collegeData").toggle();
  $(".collegeData-expand").toggle();
  $(".collegeData-collapse").toggle();
}
  
  
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
  //alert("Hello World");
	//console.log(event.target);
	// if( ! $(event.target).is('a') ) {
		if(TD.hasClass("tdSiteSelected")) {		
			TD.removeClass("tdSiteSelected");      
			$("#usnwrList").hide();
		} else {		
			$(".tdSiteSelected").removeClass("tdSiteSelected");
			TD.addClass("tdSiteSelected");
			// $(".tdSiteSelected").html("#usnwrList");
      // alert("Pos: " + TD.position().left);
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

      
      // window.open(obj.attr("baseurl") + $(this).attr("value"));
      // window.open($('#usnwrList').attr("baseurl") + $(this).attr("value"));
      // window.open(obj.attr("value") + $(this).attr("value"));

      
			$("#usnwrList").show();
		}
	// } else {
	//	window.open(event.target.href + "/administrator/index.cfm");
	// }
}
  
  
  
