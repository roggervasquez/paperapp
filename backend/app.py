from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes and origins

# Mock data for research papers
papers = [
    {
        "Id": 1,
        "Name": "Exploring the Quantum World",
        "Description": "A comprehensive review of quantum mechanics and its applications.",
        "CreatedDate": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "Status": "Published"
    },
    {
        "Id": 2,
        "Name": "Advances in Artificial Intelligence",
        "Description": "An analysis of recent developments in AI technologies and their impact on various industries.",
        "CreatedDate": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "Status": "Under Review"
    },
    {
        "Id": 3,
        "Name": "Climate Change and Future Predictions",
        "Description": "Examining the effects of climate change and modeling future environmental changes.",
        "CreatedDate": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "Status": "Rejected"
    }
]

@app.route('/papers', methods=['GET'])
def get_papers():
    return jsonify(papers)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
