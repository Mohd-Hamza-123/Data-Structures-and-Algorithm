x = [32,54,90,23,32,90]
y = [90,4,5,32,90]


# USING LOOP
z = []
for e in y:
    if e in x and e not in z:
        z.append(e)
print(z)

# USING SET
result = list(set(x) & set(y))
print(result)
