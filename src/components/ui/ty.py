db = DB()

db.insert("table", {"id": 1, "name": "John", "age": 20})
db.insert("table",{"id": 2, "name": "Jane", "age": 21})

db.query("table",["name"])
# [{name: "John"}, {name: "Jane"}]

db.query("table", ["name", "age"])
# [{name: "John", age: 20}, {name: "Jane", age: 21}]

db.insert("table", {"id": 1, "name": "Jon"})
# THEY DONT GIVE YOU THIS ONE
