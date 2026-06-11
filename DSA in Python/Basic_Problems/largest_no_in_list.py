li = []

maximum_no = li[0] if len(li) > 1 else None  

for num in li:
    if(maximum_no < num):
        maximum_no = num 

print("Maximum Number = ",maximum_no)