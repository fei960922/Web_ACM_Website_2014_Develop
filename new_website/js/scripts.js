/* affix the navbar after scroll below header */
$("#heading").affix({
      offset: {
        top: $(window).height()-$("#heading").height()
      }
});	
