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
    document.getElementById('model_out').innerText = "Loading...";
    for (var i = 0; i < 132; i++) {
        var c = document.getElementById(String(i));
        if (c.checked) {
            x.push(i);
        }
    }
    for (var i = x.length; i < 17; i++) {
        x.push(81);
    }
    console.log(x);
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var model, result, i, p, b;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tf.loadModel("http://localhost:8080/model.json")];
                case 1:
                    model = _a.sent();
                    result = model.predict(tf.tensor([x])).dataSync();
                    document.getElementById('model_out').innerText = "";
                    for (i = 0; i < result.length; i++) {
                        if (result[i] >= .5) {
                            p = document.createElement("p");
                            p.innerText = diagnosis[i] + ": " + result[i];
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
    for (var i = 0; i < 132; i++) {
        var x = document.createElement("INPUT");
        var l = document.createElement("LABEL");
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
var symptom = [
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
];
var diagnosis = ['Osteoarthristis',
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
