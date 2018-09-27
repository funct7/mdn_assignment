var spCurrSelectBox = document.getElementsByClassName('style-scope sylvan-starting-point-selector')[1],
    listItems       = spCurrSelectBox.children[1].children;

Array.from(listItems).forEach(function(item) {
    if (item.textContent !== 'Pre-Algebra') { item.remove(); }
})

// for (var i = 0; i < listItems.length; i++) { 
//   if (listItems[i].textContent !== 'Pre-Algebra') { listItems[i].remove(); }; 
// }