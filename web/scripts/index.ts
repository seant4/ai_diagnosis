function predictModel(){
  let x: number[] = [];
  document.getElementById('model_out').innerText = "Loading...";
  for(let i: number = 0; i < 132; i++){
    let c = document.getElementById(String(i));
    if(c.checked){
      x.push(i);
    }
  }
  for(let i: number = x.length; i <  17; i++){
    x.push(81);
  }
  console.log(x);
  (async() => { 
    const model: any = await tf.loadModel("http://localhost:8080/model.json");
    const result: any = model.predict(tf.tensor([x])).dataSync();
    document.getElementById('model_out').innerText = "";
    for(let i = 0; i < result.length; i++){
      if(result[i] >= .5){
        let p = document.createElement("p");
        p.innerText = diagnosis[i] + ": " + result[i];
        document.getElementById('model_out').appendChild(p);
      }
    }
    let b = document.createElement("button");
    
  })();
}

function createSymptoms(){
  for(let i: number=0; i < 132; i++){
    let x: any = document.createElement("INPUT");
    let l: any = document.createElement("LABEL");
    l.setAttribute("for", i);
    l.innerText = i + ": " + symptom[i];
    x.setAttribute("type", "checkbox");
    x.name = i;
    x.value = "value";
    x.id = i;
    document.getElementById('symptoms').appendChild(l);
    document.getElementById('symptoms').appendChild(x);
  }
}


const symptom: any[] = [
' pain_behind_the_eyes',
 ' weight_loss',
 ' internal_itching',
 ' abnormal_menstruation',
 ' phlegm',
 ' runny_nose',
 ' blister',
 ' yellowing_of_eyes',
 ' back_pain',
 ' belly_pain',
 ' chills',
 ' rusty_sputum',
 ' stomach_bleeding',
 ' small_dents_in_nails',
 ' cramps',
 ' painful_walking',
 ' shivering',
 ' diarrhoea',
 ' swelling_of_stomach',
 ' silver_like_dusting',
 ' swelling_joints',
 ' swollen_legs',
 ' drying_and_tingling_lips',
 ' hip_joint_pain',
 ' slurred_speech',
 ' stomach_pain',
 ' pus_filled_pimples',
 ' ulcers_on_tongue',
 ' swollen_extremeties',
 ' excessive_hunger',
 ' blackheads',
 ' abdominal_pain',
 ' constipation',
 ' sweating',
 ' blood_in_sputum',
 ' blurred_and_distorted_vision',
 ' bloody_stool',
 ' spinning_movements',
 ' inflammatory_nails',
 ' history_of_alcohol_consumption',
 ' dizziness',
 ' dehydration',
 ' skin_peeling',
 ' spotting_ urination',
 ' high_fever',
 ' visual_disturbances',
 ' weakness_of_one_body_side',
 ' sinus_pressure',
 ' family_history',
 ' stiff_neck',
 ' weight_gain',
 ' chest_pain',
 ' mild_fever',
 ' brittle_nails',
 ' fluid_overload',
 ' skin_rash',
 ' yellow_urine',
 ' burning_micturition',
 ' lack_of_concentration',
 ' receiving_blood_transfusion',
 ' irregular_sugar_level',
 ' acute_liver_failure',
 ' depression',
 ' toxic_look_(typhos)',
 ' receiving_unsterile_injections',
 ' increased_appetite',
 ' throat_irritation',
 ' movement_stiffness',
 ' watering_from_eyes',
 ' loss_of_smell',
 ' loss_of_balance',
 ' breathlessness',
 ' swelled_lymph_nodes',
 ' unsteadiness',
 ' continuous_feel_of_urine',
 ' muscle_weakness',
 ' irritation_in_anus',
 ' swollen_blood_vessels',
 ' indigestion',
 ' distention_of_abdomen',
 ' enlarged_thyroid',
 NaN,
 ' headache',
 ' bladder_discomfort',
 'itching',
 ' lethargy',
 ' nausea',
 ' pain_during_bowel_movements',
 ' red_spots_over_body',
 ' irritability',
 ' polyuria',
 ' muscle_pain',
 ' acidity',
 ' foul_smell_of urine',
 ' weakness_in_limbs',
 ' mucoid_sputum',
 ' neck_pain',
 ' cough',
 ' vomiting',
 ' obesity',
 ' prominent_veins_on_calf',
 ' fast_heart_rate',
 ' anxiety',
 ' yellowish_skin',
 ' joint_pain',
 ' mood_swings',
 ' red_sore_around_nose',
 ' restlessness',
 ' scurring',
 ' cold_hands_and_feets',
 ' extra_marital_contacts',
 ' fatigue',
 ' coma',
 ' pain_in_anal_region',
 ' nodal_skin_eruptions',
 ' knee_pain',
 ' dischromic _patches',
 ' puffy_face_and_eyes',
 ' malaise',
 ' yellow_crust_ooze',
 ' passage_of_gases',
 ' bruising',
 ' continuous_sneezing',
 ' sunken_eyes',
 ' altered_sensorium',
 ' loss_of_appetite',
 ' muscle_wasting',
 ' congestion',
 ' palpitations',
 ' redness_of_eyes',
 ' dark_urine',
 ' patches_in_throat'
]
const diagnosis: string[] = ['Osteoarthristis',
 'Alcoholic hepatitis',
 'Psoriasis',
 'Dengue',
 'Acne',
 'Drug Reaction',
 'Chicken pox',
 'Paralysis (brain hemorrhage)',
 'Fungal infection',
 'Cervical spondylosis',
 'Hypoglycemia',
 'Diabetes ',
 'Hepatitis B',
 'Urinary tract infection',
 'Heart attack',
 'Bronchial Asthma',
 'Hyperthyroidism',
 'Hepatitis D',
 'Migraine',
 'Hypertension ',
 'Malaria',
 'GERD',
 'Chronic cholestasis',
 'Gastroenteritis',
 'Dimorphic hemmorhoids(piles)',
 'Allergy',
 'Jaundice',
 'AIDS',
 'Pneumonia',
 'hepatitis A',
 'Common Cold',
 'Arthritis',
 'Tuberculosis',
 'Impetigo',
 'Hepatitis E',
 'Typhoid',
 'Peptic ulcer diseae',
 'Hepatitis C',
 'Varicose veins',
 '(vertigo) Paroymsal  Positional Vertigo',
 'Hypothyroidism'];


createSymptoms();
