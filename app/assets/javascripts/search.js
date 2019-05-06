var thUsers= new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: '/search_user/%QUERY',
        wildcard: '%QUERY',
        cache: false
    }
});
document.addEventListener("turbolinks:load", function(){
    alert("it works!");
    $('.typeahead').typeahead(null, {
        name: 'user',
        display: 'user',
        source: thUSers
       });
      });