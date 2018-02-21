from flask import render_template

@app,route('/', methods=["GET"])
def index():
    return render_template("main_page.html")
