# Expense Tracker API Documentation

# First Step 
1) npm install / npm i 
2) npm run dev / nodemon run dev

**Base URL**
 
http://localhost:3000

**Endpoints**

# Get All Expenses 

# URL: /expenses
# Method: GET
# Success Response:
Code: 200
Content: JSON array of expenses
# Error Response:
Code: 500
Content: { "message": "Internal Server Error" }


# Add New Expense  
 
# URL: /expense
# Method: POST
Request Body:
json
 

{
  "category": "Groceries",
  "amount": 50.00,
  "description": "Bought fruits and vegetables"
}

# Success Response:
Code: 201
Content: JSON object of the newly created expense
# Error Response:
Code: 400
Content: { "message": "Bad Request" }


## Update Expense
# Update an existing expense.

# URL: /expense/:id
# Method: PUT
Path Variable: id (ID of the expense to be updated)
Request Body: (Any fields you want to update)
json
 
{
  "category": "Utilities"
}
# Success Response:
Code: 200
# Content: JSON object of the updated expense
# Error Response:
Code: 400
Content: { "message": "Bad Request" }

# Delete Expense 

# URL: /expense/:id
# Method: DELETE
# Path Variable: id (ID of the expense to be deleted)
# Success Response:
Code: 200
Content: { "message": "Expense deleted" }
# Error Response:
Code: 500
Content: { "message": "Internal Server Error" }