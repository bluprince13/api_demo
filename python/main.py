from flask import Flask
from flask import request
from flask import jsonify

app = Flask(__name__)

# logic for getting sum
def add(a, b):
    return a + b

# add handler
@app.route("/add", methods=["POST"])
def handleAdd():
    data = request.get_json()
    print(data)
    a = int(data["a"])
    b = int(data["b"])
    print("Received request to add {} and {}".format(a, b))
    result = add(a, b)
    print("Sum is {}".format(result))
    result = {"sum": result}
    return jsonify(result)

if __name__ == "__main__":
    app.run()
