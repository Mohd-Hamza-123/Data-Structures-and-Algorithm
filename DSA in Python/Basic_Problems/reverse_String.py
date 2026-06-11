# for loop 
string = "Mohd Hamza"
reversed_Str = ''

for letter in string:
    reversed_Str = letter + reversed_Str

print(reversed_Str)

# while loop
string = input("Enter string : ")

reverse_string = ""
i = len(string) - 1

while(i >= 0):
    reverse_string += string[i]
    i -= 1

print(reverse_string)











