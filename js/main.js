$(".liri").click(function() {
	var win = window.open('https://github.com/mikelsito/liri-node-app', '_blank');
	if (win) {
	    //Browser has allowed it to be opened
	    win.focus();
	} else {
	    //Browser has blocked it
	    alert('Please allow popups for this website');
	}
});