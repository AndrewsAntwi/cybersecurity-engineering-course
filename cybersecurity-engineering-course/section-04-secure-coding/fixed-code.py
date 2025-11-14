# fixed-code.py - parameterized query example (psycopg2 style)
user_input = "1"
query = "SELECT * FROM users WHERE id = %s"
params = (user_input,)
print("SAFE QUERY:", query, "params:", params)
