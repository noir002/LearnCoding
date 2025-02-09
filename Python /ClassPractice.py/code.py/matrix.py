Row = int(input("Enter the number of rows: "))
Column = int(input("Enter the number of columns: "))

#Initialize matrix
matrix = []
print("Enter the entries row wise:")


# For user input
# A for loop for row entries
for i in range (Row):
    a = []
    #A for loop for column entries
    for j in range (Column):
        a.append(int(input()))
    matrix.append(a)

#For printing the matrix
for i in range (Row):
    for j in range(Column):
        print(matrix[i][j], end=" ")
    print()
    
