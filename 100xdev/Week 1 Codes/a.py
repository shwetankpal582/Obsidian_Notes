price = 105.50
qty = 36
amount = price * qty

# Check for applicable discounts
if amount > 10000:
    print("10% discount applicable")
    discount = amount * 10 / 100
    amount = amount - discount
elif amount > 5000:
    print("5% Discount applicable")
    discount = amount * 5 / 100
    amount = amount - discount
elif amount > 2000:
    print("2% Discount is applicable")
    discount = amount * 2 / 100
    amount = amount - discount
elif amount > 1000:
    print("1% discount is applicable")
    discount = amount * 1 / 100
    amount = amount - discount
else:
    print("No discount applicable")

print("Amount payable:", amount)