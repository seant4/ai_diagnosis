import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import tensorflow as tf
import tensorflowjs as tfjs
import os
from util import *

def formatData():
    x_train = pd.read_csv("../data/x_train.csv")
    y_train = pd.read_csv("../data/y_train.csv")
    y_train = y_train.squeeze()
    x_labels = pd.read_csv("../data/x_labels.csv")
    x_labels = [i[0] for i in x_labels.values.tolist()]
    y_labels = pd.read_csv("../data/y_labels.csv")
    y_labels = [i[0] for i in y_labels.values.tolist()]
    return x_train, y_train, x_labels, y_labels

def createModel(x_train, y_train, symptom_results, args):
    checkpoint_path = "training_1/cp.ckpt"
    checkpoint_dir = os.path.dirname(checkpoint_path)
    cp_callback = tf.keras.callbacks.ModelCheckpoint(filepath=checkpoint_path,
                                                 save_weights_only=True,
                                                 verbose=1)
    if(args == 1):
        model = tf.keras.models.Sequential([
            tf.keras.layers.InputLayer(input_shape=(x_train.shape[1],)),
            tf.keras.layers.Dense(17, activation='relu'),
            tf.keras.layers.Dense(9, activation='relu'),
            tf.keras.layers.Dense(41, activation='softmax')
            ])
        model.compile(optimizer='adam',
                      loss='mse',
                      metrics=['accuracy'])

        history = model.fit(x_train.to_numpy(), y_train, epochs=50, callbacks=[cp_callback])
        model.save('saved_models/model')
        return model
    else:
        model = tf.keras.models.load_model('saved_models/model')
        return model 

def predict(x, model, symptom_results, y_labels):
    x_index = x.astype(int)
    x_index = x_index.tolist()
    for i in range(len(x)):
        if(x[i] != 81):
            print("Symptom: {0}, at given index[{1}]".format(symptom_results[x_index[i]], x_index[i]))
    x = x[np.newaxis,:]
    result = model.predict(x) 
    printResult(result, y_labels)

def main():
    x_train, y_train, symptom_results, y_labels = formatData()
    #y_train_labels is the list of possible diagnosis
    #y_train will be just the indicies
    x_train = x_train / 132
    y_train = one_hot_encoding(y_train)
    model = createModel(x_train, y_train, symptom_results, 0)
    #tfjs.converters.save_keras_model(model, 'web_model/model')
    test_data = format_x(np.array([84,55,114,116]))
    predict(test_data, model, symptom_results, y_labels)


main()
