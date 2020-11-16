# Leaf-Disease-Detection
<h3>
Agricultural crop disease classification has been performed with the images from PlantVillage dataset using pre trained deep learning architecture namely VGG16 net.
<br/><br/>
The model was implemented with callbacks - Early Stopping, Reduced Learning Rate On Plateau and Model checkpoints. The classification accuracy using 70295  images was approximately 95% for VGG16 net . 
<br/><br/>
The performance of the models has been evaluated by modifying the number of images, setting various batch sizes and varying the weight and bias learning rate. The number of images significantly affected the performance of the model. 
<br/><br/><br/>
With the crop diseases being correctly identified minimum 95% of the time, we can aspire to help our farmers detect crop infections at an early stage. This would aid them to plan farming techniques that are more effective than the previous ones they were following.
</h3>

<br/><br/>
<h1 align="center">Architecture Diagram of the Model </h1>
<p align="center">
  <img src="/ach diag.png"  title="hover text">
</p>
<br/><br/>
<h1 align="center">GUI </h1>
<br/><br/>
<p align="center">
  <img src="/GUI1.png"  title="hover text">
  <img src="/GUI2.png"  title="hover text">
</p>

<h1> TO RUN CODE </h1>
<p style="font-size:24px">
<ol>
  <li> OPEN TERMINAL AND </li>
  <li>STEP 1: python3 PRED_API.py </li>
  <li>STEP 2: cd aiproject</li>
  <li>STEP 3: npm i</li>
  <li>STEP 4: npm start, this will start the react based front end</li>
  <li>The saved weights are store best-model.h5</li>
  <li>Model.ipynb has the model </li>
</ol>

</p>
