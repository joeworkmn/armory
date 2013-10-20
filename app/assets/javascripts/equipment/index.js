$(document).ready(function() {

   // Page Elements
   firstItem = ".first-item"
   secondItem = ".second-item"
   compareLink = ".compare-link"




   initDataTable()

   $(".data-table-gem").on('click', compareLink, function(e) {
      e.preventDefault()

      equipment = $(this).data("attrs")
      stats = gon.stats


      // Build the HTML for the item
      html = "<div class='row'>"
      html += "<h4 class='large-12 columns'>" + equipment.name + "</h4>"
      html += "</div>"
      $.each(stats, function(k, stat) {
         html += "<div class='row'>"

         //html += "<span class='" + stat + "'><span class='comparison2'></span>" + stat + ": " + equipment[stat] + "<span class='comparison1'></span> </span> <br /> <br />"
         html += "<div class='large-4 columns " + stat + " comparison-item2'></div>"
         html += "<div class='large-4 columns " + stat + "'>" + stat + ": " + equipment[stat] + "</div>"
         html += "<div class='large-2 columns end " + stat + " comparison-item1'></div>"

         html += "</div> <br />"
      })

      // Populate the comparison section
      if ( $(firstItem).is(":empty") ) {
         $(firstItem).html(html)
         $(firstItem).data("item", JSON.stringify(equipment))
      } else {
         $(secondItem).html(html)
         $(secondItem).data("item", JSON.stringify(equipment))
      }


      // Calculate results.
      if (isReadyToCompare()) {
         item1 = JSON.parse(getComparedItem(firstItem))
         item2 = JSON.parse(getComparedItem(secondItem))

         $.each(stats, function(k, s) {
            result = item1[s] - item2[s]
            setStatComparisonResult(s, result)
         })

      }
   })




})

function setStatComparisonResult(stat, result) {
   //comparison1 = firstItem + " ." + stat + " .comparison1"
   //comparison2 = secondItem + " ." + stat + " .comparison2"
   comparison1 = firstItem + " ." + stat + ".comparison-item1"
   comparison2 = secondItem + " ." + stat + ".comparison-item2"

   if (result > 0) {
      result1HTML = "+" + result
      result2HTML = "-" + result

      $(comparison1).removeClass("minus").addClass("plus")
      $(comparison2).removeClass("plus").addClass("minus")
   } else if (result < 0) {
      result1HTML = result
      result2HTML = result.toString().replace('-', '+')

      $(comparison1).removeClass("plus").addClass("minus")
      $(comparison2).removeClass("minus").addClass("plus")
   } else {
      $(comparison1).removeClass("plus minus")
      $(comparison2).removeClass("plus minus")
      result1HTML = "+0"
      result2HTML = "+0"
   }

   $(comparison1).html(result1HTML)
   $(comparison2).html(result2HTML)
}


function isReadyToCompare() {
   if ( $.trim(getComparedItem(firstItem)) != "" &&  $.trim(getComparedItem(secondItem)) != "" ) {
      return true
   } else {
      return false
   }
}

function getComparedItem(item) {
   return $(item).data("item")
}
