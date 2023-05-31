console.log("Hello, World!");

const model: any = await tf.loadLayersModel("../data/model/model/model.json");
const x: int[][] = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
document.getElementById('model_out').innerText = model.predict(x).dataSync();
