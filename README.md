syncopasian
===========

Developing the website 

Getting Started
- Make sure you have the Google Cloud SDK installed: https://cloud.google.com/sdk/docs/quickstarts
- gcloud auth login [syncopasian's gmail account]
- pip install -t lib -r requirements.txt

Showing Your Changes In Localhost:
- dev_appserver.py app.yaml
- see the website on http://localhost:8080

Deploying Your Changes
- commit and push
- gcloud app deploy
