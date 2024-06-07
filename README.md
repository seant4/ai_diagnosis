# AI DIAGNOSIS
AI Diagnosis is a neural network designed to predict the cause of a set of given symptoms

## Description
This project utilizes a Tensorflow neural network to provide predictions of diagnosis given a list of symptoms. The model utilizes 4 sequential layers, with the final utilizing softmax to provide a list of 41 probabilities that the diagnosis corresponds to the symptoms. The project also has a web user interface, allowing users to select symtpoms they have, and recieving the diagnosis back. 

# Getting Started

## Dependencies
* Numpy - Mathematical manipulation
* Pandas - Data manipulation
* Keras - Neural Network structure and development
* Matplotlib - Visualization library
* Sklearn - Machine learning for data splitting
* Tensorflow - Main Nueral Network framework

## Usage

* model_notebook.ipynb
  > The notebook provides a layout of how the data is cleaned and formatted, as well as how the network is made
* model.py
  > Converts the model into a format usable by TensorflowJS
* Util.py
  > Provides functions for data manipulation

## Authors

Sean Theisen

## License

This project is licensed under the MIT License
  
