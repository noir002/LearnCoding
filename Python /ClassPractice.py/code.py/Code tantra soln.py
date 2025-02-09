N = int(input("Enter N: "))

i=1
while(i<=N):
    if(i%2==0):
        print("{} is Even".format(i))
    else:
        print("{} is Odd".format(i))
    i=i+1
