from google.appengine.ext import vendor
import tempfile
tempfile.SpooledTemporaryFile = tempfile.TemporaryFile

vendor.add('lib')
