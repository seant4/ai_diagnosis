import pandas as pd
import numpy as np
from keras.utils import to_categorical
def printResult(result, y_labels):
    for i in range(len(result[0])):
        print("Diagnosis: {0}, likelyhood[{1}]".format(y_labels[i], result[0][i]))


def one_hot_encoding(data):
    return (pd.get_dummies(data['Disease']))

def format_x(x):
    for i in range((17-len(x))):
        x = np.append(x,81)
    return x
        
