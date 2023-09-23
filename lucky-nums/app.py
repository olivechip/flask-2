from flask import Flask, render_template, request, jsonify
import random, requests

app = Flask(__name__)
app.config['SECRET_KEY'] = 'its_a_secret'

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route("/api/get-lucky-num", methods=["POST"])
def get_lucky_num():
    try:
        request_data = request.get_json()
        errors = {}

        required_fields = ['name', 'year', 'email', 'color']
        for field in required_fields:
            if field not in request_data:
                errors[field] = ["This field is required."]

        year = int(request_data.get('year'))
        if year is not None and (year < 1900 or year > 2023):
            errors['year'] = ["Invalid year, must be between 1900 and 2023."]

        email = request_data.get('email')
        if email is not None and ('@' not in email or '.' not in email):
            errors['email'] = ["Invalid email format."]

        color = request_data.get('color')
        colors = ['red', 'orange', 'green', 'blue']
        if color not in colors:
            errors['color'] = ["Invalid value, must be one of: red, green, orange, blue."]

        if errors:
            return (jsonify({"errors": errors}), 400)
    
        else:
            random_num = random.randint(1, 100)

            num_res = requests.get(f'http://numbersapi.com/{random_num}')
            num_data = num_res.text

            year_res = requests.get(f'http://numbersapi.com/{year}/year')
            year_data = year_res.text

            response_data = {
                "num": {
                    "fact": num_data,
                    "num": random_num
                },
                "year": {
                    "fact": year_data,
                    "year": year
                }
            }
            return jsonify(response_data)

    except Exception as e:
        return str(e), 500
