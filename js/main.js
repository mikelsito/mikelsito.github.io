// Liri app on click
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

// Giphy Generator on click
$(".gif-gen").click(function() {
	var win = window.open('https://mikelsito.github.io/gif-generator/', '_blank');
	if (win) {
	    //Browser has allowed it to be opened
	    win.focus();
	} else {
	    //Browser has blocked it
	    alert('Please allow popups for this website');
	}
});

// Net Mix N' Chill on click
$(".net-mix").click(function() {
	var win = window.open('https://mikelsito.github.io/movie-drink-pairing/', '_blank');
	if (win) {
	    //Browser has allowed it to be opened
	    win.focus();
	} else {
	    //Browser has blocked it
	    alert('Please allow popups for this website');
	}
});

// Crystal Collector on click
$(".crystal-collector").click(function() {
	var win = window.open('https://mikelsito.github.io/crystal-collector/', '_blank');
	if (win) {
	    //Browser has allowed it to be opened
	    win.focus();
	} else {
	    //Browser has blocked it
	    alert('Please allow popups for this website');
	}
});


