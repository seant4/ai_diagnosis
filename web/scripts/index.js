var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function predictModel() {
    var _this = this;
    var x = [];
    for (var i = 0; i < 131; i++) {
        x[i] = 0;
    }
    document.getElementById('model_out').innerText = "Loading...";
    for (var i = 0; i < 131; i++) {
        var c = document.getElementById(String(i));
        if (c.checked) {
            x[i] = 1;
        }
    }
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var model, result, predictions, i, i, p, b;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tf.loadModel("http://localhost:8080/model.json")];
                case 1:
                    model = _a.sent();
                    result = model.predict(tf.tensor([x])).dataSync();
                    document.getElementById('model_out').innerText = "";
                    predictions = [];
                    for (i = 0; i < result.length; i++) {
                        predictions.push({ label: diagnosis[i], match: result[i] });
                    }
                    predictions.sort(function (a, b) { return b.match - a.match; });
                    for (i = 0; i < predictions.length; i++) {
                        if (predictions[i].match >= .01) {
                            p = document.createElement("p");
                            p.innerText = predictions[i].label + ": " + Math.floor((predictions[i].match * 100)) + "%";
                            document.getElementById('model_out').appendChild(p);
                        }
                    }
                    b = document.createElement("button");
                    return [2 /*return*/];
            }
        });
    }); })();
}
function createSymptoms() {
    for (var i = 0; i < symptom.length; i++) {
        symptom[i] = symptom[i].replaceAll('_', " ");
        var words = symptom[i].split(" ");
        for (var j = 0; j < words.length; j++) {
            words[j] = (words[j].substring(0, 1)).toUpperCase() + words[j].substr(1);
        }
        symptom[i] = words.join(" ");
    }
    for (var i = 0; i < 131; i++) {
        var x = document.createElement("INPUT");
        var l = document.createElement("LABEL");
        l.setAttribute("for", i);
        l.innerText = symptom[i];
        x.setAttribute("type", "checkbox");
        x.name = i;
        x.value = "value";
        x.id = i;
        document.getElementById('symptoms').appendChild(l);
        document.getElementById('symptoms').appendChild(x);
    }
}
var symptom = [
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
];
var diagnosis = [
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
