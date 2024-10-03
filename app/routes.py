# app/routes.py
from flask import current_app as app, render_template, request

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/modulos")
def modulos():
    return render_template("modulos.html")

@app.route("/orcamentacao")
def orcamentacao():
    return render_template("orcamentacao.html")

@app.route("/contratos")
def contratos():
    return render_template("contratos.html")

@app.route("/financeiro")
def financeiro():
    return render_template("financeiro.html")

@app.route("/suprimentos")
def suprimentos():
    return render_template("suprimentos.html")

@app.route("/obras")
def obras():
    return render_template("obras.html")

@app.route("/qualidade")
def qualidade():
    return render_template("qualidade.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/desenvolvimento")
def desenvolvimento():
    return render_template("desenvolvimento.html")

@app.route("/novo_pedido")
def novo_pedido():
    return render_template("novo_pedido.html")

