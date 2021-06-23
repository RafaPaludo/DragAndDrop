# DragAndDrop
![Badge](https://img.shields.io/badge/status-doing-yellow)
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/RafaPaludo)](https://github.com/RafaPaludo)

This project has to porpouse to enhance my knowleadge about JS events and other stuffs releated to it, as:
* dashboards;
* UI Interface; 
* DOM manipulation

I've learned the basics of JavaScript and for this project the main go is create a interface / dashboard that shows exemples of drag and drop API.

The first quest is to create a Dashboard using only HTML / CSS / Vanilla JS. No frameworks nor pre-processors. The upcoming versions maybe use Sass and Vue.js.

For each exemple, I will provide tutorial links and resources that I searched to complete the quest.

Hope you enjoy!

## Drag and Drop API
Basically is necessary to use some events to manipulate elements around the document. The element that will be placed and the dropzone to drop it.

### The following events are used in element:

Event | Fires when
---- | ----
dragstart | element is clicked 
dragend | put the element down

### The following events are used in dropzone:

Event | Fires when
---- | ----
dragenter | element enter the dropzone
dragleave | element leave the dropzone
dragover | there's an element above it, it fires all the time
drop |  the element is dropped

##### [Mozilla Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
##### [RocketSeat Dropcode](https://www.youtube.com/watch?v=6wn8hpUcEcM&t=579s)
##### [Drag Element](https://www.kirupa.com/html5/drag.htm)
##### [Remove 'ghost preview'](https://stackoverflow.com/questions/38655964/how-to-remove-dragghost-image)
##### [Angular Material](https://material.angular.io/cdk/drag-drop/overview#getting-started)
---


### Basic 
A card element is clicked and can be positioned in any part of the body. 
Uses translate property, calculate based on cliked area and current card position.

