list = ["hamza" , "Hamza" , "azra" , "Azra" , "Hamza"]

# Method - 1

repeated_Item = ""

for item in list:
    count = list.count(item)
    if(count > 1):
        repeated_Item = item
        break

if(repeated_Item == ''):
    print("All ELements are repeated")
else:
    print("first duplicate item :",repeated_Item)


# Method 2 :

list2 = ["hamza" , "Hamza" , "azra" , "Azra" , "Hamza"]

unique_set = set()

for item in list2:
    if item in unique_set:
        print("Duplicate is" , item)
        break
    else: 
        unique_set.add(item)
