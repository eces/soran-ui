###
  Author: Jinhyuk Lee
###

jQuery ->
  welcomeTitle = $('#welcomeTitle')
  if welcomeTitle.length > 0
    welcomeTitle.addClass 'animated'

  searchBox = $('#searchBox')
  if searchBox.length > 0
    c = searchBox.children '.container'
    c.addClass 'animated'

    searchHistory = $('div.search-history')
    if searchHistory.length > 0
      searchHistory.find('span').click (e) ->
        $(searchBox.find 'input[name=q]')
          .val $(this).html()
        $(searchBox.find 'button[type=submit]').trigger 'click'


  $('[data-toggle=tooltip]').tooltip()
  true

