import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="colizu",
    password="issaquah",
    database="wordament"
)

# print(mydb)
mycursor = mydb.cursor()
mycursor.execute("Select * from scores")
myresult = mycursor.fetchall()

for x in myresult:
    print(x)
