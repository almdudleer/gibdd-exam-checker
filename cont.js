setInterval(() => {
	window.location.reload();
}, 15000)

window.onload = () => {
	let firstDate = document.querySelector('.item:not(.dimmed)').childNodes[1].innerText;
	chrome.storage.local.get(['gibdddate'], function(result) {
          if (firstDate !== result.gibdddate) {
          	chrome.storage.local.set({gibdddate: firstDate}, function() {
          		console.log('New first date: ' + firstDate);
          			let url = chrome.runtime.getURL('note.mp3');
					let a = new Audio(url);
					a.play();
        	});
          } else {
          	console.log('First date is still ' + firstDate);
          }
    });
}
