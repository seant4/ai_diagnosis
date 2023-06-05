import tensorflow as tf
import tensorflowjs as tfjs
import os
from util import *

model = tf.keras.models.load_model('saved_models/model')
tfjs.converters.save_keras_model(model, 'web_model/model')


