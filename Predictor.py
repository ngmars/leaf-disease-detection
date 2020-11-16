import os
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow import keras
from keras.models import Model
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import cv2

model = load_model(r'./best-model.h5')
def testimage(img, label_map):    
    #plt.imshow(img)
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)

    images = np.vstack([x])
    class_index = model.predict_classes(images, batch_size=10)
    for name, index in label_map.items():
        if index == class_index[0]:
            return name

def test_he_image(sourceimg, label_map):    
    R, G, B = cv2.split(sourceimg)

    output1_R = cv2.equalizeHist(R)
    output1_G = cv2.equalizeHist(G)
    output1_B = cv2.equalizeHist(B)
    #save EQU
    equ = cv2.merge((output1_R, output1_G, output1_B))
    cv2.imwrite(r"./aiproject/src/Container/images/equ.jpg", equ)
    #plt.imshow(equ)
    x = image.img_to_array(equ)
    x = np.expand_dims(x, axis=0)

    images = np.vstack([x])
    class_index = model.predict_classes(images, batch_size=10)
    for name, index in label_map.items():
        if index == class_index[0]:
            return name

def leaf_segment(sourceimg):  
    hsv = cv2.cvtColor(sourceimg, cv2.COLOR_RGB2HSV)

    # find the green color 
    mask_green = cv2.inRange(hsv, (36,0,0), (86,255,255))
    # find the brown color
    mask_brown = cv2.inRange(hsv, (8, 60, 20), (30, 255, 200))
    # find the yellow color in the leaf
    mask_yellow = cv2.inRange(hsv, (21, 39, 64), (40, 255, 255))

    # find any of the three colors(green or brown or yellow) in the image
    mask = cv2.bitwise_or(mask_green, mask_brown)
    mask = cv2.bitwise_or(mask, mask_yellow)

    # Bitwise-AND mask and original image
    #Save res
    res = cv2.bitwise_and(sourceimg,sourceimg, mask=mask)
    cv2.imwrite(r"./aiproject/src/Container/images/res.jpg", res)

def use_classifier(imgdir):
    img = image.load_img(imgdir, target_size=(224, 224))
    sourceimg = np.copy(img)
    label_map = {'Apple scab': 0, 'Apple Black rot': 1, 'Apple Cedar apple rust': 2, 'Apple healthy': 3, 'Blueberry healthy': 4, 'Cherry Powdery mildew': 5, 'Cherry healthy': 6, 'Corn Cercospora Gray leaf spot': 7, 'Corn Common rust': 8, 'Corn Northern Leaf Blight': 9, 'Corn healthy': 10, 'Grape Black rot': 11, 'Grape Esca': 12, 'Grape Leaf blight': 13, 'Grape healthy': 14, 'Orange Haunglongbing': 15, 'Peach Bacterial spot': 16, 'Peach healthy': 17, 'Bell Pepper Bacterial spot': 18, 'Bell Pepper healthy': 19, 'Potato Early blight': 20, 'Potato Late blight': 21, 'Potato healthy': 22, 'Raspberry healthy': 23, 'Soybean healthy': 24, 'Squash Powdery mildew': 25, 'Strawberry Leaf scorch': 26, 'Strawberry healthy': 27, 'Tomato Bacterial spot': 28, 'Tomato Early blight': 29, 'Tomato Late blight': 30, 'Tomato Leaf Mold': 31, 'Tomato Septoria leaf spot': 32, 'Tomato Two spotted spider mite': 33, 'Tomato Target Spot': 34, 'Tomato Yellow Leaf Curl Virus': 35, 'Tomato mosaic virus': 36, 'Tomato healthy': 37}
    
    name1 = testimage(img,label_map)
    name2 = test_he_image(sourceimg,label_map)
    
    name3 = leaf_segment(sourceimg)
    return (name1)

