import os
from flask import Flask, flash, request, redirect, url_for
from flask_cors import CORS
from werkzeug.utils import secure_filename
import Predictor
UPLOAD_FOLDER = '/Users/nitish/Desktop/AI/'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
        filedir = '/Users/nitish/Desktop/AI/'+file.filename
        return(Predictor.use_classifier(filedir))
            
    

if __name__=='__main__':
    app.run(debug=True)