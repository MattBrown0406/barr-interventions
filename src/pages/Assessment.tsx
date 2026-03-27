import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Send, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TOTAL_SECTIONS = 12;

const relationshipOptions = ["Parent", "Spouse/Partner", "Adult Child", "Sibling", "Close Friend", "Employer", "Other"];
const dayOptions = ["Today - URGENT", "Any Day", "Weekdays", "Weekends"];
const timeOptions = ["Morning (9 AM - 12 PM)", "Afternoon (12 PM - 5 PM)", "Evening (5 PM - 8 PM)", "Any Time"];
const genderOptions = ["Male", "Female", "Non-Binary", "Prefer Not to Say"];
const substanceList = ["Alcohol", "Opioids/Heroin", "Fentanyl", "Cocaine/Crack", "Methamphetamine", "Benzodiazepines", "Cannabis/Marijuana", "Prescription Stimulants", "Prescription Pain Medication", "Hallucinogens", "Inhalants", "Synthetic Drugs (K2/Spice)", "Other"];
const frequencyOptions = ["Daily", "Several times per week", "Weekly", "Several times per month", "Monthly or less", "Binge pattern"];
const routeOptions = ["Oral", "Smoking", "Snorting/Intranasal", "Intravenous (IV)", "Sublingual", "Other"];
const yesNoOptions = ["Yes", "No", "Unsure"];
const withdrawalSymptoms = ["Tremors/Shaking", "Sweating", "Nausea/Vomiting", "Anxiety/Agitation", "Seizures (history of)", "Hallucinations", "Insomnia", "Muscle aches/pain", "Rapid heartbeat", "Elevated blood pressure", "Depression", "Intense cravings"];
const mentalHealthConditions = ["Depression", "Anxiety Disorder", "Bipolar Disorder", "PTSD/Trauma", "Schizophrenia/Psychotic Disorder", "ADHD", "Eating Disorder", "Personality Disorder", "OCD", "Panic Disorder", "None Known", "Unsure"];
const medicalConditions = ["Heart Disease", "Liver Disease", "Diabetes", "Chronic Pain", "Hepatitis B/C", "HIV/AIDS", "Seizure Disorder", "Respiratory Issues", "Traumatic Brain Injury", "Pregnancy", "None Known"];
const treatmentHistory = ["Inpatient Rehab", "Outpatient Treatment", "Detox Program", "12-Step Program (AA/NA)", "Sober Living", "Medication-Assisted Treatment (MAT)", "Individual Therapy", "Group Therapy", "Psychiatric Treatment", "None"];
const livingOptions = ["Own Home", "Family Home", "Sober Living", "Homeless/Unstable Housing", "Halfway House", "Other"];
const employmentOptions = ["Employed Full-Time", "Employed Part-Time", "Self-Employed", "Unemployed", "Disabled", "Retired", "Student"];
const legalOptions = ["DUI/DWI", "Drug Possession/Distribution", "Domestic Violence", "Probation/Parole", "Pending Court Cases", "CPS Involvement", "None"];
const motivationOptions = ["Pre-contemplation (No interest in change)", "Contemplation (Thinking about change)", "Preparation (Ready to make changes)", "Action (Currently trying to change)", "Maintenance (Sustaining recovery)"];
const insuranceOptions = ["Private Insurance", "Medicaid/Medicare", "TRICARE/VA", "Self-Pay", "No Insurance", "Unsure"];
const levelOfCareOptions = [
  "0.5 - Early Intervention",
  "1.0 - Outpatient Services",
  "2.1 - Intensive Outpatient (IOP)",
  "2.5 - Partial Hospitalization (PHP)",
  "3.1 - Clinically Managed Low-Intensity Residential",
  "3.5 - Clinically Managed High-Intensity Residential",
  "3.7 - Medically Monitored Intensive Inpatient",
  "4.0 - Medically Managed Intensive Inpatient",
  "Unsure / Need Guidance"
];

const Assessment = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const { toast } = useToast();

  const progress = Math.round((currentSection / TOTAL_SECTIONS) * 100);

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: string, value: string) => {
    setFormData(prev => {
      const current = prev[field] || [];
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((v: string) => v !== value)
          : [...current, value]
      };
    });
  };

  const handleNext = () => {
    if (currentSection < TOTAL_SECTIONS) setCurrentSection(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentSection > 1) setCurrentSection(prev => prev - 1);
  };

  const handleSubmit = () => {
    toast({
      title: "Assessment Submitted",
      description: "Thank you. Our clinical team will review your assessment and contact you within 24 hours.",
    });
    console.log("Assessment data:", formData);
  };

  const sectionTitles: Record<number, string> = {
    1: "Contact Information",
    2: "Individual Demographics",
    3: "Substance Use History (ASAM Dimension 1)",
    4: "Current Use Patterns & DSM-V Criteria",
    5: "Withdrawal Risk (ASAM Dimension 1)",
    6: "Medical History (ASAM Dimension 2)",
    7: "Mental Health (ASAM Dimension 3)",
    8: "Readiness to Change (ASAM Dimension 4)",
    9: "Relapse & Continued Use Potential (ASAM Dimension 5)",
    10: "Recovery Environment (ASAM Dimension 6)",
    11: "Treatment & Legal History",
    12: "Insurance & Level of Care",
  };

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 1: Your Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Your Full Name *</Label>
                <Input value={formData.contactName || ""} onChange={e => updateField("contactName", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Relationship to Individual *</Label>
                <Select value={formData.relationship || ""} onValueChange={v => updateField("relationship", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{relationshipOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Email Address *</Label>
                <Input type="email" value={formData.contactEmail || ""} onChange={e => updateField("contactEmail", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Phone Number *</Label>
                <Input type="tel" value={formData.contactPhone || ""} onChange={e => updateField("contactPhone", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Best Day to Contact</Label>
                <Select value={formData.bestDay || ""} onValueChange={v => updateField("bestDay", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{dayOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Best Time to Contact</Label>
                <Select value={formData.bestTime || ""} onValueChange={v => updateField("bestTime", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{timeOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 2: Individual's Demographics</h2>
            <p className="text-muted-foreground text-sm">Information about the person who needs help.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Individual's Full Name *</Label>
                <Input value={formData.individualName || ""} onChange={e => updateField("individualName", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Date of Birth *</Label>
                <Input type="date" value={formData.dob || ""} onChange={e => updateField("dob", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <Select value={formData.gender || ""} onValueChange={v => updateField("gender", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{genderOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>City / State *</Label>
                <Input value={formData.location || ""} onChange={e => updateField("location", e.target.value)} placeholder="e.g., Houston, TX" />
              </div>
              <div className="space-y-2">
                <Label>Height</Label>
                <Input value={formData.height || ""} onChange={e => updateField("height", e.target.value)} placeholder="e.g., 5'10&quot;" />
              </div>
              <div className="space-y-2">
                <Label>Weight (lbs)</Label>
                <Input value={formData.weight || ""} onChange={e => updateField("weight", e.target.value)} placeholder="e.g., 180" />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 3: Substance Use History</h2>
            <p className="text-muted-foreground text-sm">ASAM Dimension 1 — Acute Intoxication and/or Withdrawal Potential</p>
            <div className="space-y-4">
              <Label>Primary Substance(s) of Concern — Select all that apply *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {substanceList.map(substance => (
                  <label key={substance} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer transition-colors">
                    <Checkbox
                      checked={(formData.substances || []).includes(substance)}
                      onCheckedChange={() => toggleArrayField("substances", substance)}
                    />
                    <span className="text-sm">{substance}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>If "Other," please specify</Label>
              <Input value={formData.substanceOther || ""} onChange={e => updateField("substanceOther", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Age of First Use</Label>
              <Input type="number" value={formData.ageFirstUse || ""} onChange={e => updateField("ageFirstUse", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>How long has the current episode of use been ongoing?</Label>
              <Input value={formData.currentEpisodeDuration || ""} onChange={e => updateField("currentEpisodeDuration", e.target.value)} placeholder="e.g., 2 years, 6 months" />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 4: Current Use Patterns & DSM-V Criteria</h2>
            <p className="text-muted-foreground text-sm">Based on DSM-V Substance Use Disorder diagnostic criteria.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Frequency of Use *</Label>
                <Select value={formData.frequency || ""} onValueChange={v => updateField("frequency", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{frequencyOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Primary Route of Administration *</Label>
                <Select value={formData.route || ""} onValueChange={v => updateField("route", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{routeOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Estimated daily amount/dosage (if known)</Label>
              <Input value={formData.dailyAmount || ""} onChange={e => updateField("dailyAmount", e.target.value)} placeholder="e.g., 1 pint of vodka, 4-5 pills, 1 gram" />
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-heading text-lg">DSM-V Diagnostic Criteria — Has the individual experienced any of the following in the past 12 months?</h3>
              <p className="text-muted-foreground text-xs">2–3 criteria = Mild SUD | 4–5 = Moderate | 6+ = Severe</p>
              {[
                "Taking the substance in larger amounts or for longer than intended",
                "Wanting to cut down or stop but being unable to",
                "Spending a great deal of time obtaining, using, or recovering from the substance",
                "Craving or strong desire to use the substance",
                "Failing to fulfill major obligations at work, school, or home",
                "Continued use despite persistent social or interpersonal problems",
                "Giving up or reducing important social, occupational, or recreational activities",
                "Recurrent use in physically hazardous situations",
                "Continued use despite knowledge of a physical or psychological problem caused by use",
                "Tolerance — needing more to achieve the same effect",
                "Withdrawal symptoms when not using",
              ].map(criterion => (
                <label key={criterion} className="flex items-start gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer transition-colors">
                  <Checkbox
                    className="mt-0.5"
                    checked={(formData.dsmCriteria || []).includes(criterion)}
                    onCheckedChange={() => toggleArrayField("dsmCriteria", criterion)}
                  />
                  <span className="text-sm">{criterion}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 5: Withdrawal Risk Assessment</h2>
            <p className="text-muted-foreground text-sm">ASAM Dimension 1 — Evaluating acute intoxication and withdrawal potential.</p>
            <div className="space-y-4">
              <Label>Has the individual experienced withdrawal symptoms when reducing or stopping use? *</Label>
              <RadioGroup value={formData.withdrawalExperienced || ""} onValueChange={v => updateField("withdrawalExperienced", v)}>
                {yesNoOptions.map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-4">
              <Label>Withdrawal symptoms observed or reported — Select all that apply</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {withdrawalSymptoms.map(symptom => (
                  <label key={symptom} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer transition-colors">
                    <Checkbox
                      checked={(formData.withdrawalSymptoms || []).includes(symptom)}
                      onCheckedChange={() => toggleArrayField("withdrawalSymptoms", symptom)}
                    />
                    <span className="text-sm">{symptom}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Has the individual ever had a medically supervised detox? *</Label>
              <RadioGroup value={formData.priorDetox || ""} onValueChange={v => updateField("priorDetox", v)}>
                {yesNoOptions.map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Is the individual currently intoxicated or under the influence?</Label>
              <RadioGroup value={formData.currentlyIntoxicated || ""} onValueChange={v => updateField("currentlyIntoxicated", v)}>
                {yesNoOptions.map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 6: Medical History</h2>
            <p className="text-muted-foreground text-sm">ASAM Dimension 2 — Biomedical Conditions and Complications</p>
            <div className="space-y-4">
              <Label>Known medical conditions — Select all that apply</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {medicalConditions.map(condition => (
                  <label key={condition} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer transition-colors">
                    <Checkbox
                      checked={(formData.medicalConditions || []).includes(condition)}
                      onCheckedChange={() => toggleArrayField("medicalConditions", condition)}
                    />
                    <span className="text-sm">{condition}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Current medications (list all known)</Label>
              <Textarea value={formData.medications || ""} onChange={e => updateField("medications", e.target.value)} placeholder="List all current prescription and over-the-counter medications" />
            </div>
            <div className="space-y-2">
              <Label>Has the individual been hospitalized in the last 12 months?</Label>
              <RadioGroup value={formData.recentHospitalization || ""} onValueChange={v => updateField("recentHospitalization", v)}>
                {yesNoOptions.map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>If yes, reason for hospitalization</Label>
              <Input value={formData.hospitalizationReason || ""} onChange={e => updateField("hospitalizationReason", e.target.value)} />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 7: Mental Health Assessment</h2>
            <p className="text-muted-foreground text-sm">ASAM Dimension 3 — Emotional, Behavioral, or Cognitive Conditions</p>
            <div className="space-y-4">
              <Label>Known or suspected mental health conditions — Select all that apply *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {mentalHealthConditions.map(condition => (
                  <label key={condition} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer transition-colors">
                    <Checkbox
                      checked={(formData.mentalHealth || []).includes(condition)}
                      onCheckedChange={() => toggleArrayField("mentalHealth", condition)}
                    />
                    <span className="text-sm">{condition}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Has the individual expressed suicidal thoughts or self-harm? *</Label>
              <RadioGroup value={formData.suicidalIdeation || ""} onValueChange={v => updateField("suicidalIdeation", v)}>
                {["Yes - Currently", "Yes - In the past", "No", "Unsure"].map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Is the individual currently seeing a therapist or psychiatrist?</Label>
              <RadioGroup value={formData.currentTherapy || ""} onValueChange={v => updateField("currentTherapy", v)}>
                {yesNoOptions.map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Additional behavioral or emotional concerns</Label>
              <Textarea value={formData.behavioralConcerns || ""} onChange={e => updateField("behavioralConcerns", e.target.value)} placeholder="Describe any violent behavior, mood swings, psychosis, etc." />
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 8: Readiness to Change</h2>
            <p className="text-muted-foreground text-sm">ASAM Dimension 4 — Readiness to Change / Treatment Acceptance</p>
            <div className="space-y-4">
              <Label>How would you describe the individual's current stage of change? *</Label>
              <RadioGroup value={formData.stageOfChange || ""} onValueChange={v => updateField("stageOfChange", v)}>
                {motivationOptions.map(o => (
                  <label key={o} className="flex items-start gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} className="mt-0.5" />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Is the individual aware that an intervention is being planned?</Label>
              <RadioGroup value={formData.awareOfIntervention || ""} onValueChange={v => updateField("awareOfIntervention", v)}>
                {yesNoOptions.map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Has the individual previously agreed to treatment but not followed through?</Label>
              <RadioGroup value={formData.priorAgreement || ""} onValueChange={v => updateField("priorAgreement", v)}>
                {yesNoOptions.map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>What motivations or leverage points exist? (e.g., family, career, legal, health)</Label>
              <Textarea value={formData.motivations || ""} onChange={e => updateField("motivations", e.target.value)} placeholder="Describe what might motivate the individual to accept help" />
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 9: Relapse & Continued Use Potential</h2>
            <p className="text-muted-foreground text-sm">ASAM Dimension 5 — Relapse, Continued Use, or Continued Problem Potential</p>
            <div className="space-y-2">
              <Label>How many times has the individual attempted sobriety? *</Label>
              <Select value={formData.sobrietyAttempts || ""} onValueChange={v => updateField("sobrietyAttempts", v)}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {["Never", "1-2 times", "3-5 times", "More than 5 times", "Unsure"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Longest period of sobriety</Label>
              <Input value={formData.longestSobriety || ""} onChange={e => updateField("longestSobriety", e.target.value)} placeholder="e.g., 6 months, 2 years, never sober" />
            </div>
            <div className="space-y-2">
              <Label>What typically triggers relapse?</Label>
              <Textarea value={formData.relapseTriggers || ""} onChange={e => updateField("relapseTriggers", e.target.value)} placeholder="e.g., stress, certain people, emotional events, pain" />
            </div>
            <div className="space-y-2">
              <Label>Does the individual recognize they have a problem?</Label>
              <RadioGroup value={formData.recognizesProblem || ""} onValueChange={v => updateField("recognizesProblem", v)}>
                {["Yes", "Partially", "No", "Unsure"].map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 10: Recovery Environment</h2>
            <p className="text-muted-foreground text-sm">ASAM Dimension 6 — Recovery/Living Environment</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Current living situation *</Label>
                <Select value={formData.livingSituation || ""} onValueChange={v => updateField("livingSituation", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{livingOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Employment status</Label>
                <Select value={formData.employment || ""} onValueChange={v => updateField("employment", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{employmentOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Does the individual live with anyone who actively uses substances?</Label>
              <RadioGroup value={formData.livesWithUser || ""} onValueChange={v => updateField("livesWithUser", v)}>
                {yesNoOptions.map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Does the individual have a supportive family network?</Label>
              <RadioGroup value={formData.supportiveFamily || ""} onValueChange={v => updateField("supportiveFamily", v)}>
                {["Yes - Very supportive", "Somewhat supportive", "Not supportive", "No family involvement", "Unsure"].map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Are there children in the home?</Label>
              <RadioGroup value={formData.childrenInHome || ""} onValueChange={v => updateField("childrenInHome", v)}>
                {yesNoOptions.map(o => (
                  <label key={o} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 11: Treatment & Legal History</h2>
            <div className="space-y-4">
              <Label>Previous treatment experiences — Select all that apply</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {treatmentHistory.map(treatment => (
                  <label key={treatment} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer transition-colors">
                    <Checkbox
                      checked={(formData.treatmentHistory || []).includes(treatment)}
                      onCheckedChange={() => toggleArrayField("treatmentHistory", treatment)}
                    />
                    <span className="text-sm">{treatment}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>How many times has the individual been to treatment?</Label>
              <Select value={formData.treatmentCount || ""} onValueChange={v => updateField("treatmentCount", v)}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {["Never", "1 time", "2-3 times", "4-5 times", "More than 5 times"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label>Current legal issues — Select all that apply</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {legalOptions.map(issue => (
                  <label key={issue} className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer transition-colors">
                    <Checkbox
                      checked={(formData.legalIssues || []).includes(issue)}
                      onCheckedChange={() => toggleArrayField("legalIssues", issue)}
                    />
                    <span className="text-sm">{issue}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl">Section 12: Insurance & Level of Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Insurance type *</Label>
                <Select value={formData.insurance || ""} onValueChange={v => updateField("insurance", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{insuranceOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Insurance provider name</Label>
                <Input value={formData.insuranceProvider || ""} onChange={e => updateField("insuranceProvider", e.target.value)} placeholder="e.g., Blue Cross Blue Shield" />
              </div>
            </div>
            <div className="space-y-4">
              <Label>Preferred ASAM Level of Care</Label>
              <RadioGroup value={formData.levelOfCare || ""} onValueChange={v => updateField("levelOfCare", v)}>
                {levelOfCareOptions.map(o => (
                  <label key={o} className="flex items-start gap-3 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={o} className="mt-0.5" />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Geographic preferences for treatment</Label>
              <Input value={formData.geoPreference || ""} onChange={e => updateField("geoPreference", e.target.value)} placeholder="e.g., Texas only, open to anywhere, prefer warm climate" />
            </div>
            <div className="space-y-2">
              <Label>Additional information or concerns</Label>
              <Textarea value={formData.additionalInfo || ""} onChange={e => updateField("additionalInfo", e.target.value)} placeholder="Anything else our clinical team should know" rows={4} />
            </div>

            <div className="bg-muted/50 border border-border rounded-lg p-4 flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                By submitting this assessment, you confirm that the information provided is accurate to the best of your knowledge. All information is strictly confidential and protected under HIPAA guidelines. It will be used solely for clinical evaluation and intervention planning.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Family Addiction Assessment | Barr Interventions &amp; Consulting</title>
        <meta name="description" content="Take our free family addiction assessment to understand your situation and find the right path forward." />
      </Helmet>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Clinical Intake Assessment
          </h1>
          <p className="text-lg opacity-90">
            DSM-V & ASAM Criteria-Based Evaluation for Professional Intervention Planning
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-heading">Section {currentSection} of {TOTAL_SECTIONS}</span>
              <span className="text-primary font-semibold">{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2 font-medium">{sectionTitles[currentSection]}</p>
          </div>

          {/* Confidentiality note (section 1 only) */}
          {currentSection === 1 && (
            <div className="bg-muted/50 border border-border rounded-lg p-4 mb-8">
              <p className="text-sm text-muted-foreground">
                This comprehensive assessment gathers clinical information based on DSM-V diagnostic criteria and ASAM placement dimensions. All information is strictly confidential and will be used only for treatment planning and intervention preparation.
              </p>
            </div>
          )}

          {/* Section content */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
            {renderSection()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentSection === 1}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </Button>

            {currentSection < TOTAL_SECTIONS ? (
              <Button onClick={handleNext} className="gap-2">
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="gap-2">
                Submit Assessment <Send className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Assessment;
