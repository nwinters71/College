$(document).ready(function() {
  $("#tblDatatr:has(.jump)").mouseover(function(e) {
  $(this).css("cursor", "pointer");
});

/*
  $("#tblDatatr:has(td)").click(function(e) {
  $("#tblData td").removeClass("highlight");
  var clickedCell= $(e.target).closest("td");
  clickedCell.addClass("highlight");
  $("#spnText").html(
    'Clicked table cell value is: <b> ' + clickedCell.text() + '</b>');
  });
*/
  $('.size').styleddropdown();
  
  $('.usnwr').on("click", function() {
      //alert($(this).attr("value"));
      $('#usnwrList').attr("baseurl", $(this).attr("value"));
      selectCell($(this));
  });

  $('.niche').on("click", function() {
      //alert($(this).attr("value"));
      $('#nicheList').attr("baseurl", $(this).attr("value"));
      selectCell($(this));
  });

  $('.sub-usnwr').on("click", function() {
      //alert($(this).attr("value"));
      window.open($(this).attr("value") + $(this).parent().attr("value"));
      selectCell($(this));
  });
  $('.sub-niche').on("click", function() {
      //alert($(this).attr("value"));
      window.open($(this).attr("value") + $(this).parent().attr("value"));
      selectCell($(this));
  });
  
  $('.jump').on("mouseover", function() {
      highlightHeaders(this, "#FF4300", "120%");
      this.style.backgroundColor='#FF4300';
      this.style.cursor='pointer';
  });

  $('.jump').on("mouseout", function() {
      highlightHeaders(this, "black", "100%");    
      this.style.backgroundColor='white';
  });

  // onmouseover="this.style.backgroundColor=&#39;yellow&#39;" 
  //onmouseout="this.style.backgroundColor=&#39;white&#39;; this.style.cursor=&#39;pointer&#39;"
 
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
  
  
(function($) {
  $.fn.styleddropdown = function() {
    return this.each(function() {
      var obj = $(this)
      
      // obj.click(selectCell(obj));
      /*
      obj.click(function() { //onclick event, 'list' fadein        
  
        obj.find('.list').fadeIn(00);

        $(document).keyup(function(event) { //keypress event, fadeout on 'escape'
          if(event.keyCode == 27) {
            obj.find('.list').fadeOut(00);
          }
        });

        obj.find('.list').hover(function(){ },
        function() {
          $(this).fadeOut(00);
        });
      }); */

    obj.find('.list li').click(function() { //onclick event, change field value with selected 'list' item and fadeout 'list'
      window.open($(this).parent().parent().attr("baseurl") + $(this).attr("value"));        
/*
        obj.find('.field')
          .val($(this).html())
          .css({
            'background':'#fff',
            'color':'#333'
          });
        obj.find('.list').fadeOut(00);
*/
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
  
  
  
