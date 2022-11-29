import React from "react";
import { Form, Button, ThemeProvider } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import style from "../../../styles/Filter.module.scss"

export function Filter({ children, title, info, infoBtnTitle, onExport, onInfoBtn, hideExport = false, tabs = [], setTab, tabName }) {
	const [showContent, setShowConent] = React.useState(true);
	const onShowContent = () => setShowConent(!showContent);

	const renderTabs = tabs.map((tab) => (
		<button key={tab} className={tabName === tab ? style.active : ""} onClick={() => setTab(tab)}>
			{tab}
		</button>
	));
	return (
		<div className={style.filterContainer}>
			<div className={style.filterHeader}>
				<div className={style.titleHolder}>
					<h3>{title}</h3>
					<span>{info}</span>
				</div>

				<div className={style.buttons}>
					<ThemeProvider prefixes={{ btn: "custom-btn filter-btn" }}>
						<Button onClick={onShowContent} className={showContent ? "active" : ""} variant="info">
							Filter
						</Button>
					</ThemeProvider>
					{!hideExport && (
						<ThemeProvider prefixes={{ btn: "custom-btn secound-btn" }}>
							<Button onClick={onExport} variant="secondary">
								Export
							</Button>
						</ThemeProvider>
					)}
					{infoBtnTitle && (
						<ThemeProvider prefixes={{ btn: "custom-btn primary-btn" }}>
							<Button onClick={onInfoBtn} variant="primary">
								{infoBtnTitle}
							</Button>
						</ThemeProvider>
					)}
				</div>
			</div>

			<div className={showContent ? `${style.slideDownUp}` : `${style.slideDownUp} ${style.hide}`}>
				{tabs.length > 0 && <div className={style.tabHolder}>{renderTabs}</div>}
				<div className={style.filterContent}>{children}</div>
			</div>
		</div>
	);
}

export function FilterTab({ name, tabName, children }) {
	if (tabName === name) return children;
}

export function FilterButtons({ onFilter, onClear, numFilter }) {
	return (
		<div className={style.filterButtons}>
			<ThemeProvider prefixes={{ btn: "custom-btn primary-btn" }}>
				<Button onClick={onFilter} style={{ paddingInline: "24px" }} variant="primary">
					Filter
				</Button>
			</ThemeProvider>
			<ThemeProvider prefixes={{ btn: "custom-btn secound-btn" }}>
				<Button onClick={onClear} style={{ paddingInline: "10px", backgroundColor: "#E7ECFF" }} variant="secondary">
					<span>{numFilter}</span>Clear filter
				</Button>
			</ThemeProvider>
		</div>
	);
}

export function DateTimeRange({ lable, startDate, endDate, placeholder = "Please Enter", onChange, format = "MMM d" }) {
	return (
		<Form.Group className={style.formGroup}>
			<Form.Label>{lable}</Form.Label>
			<div className={style.dateTimePickerHolder}>
				<DatePicker
					placeholderText={placeholder}
					selectsRange={true}
					startDate={startDate}
					endDate={endDate}
					dateFormat={format}
					onChange={onChange}
					className="dateTimePicker"
				/>
			</div>
		</Form.Group>
	);
}

export function DateTimeRangeSplited({
	lable,
	onChangeStart,
	onChangeEnd,
	startDate = new Date(),
	endDate = new Date(),
	format = "MMM d",
}) {
	return (
		<Form.Group className={style.formGroup}>
			<Form.Label>{lable}</Form.Label>
			<div className={style.datetimeGroupe}>
				<div className={style.dateTimePickerHolder}>
					<DatePicker selected={startDate} dateFormat={format} onChange={onChangeStart} className="dateTimePicker" />
				</div>
				<div className={style.dateTimePickerHolder}>
					<DatePicker selected={endDate} dateFormat={format} onChange={onChangeEnd} className="dateTimePicker" />
				</div>
			</div>
		</Form.Group>
	);
}

export function DateTime({ lable, onChange, value, placeholder = "Please Enter", format = "MMM d" }) {
	return (
		<Form.Group className={style.formGroup}>
			<Form.Label>{lable}</Form.Label>
			<div className={style.dateTimePickerHolder}>
				<DatePicker
					placeholderText={placeholder}
					selectsRange={false}
					selected={value}
					dateFormat={format}
					onChange={onChange}
					className="dateTimePicker"
				/>
			</div>
		</Form.Group>
	);
}

export function Dropdown({ lable, placeholder = "Please Select", options, onChange, value, search = true }) {
	if (options === undefined) throw Error(`Please set options for drop down where labele is "${lable}"`);
	const showValue = value ? [value] : value == "" ? [] : value;
	const defaultValue = value && value.length > 0 ? value : placeholder;

	return (
		<Form.Group className={`${style.formGroup} ${style.formGroupDropdown}`}>
			<Form.Label>{lable}</Form.Label>
			{search ? (
				<Typeahead
					id="dropdown"
					className={[style.dropdownInput]}
					onChange={(val) => (onChange && val.length !== 0 ? onChange(val[0]) : onChange(""))}
					selected={showValue || []}
					options={options}
					placeholder={placeholder}
				/>
			) : (
				<div className={style.selectHolder}>
					<Form.Select onChange={(e) => onChange && onChange(e.target.value)} value={value} defaultValue={defaultValue}>
						<option>{defaultValue}</option>
						{options.map((el, i) => (
							<option key={i} value={el}>
								{el}
							</option>
						))}
					</Form.Select>
				</div>
			)}
		</Form.Group>
	);
}

export function MultiSelect({ lable, placeholder = "Please Enter", options = [], onChange, value, search = false }) {
	const inputRef = React.useRef();

	const onChangeInput = (e) => {
		if (search) {
			if (e.key === "Enter") {
				onChange(!value ? [e.target.value] : [...value, e.target.value]);
				inputRef.current.clear();
			}
		}
	};

	return (
		<Form.Group className={`${style.formGroup} ${style.formGroupMultiSelect}`}>
			<Form.Label>{lable}</Form.Label>
			<div className="multiSelecetCostume">
				<Typeahead
					id="multiselect"
					className={[style.multipleSelect]}
					multiple
					ref={inputRef}
					onChange={onChange}
					onKeyDown={onChangeInput}
					selected={value || []}
					options={options}
					placeholder={placeholder}
				/>
			</div>
		</Form.Group>
	);
}

export function TextInput({ lable, value, onChange, placeholder = "Please Enter", number, maxValue }) {
	const inputRef = React.useRef();

	const onChangeInput = () => {
		const inputValue = inputRef.current.value.replace(/[^\d]/g, "");
		if (maxValue !== undefined) {
			if (parseInt(maxValue) >= parseInt(inputValue) || inputValue == "")
				number ? onChange(inputValue) : onChange(inputRef.current.value);
		} else {
			number ? onChange(inputValue) : onChange(inputRef.current.value);
		}
	};

	return (
		<Form.Group className={`${style.formGroup} ${style.formGroupMultiSelect}`}>
			<Form.Label>{lable || <div>&nbsp;</div>}</Form.Label>
			<Form.Control ref={inputRef} type="text" placeholder={placeholder} value={value} onChange={onChangeInput} />
		</Form.Group>
	);
}

export function TextInputSelect({ lable, value, onChange, placeholder = "Please Enter" }) {
	const inputRef = React.useRef();

	const onChangeInput = (e) => {
		const inputValue = e.target.value;
		if (e.key === "Enter") {
			if (inputValue !== "") {
				onChange(!value ? [inputValue] : [...value, inputValue]);
				inputRef.current.clear();
			}
		}
	};

	return (
		<Form.Group className={`${style.formGroup} ${style.formGroupMultiSelect}`}>
			<Form.Label>{lable}</Form.Label>
			<div className="multiSelecetCostume multiSelecetCostumeText">
				<Typeahead
					id="multiselect"
					multiple
					className={[style.multipleSelect]}
					ref={inputRef}
					onKeyDown={onChangeInput}
					selected={value || []}
					options={[]}
					placeholder={placeholder}
				/>
			</div>
		</Form.Group>
	);
}

export function MinMax({ lable, value, minOnChange, maxOnChange }) {
	const inputMinRef = React.useRef();
	const inputMaxRef = React.useRef();

	const onChangeMinInput = () => minOnChange(inputMinRef.current.value.replace(/[^\d]/g, ""));
	const onChangeMaxInput = () => maxOnChange(inputMaxRef.current.value.replace(/[^\d]/g, ""));

	return (
		<Form.Group className={style.formGroup}>
			<Form.Label>{lable}</Form.Label>
			<div className={style.minMaxGroupe}>
				<Form.Control
					className={[style.inputFilter, style.minMaxInput]}
					placeholder="Min"
					ref={inputMinRef}
					value={(value && value[0]) || ""}
					onChange={onChangeMinInput}
					style={{ textAlign: "center" }}
				/>
				<div className={style.separator} />
				<Form.Control
					className={[style.inputFilter, style.minMaxInput]}
					placeholder="Max"
					ref={inputMaxRef}
					value={(value && value[1]) || ""}
					onChange={onChangeMaxInput}
					style={{ textAlign: "center" }}
				/>
			</div>
		</Form.Group>
	);
}
