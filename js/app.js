(function()
{
  // const fillRed = document.querySelector('.fillRed');
  // const fillOrange = document.querySelector('.fillOrange');
  // const fillYellow = document.querySelector('.fillYellow');
  // const fillGreen = document.querySelector('.fillGreen');
  // const fillBlue = document.querySelector('.fillBlue');

  const items = document.querySelectorAll('[data-draggable="item"]');

  // const empties = document.querySelectorAll('.empty');

  //get the collection of draggable items and add their draggable attribute
  for(let  i = 0; i < items.length; i ++)
  {
    items[i].setAttribute('draggable', 'true');
  }

  //variable for storing the dragging item reference 
  //this will avoid the need to define any transfer data 
  //which means that the elements don't need to have IDs 
  let item = null;

  //dragstart event to initiate mouse dragging
  document.addEventListener('dragstart', function(e)
  {
    //set the item reference to this element
    item = e.target;
    
    //we don't need the transfer data, but we have to define something
    //otherwise the drop action won't work at all in firefox
    //most browsers support the proper mime-type syntax, eg. "text/plain"
    //but we have to use this incorrect syntax for the benefit of IE10+
    e.dataTransfer.setData('text', '');
    console.log('dragstart');
  }, false);

  //dragover event to allow the drag by preventing its default
  //ie. the default action of an element is not to allow dragging 
  document.addEventListener('dragover', function(e)
  {
    if(item)
    {
      e.preventDefault();
    }
  }, false);

  //drop event to allow the element to be dropped into valid targets
  document.addEventListener('drop', function(e)
  {
    //if this element is a drop target, move the item here 
    //then prevent default to allow the action (same as dragover)
    if(e.target.getAttribute('data-draggable') == 'target')
    {
      e.target.appendChild(item);
      
      e.preventDefault();
    }

  }, false);

    //dragend event to clean-up after drop or abort
  //which fires whether or not the drop target was valid
  document.addEventListener('dragend', function(e)
  {
    item = null;
  
  }, false);


})();

//
//
//
// // Fill Listeners
// fillRed.addEventListener('dragstart', dragStart);
// fillRed.addEventListener('dragend', dragEnd);

// // Loop through empties and call drag events
// for(const empty of empties) {
//   empty.addEventListener('dragover', dragOver);
//   empty.addEventListener('dragenter', dragEnter);
//   empty.addEventListener('dragleave', dragLeave);
//   empty.addEventListener('drop', dragDrop);
// }


// // Drag funtions
// function dragStart() {
//   this.className += ' hold';
//   setTimeout(() => (this.className = 'invisible'), 0);
// }

// function dragEnd() {
//     this.className = 'fillRed';
// }


// function dragOver(e) {
//   e.preventDefault();
// }

// function dragEnter(e) {
//   e.preventDefault();
//   this.className += ' hovered';
// }

// function dragLeave() {
//   this.className = 'empty';
// }

// function dragDrop() {
//   this.className = 'empty';
//   this.append(fillRed);
// }