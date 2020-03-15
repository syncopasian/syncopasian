syncopasian
===========

Developing the website 

Getting Started
- Make sure you have the Google Cloud SDK installed: https://cloud.google.com/sdk/docs/quickstarts
- gcloud auth login [syncopasian's gmail account]
- pip install -t lib -r requirements.txt

Showing Your Changes In Localhost:
- The site has been migrated to Python 3, but you must be using an environment that also has access to Python 2. The libraries are in Python 3, but Python 2.7 is necessary to use dev_appserver.py .
- dev_appserver.py app.yaml
- see the website on http://localhost:8080

Deleting Old Versions (if you have more than 15 versions)
- gcloud app versions list
- gcloud app versions delete [version name]

Deploying Your Changes
- commit and push
- gcloud app deploy
