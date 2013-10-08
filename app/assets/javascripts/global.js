function initDataTable(selector = '.data-table-gem') {
   $(selector).dataTable({
      "sPaginationType": "full_numbers",
      "bJQueryUI": true,
      "aoColumnDefs": [
                       { "bSortable": false, "aTargets": ['not-sortable'] },
                       { "sType": "num-html", "aTargets": ['num-html'] },
                       { "sType": "currency", "aTargets": ['currency-column'] }
                      ]
   })
}
