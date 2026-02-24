## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 

1.
* getElementById()-->
  selecte Element by using Id .
* id must be uniqe.
* Returns single element.
* fastest method then other .
* 
  2.getElementByClassName()-->
  *Selects elements using class name.
  *can return multiple elements.
  returns HTML collections,

  
  3.querySelectorAll()-->
  *selects the frist matching element.
  *use css selector.
  *more flexible.

  4.quereySelectorAll()---->

  *Selects all matching elements.
  *use css selectior.
  *Return NodeLIst.
  *it is a static collection 
  

### 2. How do you create and insert a new element into the DOM?

Ans:
*document.createElement() to create element.
*use-- innerHTML or innerText.
*appendChild() or append().


### 3. What is Event Bubbling? And how does it work?

*Event statas from target Element.
*Then moves upward to parent -->document.
*This upward movment is called Event Bubbiling.


### 4. What is Event Delegation in JavaScript? Why is it useful?

*Adding event listener to a parent element instead of child elements.
*Uses event bubbiling.
*Useful because its works for dynamic elements & emproves performance.


### 5. What is the difference between preventDefault() and stopPropagation() methods?

*PreventDefault()---> Stops default browser action .
*stopPrepagation()--> stope event bubbling to parent elements.





---
