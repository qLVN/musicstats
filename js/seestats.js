function navThroughPanes(way) {
    var numberOfPanes = 0;
    var activePaneIndex = null;

    document.getElementById('panes-wrapper').querySelectorAll('div').forEach(function(pane) {
        if(pane.parentNode.id == 'panes-wrapper') {
            numberOfPanes++;
            if(pane.className == 'active') {
                pane.classList.add('hide');
                activePaneIndex = numberOfPanes;
            }
        }
    });

    switch(way) {
        case 'next':
            activePaneIndex++;
            if(activePaneIndex > numberOfPanes) {
                activePaneIndex = null;
            }
            break;
        case 'previous':
            activePaneIndex--;
            if(activePaneIndex < 1) {
                activePaneIndex = null;
            }
            break;
    }

    if(activePaneIndex === null) {
        console.log('No active pane was found or the user cannot navigate more.');
        return;
    }

    setTimeout(function() {
        var i = 0;
        document.getElementById('panes-wrapper').querySelectorAll('div').forEach(function(pane) {
            if(pane.parentNode.id == 'panes-wrapper') {
                i++;
                if(i == activePaneIndex) {
                    pane.classList.add('active');
                }
                if(pane.classList.contains('hide')) {
                    pane.classList.remove('hide');
                    pane.classList.remove('active');
                }
            }
        })
    }, 500);
}