# app/routes.py
from flask import current_app as app, render_template, request

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/cadastro_fornecedor")
def cadastro_fornecedor():
    return render_template("cadastro_fornecedor.html")

@app.route("/teste")
def teste():
    return render_template("teste.html")

