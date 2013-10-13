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

      html = "<h4>" + equipment.name + "</h4>"

      $.each(stats, function(k, v) {
         html += "<span class='" + v + "'>" + v + ": " + equipment[v] + "<span class='comparison'></span> </span> <br /> <br />"
      })

      if ( $(firstItem).is(":empty") ) {
         $(firstItem).html(html)
         $(firstItem).data("item", JSON.stringify(equipment))
      } else {
         $(secondItem).html(html)
         $(secondItem).data("item", JSON.stringify(equipment))
      }


      if (isReadyToCompare()) {
         item1 = JSON.parse(getComparedItem(firstItem))
         item2 = JSON.parse(getComparedItem(secondItem))

         firstItemResult = item1.strength - item2.strength

         secondItemResult = (firstItemResult > 0) ? "-" + firstItemResult : firstItemResult * -1

         $(firstItem + " .strength .comparison").html(firstItemResult)
         $(secondItem + " .strength .comparison").html(secondItemResult)


      }
   })




})

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
