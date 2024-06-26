function predictModel(){
  let x: number[] = [];
  for(let i: number = 0; i < 131; i++){
    x[i] = 0;
  }
  document.getElementById('model_out').innerText = "Loading...";
  for(let i: number = 0; i < 131; i++){
    let c = document.getElementById(String(i));
    if(c.checked){
      x[i]=1;
    }
  }
  (async() => { 
    const model: any = await tf.loadModel("http://localhost:8080/model.json");
    const result: any = model.predict(tf.tensor([x])).dataSync();
    document.getElementById('model_out').innerText = "";
    let predictions: object[] = [];    
    for(let i = 0; i < result.length; i++){
      predictions.push({label: diagnosis[i], match: result[i]});
    }
    predictions.sort((a,b)=> {return b.match - a.match;});
    for(let i = 0; i < predictions.length; i++){

      if(predictions[i].match >= .01){
        let p = document.createElement("p");
        p.innerText = predictions[i].label + ": " + Math.floor((predictions[i].match * 100)) + "%";
        document.getElementById('model_out').appendChild(p);
      }
    }
    let b = document.createElement("button"); 
  })();
}

function createSymptoms(){
  for(let i: number=0; i < symptom.length; i++){
    symptom[i] = symptom[i].replaceAll('_', " ");
    let words: string[] = symptom[i].split(" ");
    for(let j: number = 0; j < words.length; j++){
      words[j] = (words[j].substring(0,1)).toUpperCase() + words[j].substr(1);
    }
    symptom[i] = words.join(" ");
  }
  for(let i: number=0; i < 131; i++){
    let d: any = document.createElement("div");
    let x: any = document.createElement("INPUT");
    let l: any = document.createElement("LABEL");
    let divName: string = "div" + i;
    d.setAttribute("class", "checkContainer");
    l.setAttribute("for", i);
    l.innerText = symptom[i];
    x.setAttribute("type", "checkbox");
    x.setAttribute("class", "checkmark");
    x.name = i;
    x.value = "value";
    x.id = i;
    if(i < 22){
      document.getElementById('column1').appendChild(d);
      d.appendChild(l);
      d.appendChild(x);
    }else if(i >= 22 && i < 44){ 
      document.getElementById('column2').appendChild(d);
      d.appendChild(l);
      d.appendChild(x);
    }else if(i >= 44 && i < 66){
      document.getElementById('column3').appendChild(d);
      d.appendChild(l);
      d.appendChild(x);
    }else if(i >= 66 && i < 88){
      document.getElementById('column4').appendChild(d);
      d.appendChild(l);
      d.appendChild(x);
    }else if(i >= 88 && i < 110){ 
      document.getElementById('column5').appendChild(d);
      d.appendChild(l);
      d.appendChild(x);
    }else{
      document.getElementById('column6').appendChild(d);
      d.appendChild(l);
      d.appendChild(x);
    }
  }
}


const symptom: any[] = [
 'itching',
 ' skin_rash',
 ' nodal_skin_eruptions',
 ' dischromic _patches',
 ' continuous_sneezing',
 ' shivering',
 ' chills',
 ' watering_from_eyes',
 ' stomach_pain',
 ' acidity',
 ' ulcers_on_tongue',
 ' vomiting',
 ' cough',
 ' chest_pain',
 ' yellowish_skin',
 ' nausea',
 ' loss_of_appetite',
 ' abdominal_pain',
 ' yellowing_of_eyes',
 ' burning_micturition',
 ' spotting_ urination',
 ' passage_of_gases',
 ' internal_itching',
 ' indigestion',
 ' muscle_wasting',
 ' patches_in_throat',
 ' high_fever',
 ' extra_marital_contacts',
 ' fatigue',
 ' weight_loss',
 ' restlessness',
 ' lethargy',
 ' irregular_sugar_level',
 ' blurred_and_distorted_vision',
 ' obesity',
 ' excessive_hunger',
 ' increased_appetite',
 ' polyuria',
 ' sunken_eyes',
 ' dehydration',
 ' diarrhoea',
 ' breathlessness',
 ' family_history',
 ' mucoid_sputum',
 ' headache',
 ' dizziness',
 ' loss_of_balance',
 ' lack_of_concentration',
 ' stiff_neck',
 ' depression',
 ' irritability',
 ' visual_disturbances',
 ' back_pain',
 ' weakness_in_limbs',
 ' neck_pain',
 ' weakness_of_one_body_side',
 ' altered_sensorium',
 ' dark_urine',
 ' sweating',
 ' muscle_pain',
 ' mild_fever',
 ' swelled_lymph_nodes',
 ' malaise',
 ' red_spots_over_body',
 ' joint_pain',
 ' pain_behind_the_eyes',
 ' constipation',
 ' toxic_look_(typhos)',
 ' belly_pain',
 ' yellow_urine',
 ' receiving_blood_transfusion',
 ' receiving_unsterile_injections',
 ' coma',
 ' stomach_bleeding',
 ' acute_liver_failure',
 ' swelling_of_stomach',
 ' distention_of_abdomen',
 ' history_of_alcohol_consumption',
 ' fluid_overload',
 ' phlegm',
 ' blood_in_sputum',
 ' throat_irritation',
 ' redness_of_eyes',
 ' sinus_pressure',
 ' runny_nose',
 ' congestion',
 ' loss_of_smell',
 ' fast_heart_rate',
 ' rusty_sputum',
 ' pain_during_bowel_movements',
 ' pain_in_anal_region',
 ' bloody_stool',
 ' irritation_in_anus',
 ' cramps',
 ' bruising',
 ' swollen_legs',
 ' swollen_blood_vessels',
 ' prominent_veins_on_calf',
 ' weight_gain',
 ' cold_hands_and_feets',
 ' mood_swings',
 ' puffy_face_and_eyes',
 ' enlarged_thyroid',
 ' brittle_nails',
 ' swollen_extremeties',
 ' abnormal_menstruation',
 ' muscle_weakness',
 ' anxiety',
 ' slurred_speech',
 ' palpitations',
 ' drying_and_tingling_lips',
 ' knee_pain',
 ' hip_joint_pain',
 ' swelling_joints',
 ' painful_walking',
 ' movement_stiffness',
 ' spinning_movements',
 ' unsteadiness',
 ' pus_filled_pimples',
 ' blackheads',
 ' scurring',
 ' bladder_discomfort',
 ' foul_smell_of urine',
 ' continuous_feel_of_urine',
 ' skin_peeling',
 ' silver_like_dusting',
 ' small_dents_in_nails',
 ' inflammatory_nails',
 ' blister',
 ' red_sore_around_nose',
 ' yellow_crust_ooze'
]
const diagnosis: string[] = [
'(vertigo) Paroymsal  Positional Vertigo',
 'AIDS',
 'Acne',
 'Alcoholic hepatitis',
 'Allergy',
 'Arthritis',
 'Bronchial Asthma',
 'Cervical spondylosis',
 'Chicken pox',
 'Chronic cholestasis',
 'Common Cold',
 'Dengue',
 'Diabetes ',
 'Dimorphic hemmorhoids(piles)',
 'Drug Reaction',
 'Fungal infection',
 'GERD',
 'Gastroenteritis',
 'Heart attack',
 'Hepatitis B',
 'Hepatitis C',
 'Hepatitis D',
 'Hepatitis E',
 'Hypertension ',
 'Hyperthyroidism',
 'Hypoglycemia',
 'Hypothyroidism',
 'Impetigo',
 'Jaundice',
 'Malaria',
 'Migraine',
 'Osteoarthristis',
 'Paralysis (brain hemorrhage)',
 'Peptic ulcer diseae',
 'Pneumonia',
 'Psoriasis',
 'Tuberculosis',
 'Typhoid',
 'Urinary tract infection',
 'Varicose veins',
 'hepatitis A'
];

createSymptoms();
