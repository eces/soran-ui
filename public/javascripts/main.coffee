###
  Author: Jinhyuk Lee
###

jQuery ->
  newsfeed = $('button#newsfeedButton')
  if newsfeed.length > 0
    newsfeed.click (e) ->
      $('#newsfeed').slideToggle()
  listen = $('table#listen')
  if listen.length > 0
    listen.find('tbody tr').click (e) ->
      $(this).toggleClass 'checked'
  $('[data-toggle=tooltip]').tooltip()
  true

