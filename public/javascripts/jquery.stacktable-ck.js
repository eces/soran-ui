/**
 * MODIFIED CAUSE WE NEEDED OUR OWN MARKUP
 * stacktable.js
 * Author & copyright (c) 2012: John Polacek
 * Dual MIT & GPL license
 *
 * Page: http://johnpolacek.github.com/stacktable.js
 * Repo: https://github.com/johnpolacek/stacktable.js/
 *
 * jQuery plugin for stacking tables on small screens
 *
 */(function(e){e.fn.stacktable=function(t){var n=this,r={id:"stacktable",hideOriginal:!1},i=e.extend({},r,t),s;return n.each(function(){var t=e('<table class="'+i.id+'"><tbody></tbody></table>');typeof i.myClass!==undefined&&t.addClass(i.myClass);var n="";$table=e(this);$topRow=$table.find("tr").eq(0);$table.find("tr").each(function(t,r){var i="";t%2===0?i="even":i="odd";n+='<tr class="'+i+'">';e(this).find("td").each(function(t,r){if(e(this).html()!==""){n+='<tr class="'+i+'">';$topRow.find("td,th").eq(t).html()?n+="<td>"+$topRow.find("td,th").eq(t).html()+"</td>":n+="<td></td>";n+="<td>"+e(this).html()+"</td>";n+="</tr>"}})});t.append(e(n));$table.before(t);i.hideOriginal&&$table.hide()})}})(jQuery);