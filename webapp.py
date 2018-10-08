from flask import Flask, url_for, render_template

app = Flask(__name__)

# global pages = ["Home", "Page 1", "Page 2"]

@app.route("/") #annotation tells the url that will make this function run
def render_main():
    return render_template('index.html')
    # 1: Looks for, creates, and sets global variables in template
    # 2: Content from blocks in child copied into layout template
    # 3: If statements run
    # 4: Final rendered HTML send to client

@app.route("/createAPage")
def render_cop():
    return render_template('createAPage.html')

@app.route("/pageSummary")
def render_psum():
    return render_template('pageSummary.html')

@app.route("/wikiPage")
def render_wikiPage():
    return render_template('blankPage.html')

if __name__=="__main__":
    app.run(debug=False, port=54321)
