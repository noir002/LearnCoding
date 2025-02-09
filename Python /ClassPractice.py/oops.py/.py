class student:
    x=3
    print("INSIDE CLASS")
    print(x)
    def f(self):
        print("INSIDE CLASS")
    
s1=student()
s2=student()
print("OUTSIDE CLASS")
print(s1.x)






