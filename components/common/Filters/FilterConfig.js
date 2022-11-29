import { DateTime, Dropdown, MinMax, MultiSelect, TextInput, TextInputSelect, DateTimeRange } from "./FiltersInputs";

const industryOptions = ["Biotech", "Healthtech", "Medtech", "Hospitals"];
export function Industry({ value, onChange, options = industryOptions }) {
	return <Dropdown lable="Industry" value={value} onChange={onChange} options={options} search={false} />;
}

const platformOptions = ["Instgram", "Youtube", "TikTok"];
export function Platform({ value, onChange, options = platformOptions }) {
	return <Dropdown lable="Platform" options={options} search={false} value={value} onChange={onChange} />;
}

const diseaseAreaOptions = [
	"Autoimmune",
	"Cardiovascular",
	"Endocrine",
	"Gastrointestinal",
	"Infectious",
	"Mental Health",
	"Neurology",
	"Oncology",
];
export function DiseaseArea({ value, onChange, options = diseaseAreaOptions }) {
	return <Dropdown lable="Disease Area" options={options} value={value} onChange={onChange} />;
}

export function Age({ value, minOnChange, maxOnChange }) {
	return <MinMax lable="Age" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

export function StatusChange({ value, minOnChange, maxOnChange }) {
	return <MinMax lable="Status Change" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

const locationOption = ["UK", "US", "DE", "CH", "AU", "DE", "HR"];
export function Location({ value, onChange, options = locationOption }) {
	return <Dropdown lable="Location" value={value} onChange={onChange} options={options} />;
}

const lableOptions = ["Lable 1", "lable 2"];
export function Lable({ value, onChange, options = lableOptions }) {
	return <MultiSelect lable="Lable" value={value} onChange={onChange} options={options} search={true} />;
}
export function Mentions({ value, onChange, options = lableOptions }) {
	return <TextInputSelect lable="Mentions" value={value} onChange={onChange} options={options} />;
}

export function Followers({ value, minOnChange, maxOnChange }) {
	return <MinMax lable="Followers" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

const tasksOptions = ["Show all", "With Task", "Without Task"];
export function Task({ value, onChange, options = tasksOptions }) {
	return <Dropdown lable="Task" value={value} onChange={onChange} options={options} search={false} />;
}

const companyOption = ["Roche", "Novartis", "Sanofi", "Pfizer", "JJ"];
export function Company({ value, onChange, options = companyOption }) {
	return <Dropdown lable="Company" options={options} value={value} onChange={onChange} />;
}
export function Brands({ value, onChange, options = companyOption }) {
	return <Dropdown lable="Brands" options={options} value={value} onChange={onChange} />;
}

export function Category({ value, onChange, options = companyOption }) {
	return <Dropdown lable="Category" value={value} onChange={onChange} options={options} />;
}

const emailOptions = ["Show all", "With Email", "Without Email"];
export function Email({ value, onChange, options = emailOptions }) {
	return <Dropdown lable="Email" options={options} value={value} onChange={onChange} search={false} />;
}

const statusCampaignOptions = ["In preparation", "Ongoging", "Finished"];
export function CampaignStatus({ value, onChange, options = statusCampaignOptions }) {
	return <Dropdown lable="Campaign Status" value={value} onChange={onChange} options={options} search={false} />;
}

export function Market({ value, onChange, options = locationOption }) {
	return <Dropdown lable="Market" options={options} value={value} onChange={onChange} />;
}

export function StartDate({ value, onChange }) {
	return <DateTime lable="Start Date" value={value} onChange={onChange} />;
}

export function EndDate({ value, onChange }) {
	return <DateTime lable="End Date" value={value} onChange={onChange} />;
}

const productOptions = ["Depression App", "Fatigue App", "PT App"];
export function Product({ value, onChange, options = productOptions }) {
	return <Dropdown lable="Product" value={value} onChange={onChange} options={options} />;
}

const reportOptions = ["Without", "Basic, Pro", "Premium"];
export function Report({ value, onChange, options = reportOptions }) {
	return <Dropdown lable="Report" value={value} onChange={onChange} options={options} search={false} />;
}

const promotionOptions = [
	"Instagram Post",
	"Instagram Reel",
	"Instagram Story",
	"Youtube 10sec video",
	"Youtube 30sec video",
	"Youtube 60sec video",
	"Tiktok post",
];
export function PromotionType({ value, onChange, options = promotionOptions }) {
	return <Dropdown lable="Promotion Type" value={value} onChange={onChange} options={options} search={false} />;
}

export function Budget({ value, minOnChange, maxOnChange }) {
	return <MinMax lable="Budget" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

export function NumbersInfluencer({ value, minOnChange, maxOnChange }) {
	return <MinMax lable="Numbers of Influencer" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

export function Participants({ value, minOnChange, maxOnChange }) {
	return <MinMax lable="Participants" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

export function Questions({ value, minOnChange, maxOnChange }) {
	return <MinMax lable="Questions" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

const financeType = [
	"Category Cost",
	"subcategory Marketing",
	"Sales",
	"Salary",
	"Donation | Category Revenue",
	"subcategory: Campaign",
	"Report",
];
export function Type({ value, onChange, options = financeType }) {
	return <MultiSelect lable="Type" value={value} onChange={onChange} options={options} />;
}

const statusFinanceOptions = ["Pending", "Approved", "Paid", "Received"];
export function Status({ value, onChange, options = statusFinanceOptions }) {
	return <MultiSelect lable="Status" value={value} onChange={onChange} options={options} />;
}

const clientOptions = ["John", "Lisa", "Anna", "Mark"];
export function Client({ value, onChange }) {
	return <MultiSelect lable="Client" value={value} onChange={onChange} options={clientOptions} search={false} />;
}

const influencerSizeOptions = ["Nano", "Micro", "Macro", "Mega"];
export function InfluencerSize({ value, onChange }) {
	return <MultiSelect lable="Influencer Size" value={value} onChange={onChange} options={influencerSizeOptions} />;
}

export function Amount({ value, minOnChange, maxOnChange }) {
	return <MinMax lable="Amount" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

export function Engagement({ value, minOnChange, maxOnChange }) {
	return <MinMax lable="Engagement" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

const interestsOptions = [" Fitness", "Beauty", "Tech", "Meditation", "Nature", "Gaming", "Cooking", "Family", "Research"];
export function Interests({ value, onChange, options = interestsOptions }) {
	return <MultiSelect lable="Interests" value={value} onChange={onChange} options={options} search={false} />;
}

const subjectOptions = ["Patients", "Clients", "Employees"];
export function Subject({ value, onChange }) {
	return <Dropdown lable="Subject" value={value} onChange={onChange} options={subjectOptions} search={false} />;
}

const postTypeOptions = ["postTypeOptions"];
export function PostType({ value, onChange, options = postTypeOptions }) {
	return <Dropdown lable="Post type" value={value} onChange={onChange} options={options} />;
}

const statementTypeOptions = ["Campaigns", "Affiliate program", "Donations"];
export function StatementType({ value, onChange, options = statementTypeOptions }) {
	return <Dropdown lable="Statement Type" value={value} onChange={onChange} options={options} />;
}

export function TextSelect({ lable, value, onChange, options }) {
	return <TextInputSelect lable={lable} value={value} onChange={onChange} options={options} />;
}

const stakeholderOptions = ["Patients", "Doctors", "Caregivers", "Nurses"];
export function Stakeholder({ value, onChange, options = stakeholderOptions }) {
	return <Dropdown lable="Stakeholder" value={value} onChange={onChange} options={options} search={false} />;
}
const languageOptions = ["English", "German"];
export function Language({ value, onChange, options = languageOptions }) {
	return <Dropdown lable="Language" value={value} onChange={onChange} options={options} />;
}

export function DateRange({ startDate, endDate, onChange }) {
	return <DateTimeRange lable="Date Range" startDate={startDate} endDate={endDate} onChange={onChange} />;
}

const hashTagsOptions = ["Like labels", "Please Add"];
export function Hashtags({ value, onChange, options = hashTagsOptions }) {
	return <MultiSelect lable="Hashtags" value={value} onChange={onChange} options={options} search={false} />;
}

export function MinMaxOnes({ value, lable, minOnChange, maxOnChange }) {
	return <MinMax lable={lable} value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

export function CostPerClick({ value, lable, minOnChange, maxOnChange }) {
	return <MinMax lable="Cost per click" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

export function CostPerTarget({ value, lable, minOnChange, maxOnChange }) {
	return <MinMax lable="Cost per Target" value={value} minOnChange={minOnChange} maxOnChange={maxOnChange} />;
}

export function InputPercentage({ value, onChange, placeholder = "Min" }) {
	return <TextInput placeholder={placeholder} value={value} number={true} maxValue={100} onChange={onChange} />;
}

const ethnicityOptions = ["Caucasian", "Black", "Asian"];
export function Ethnicity({ value, onChange, options = ethnicityOptions }) {
	return <Dropdown lable="Ethnicity" value={value} onChange={onChange} options={options} search={false} />;
}

const genderOptions = ["Male", "Female"];
export function Gender({ value, onChange, options = genderOptions }) {
	return <Dropdown lable="Gender" value={value} onChange={onChange} options={options} search={false} />;
}

const symptomsOptions = ["symptomsOptions"];
export function Symptoms({ value, onChange, options = symptomsOptions }) {
	return <Dropdown lable="Symptoms" value={value} onChange={onChange} options={options} />;
}

export function TotalCampaigns({ value, onChange }) {
	return <TextInput lable="Total Campaigns" value={value} onChange={onChange} number={true} />;
}

const prioritizeOption = ["Score", "Engagement", "Cost per Target", "Cost per Click"];
export function PrioritizeBy({ value, onChange, options = prioritizeOption }) {
	return <Dropdown lable="Prioritize by" value={value} onChange={onChange} options={options} search={false} />;
}

export function TextBox({ value, onChange, lable }) {
	return <TextInput lable={lable} value={value} onChange={onChange} />;
}

export function NumberBox({ value, onChange, lable }) {
	return <TextInput lable={lable} value={value} onChange={onChange} number={true} />;
}

const patientPopulationOptions = [
	"Autoimmune",
	"Cardiovascular",
	"Endocrine",
	"Gastrointestinal",
	"Infectious",
	"Mental Health",
	"Neurology",
	"Oncology",
];
export function PatientPopulation({ value, onChange, options = patientPopulationOptions }) {
	return <Dropdown lable="Patient Population" value={value} onChange={onChange} options={options} search={false} />;
}
