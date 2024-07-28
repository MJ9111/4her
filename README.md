# 4her

###User Story 1: Browse Products

As a user, I want to be able to browse through a list of available clothing products on the website, so that I can find something I like.

The website displays a list of pages and clothing products on the homepage.
Each product has a name, description, price, and image.
Products are categorized by type (e.g. tops, skirts, dresses, bages.).
User Story 2: Filter and Sort Products

As a user, I want to be able to filter and sort the list of clothing products by various criteria, so that I can quickly find what I'm looking for.

User Story 3: View Product Details

As a user, I want to be able to view detailed information about a specific clothing product, so that I can make an informed purchasing decision.

The shopping cart displays the products added, along with their prices and quantities.
The website provides a secure checkout process that accepts payment information.
User Story 5: User Account and Order History

Homepage: displays a list of available clothing products
Product page: displays detailed information about a specific clothing product
Shopping cart page: displays the products added to the user's cart
Checkout page: allows users to securely enter payment information
Account page: allows users to view their order history and save their information
Order history page: displays a user's past orders

project scope:
The project will be built using HTML, CSS, and JavaScript. The website will be hosted on a (4her)website aimes to provide an e-commerce platform for users to purchase clothing productts
1.product browsing and filtering
2.product details page
3.shopping cart and checkout process
4.user account and order history management
5.

###erd:
1.product id
2.name
3.description
4.price
5.image
6.category id

#categories:
1.category id
2.name

#users:

1.user id
2.email
3.password
4.name

#orders
1.order id
2.user id
3.order date

#order items:
1.order item id
2.order id
3.product id
4.quantity

over all relationship:

The relationships between the entities are:

A product belongs to one category.
A category has many products.
A user has many orders.
An order belongs to one user.
An order has many order items.
An order item belongs to one order and one product.


###wireframes:

#homepage:
1.header with navigation menu
hero section with featured products
product grid with filtering and sorting options
call to action buttons for shopping cart and account login


#product page:

1.header with navigation menu
product  image and details  name, descriotion, price
add to cart button 
related products section

#shopping cart page:
1.header with navigation menu
cart summary with total cost and items count
update cart and chrckout cta button

#checkout page:
1.header with navigation menu
order summary with items and total cost
shipping and payment form
place order button

#account page:
1.header with navigation menu
user profile information
order history with order summary and status
save informaion button

#order history page:
1.header with navigation menu
list of past orders dats and cost
view order details cta button

https://trello.com/b/YbAnJPqE/mj911