import pandas as pd
import numpy as np

def printResult(result, y_labels):
    for i in range(len(result[0])):
        if(result[0][i] == 1):
            print("Diagnosis: {0}, given index[{1}]".format(y_labels[i], i))


def one_hot_encoding(data):
    encoded_data = pd.get_dummies(data)
    return encoded_data

def format_x(x):
    for i in range((17-len(x))):
        x = np.append(x,81)
    return x
        
