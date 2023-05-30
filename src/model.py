import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import tensorflow as tf
import os

def one_hot_encoding(data):
    encoded_data = pd.get_dummies(data)
    return encoded_data

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

def main():
    x_train, y_train, symptom_results, y_labels = formatData()
    #y_train_labels is the list of possible diagnosis
    #y_train will be just the indicies
    x_train = x_train / 132
    y_train = one_hot_encoding(y_train)
    model = createModel(x_train, y_train, symptom_results, 0)
    test = np.array([84,55,114,116,81,81,81,81,81,81,81,81,81,81,81.0,81,81])
    test_cast = test.astype(int)
    test_cast = test_cast.tolist()
    for i in range(len(test)):
        print("Symptom: {0}, at given index[{1}]".format(symptom_results[test_cast[i]], test_cast[i]))
    test = test[np.newaxis,:] 
    result = model.predict(test)
    for i in range(len(result[0])):
        if(result[0][i] == 1):
            print("Diagnosis: {0}, given index[{1}]".format(y_labels[i], i))
main()
