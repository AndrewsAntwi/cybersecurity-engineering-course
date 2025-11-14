# vulnerable-code.py - example vulnerable SQL concatenation
user_input = "1' OR '1'='1"
query = "SELECT * FROM users WHERE id='" + user_input + "';"
print("VULNERABLE QUERY:", query)
