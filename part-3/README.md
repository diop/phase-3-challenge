## Part 3: Web interface for grocery store

Create a front-end only site for an online grocery store where users can choose from a list of items and add them to a cart.

You only need to write HTML, CSS, and JavaScript. No web server is required.

The initial layout has already been provided for you in the [grocer.html][grocer-html] and [grocer.css][grocer-css] files. From this base, build the modal and add interactive behavior with JS.

Note that this interface has been intentionally simplified for the purposes of this challenge: for example, when adding multiple items it will just duplicate the same item instead of adding to a quantity.

### Wireframe

Clicking on the "Cart" button opens the cart modal.

![modal](https://user-images.githubusercontent.com/709100/28130774-e553e572-6705-11e7-9477-bc8e17f8e71e.png)

### Requirements

- [ ] __10:__ All files are stored under the `part-3/` folder
- [ ] __20:__ No third party CSS or JS libraries are used (all code must be written from scratch)
- [ ] __10:__ HTML, CSS, and JS are separated into their own files.
- [ ] __20:__ Clicking on a section in the "Sections" sidebar will jump to that section in the page
- [ ] __20:__ Clicking on "Add to cart" will update the number displayed next to the "Cart" button to show the total number of items in the user's cart
- [ ] __20:__ Clicking on the "Cart" button will show the cart modal with a list of all items added
- [ ] __20:__ Clicking on the "Clear" button in the cart modal removes all items from the cart
- [ ] __20:__ Clicking on the "X" button in the cart modal closes the modal
- [ ] __20:__ The "Total" in the cart modal shows the calculated sum of all item prices

[grocery-data]: https://gist.github.com/lg-bot/1be9e9b91fc0f972b74b72df34c99d3d#file-grocery-csv
[grocer-html]: https://gist.github.com/lg-bot/1be9e9b91fc0f972b74b72df34c99d3d#file-grocer-html
[grocer-css]: https://gist.github.com/lg-bot/1be9e9b91fc0f972b74b72df34c99d3d#file-grocer-css
