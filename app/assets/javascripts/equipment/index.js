$(document).ready(function() {
   initDataTable()

   $(".data-table-gem").on('click', '.compare-link', function(e) {
      e.preventDefault()

      equipment = $(this).data("attrs")
      stats = gon.stats

      html = "<h4>" + equipment.name + "</h4>"

      $.each(stats, function(k, v) {
         html += v + ": " + equipment[v] + "<br /> <br />"
      })

      if ( $(".first-item").is(":empty") ) {
         $(".first-item").html(html)
      } else {
         $(".second-item").html(html)
      }
   })
})
