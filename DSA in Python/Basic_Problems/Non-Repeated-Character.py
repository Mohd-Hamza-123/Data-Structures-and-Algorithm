sentence = "his is mee MMoohdd HHamzza"
first_non_repeated_charcter = ""


# method 1 : 
for letter in sentence:
   count = sentence.count(letter)

   if(count == 1):
      first_non_repeated_charcter = letter
      break

print(first_non_repeated_charcter)


# Method - 2
counter = 0
non_repeated_char = ""

for letter in sentence:
   counter = 0
   for x in sentence:
      if(x == letter):
         counter = counter + 1
   if(counter == 1):
      non_repeated_char = letter
      break
   
if(non_repeated_char == ""):
   print("No non repeated charatcer founder")
else:
   print(non_repeated_char)
