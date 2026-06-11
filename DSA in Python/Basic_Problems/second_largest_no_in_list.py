li = [1,2,1,3,55,55]

def find_second_largest_no(li):
    if len(li) < 2:
        return None
    else:
        largest_no = float("-inf")
        second_largest_no = float("-inf")
        
        i = 0
        while(i < len(li)):
            current_number = li[i]
            if current_number > largest_no:
                second_largest_no = largest_no
                largest_no = current_number
            else: 
                if current_number > second_largest_no and current_number != largest_no:
                    second_largest_no = current_number

            i += 1 
        if (second_largest_no == float("-inf") and float("-inf") not in li):
            return None
        return second_largest_no
                

result = find_second_largest_no(li)
print(result)




# METHOD TWO 

def find_second_largest_no(li):
    if len(li) < 2:
        return None
    largest = None
    second_largest = None

    for num in li:
        if largest is None or num > largest:
            second_largest = largest
            largest = num

        elif num != largest:
            if second_largest is None or num > second_largest:
                second_largest = num

    return second_largest


li = [1, 2, 1, 3, 55, 55]

result = find_second_largest_no(li)
print(result)