## Getting Started
* Fork and clone this repo
* Run `yarn` to install all necessary dependencies
* Run `yarn start` to start up the app

## Part 1
#### Preparing to build

Someone from the design team sent over some mockups of our camera shops home page.
Your first step should be to diagram out the component hierarchy of the app on a whiteboard or piece of paper.

If it's easier to write things out while you are trying to solidify things, consider using a simple bulleted list. Both are simple tools for quickly mocking out a tree, which is what a component hierarchy is.

Don't worry about the sorting, add-to-cart functionality or styling at the moment,
just focus on the arrangement and nesting of components and content on the page.
Take a look at the `<App />` component provided for you as a starting point for your diagram.

Ask yourself. What logical collection of elements should be grouped together to comprise a component?
Of those components which ones should be subcomponents of another component?

![Mock Up](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/480/camera-shop-mock.jpg)

Once you have sketched out the component hierarchy start to implement a static version of it in React.
Have your components render out placeholder text of the name of the component if that helps you visualize the components, as the Header/Main/Footer components are right now in the components folder.

<hr />

## Part 2
### Style your app.

**Base Goal**: Use Reactstrap to style the app.

**Stretch Goal** (only if you have already finished the version with Reactstrap): Restyle in MaterialUI

<hr />

## Part 3
### Requirements:

![Camera Shop Example](camera_example_part2.gif)

The camera shop page will require the following functionality:

1. Display of the data in some format.
1. The price is formatted into a currency
1. The words "On SALE!" (or some form) are used when `onSale` is true
1. The ability to sort by name or rating (default is name)
1. The ability to search to filter the results (keeping the same order).
1. A custom filter to handle the conversion of the rating from a number
   to asterisks. It is assumed that the rating will be an integer.

## Requirements - Part 2

The goal of part 2 is to add cart functionality.

### User Stories:

1. When the user clicks "Add to Cart", the cart manages the item inserted. Subsequent adds increase the quantity of the item.
1. User can remove an item from the cart by clicking on a button (it will remove the entire quantity of that item).
1. The subtotal, tax (use 8.6%), and total are calculated in place.

<hr />

## Stretch Goals

### Use React Router v4 to build a React user interface.

### User stories:
* When a user visits "/" your new Home component should render.
* When a user visits "/cart" a Cart, or checkout, component should render.

The `Cart` (or `Checkout`) component is different from your live cart preview component, but instead the page where users will fill in their info when submitting an order.

#### Bonus 1:

You now have a new checkout page, and that very first component looks quite similar to our live cart preview component on the home page.
The only difference is that it doesn't display the list of items and there is no button.

Find a way to reuse your live cart preview component on the checkout page but so that the list and button don't get rendered.

#### Bonus 2:

Add a `<Miss />` component that renders a NotFound component for when a user visitings a path that does not exist in your app.


<hr />

## Resources
- [Reactstrap](https://reactstrap.github.io/)
- [React](https://facebook.github.io/react/)
