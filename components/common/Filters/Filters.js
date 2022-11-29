import React from "react";
import { Col, Row } from "react-bootstrap";
import { Filter, FilterButtons, FilterTab } from "./FiltersInputs";

import * as FilterInput from "./FilterConfig";
import style from "../../../styles/Filter.module.scss"

export function DiscoverInfluencersFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);
	const onClearFilter = () => setFilter({});

	const onFilter = () => console.log("on click filter");
	return (
		<Filter
			title="All Influencers"
			info="More than 290+ new Influencers"
			infoBtnTitle="Add Influencer"
			onExport={() => console.log("Click on clear filter button")}
			onInfoBtn={() => console.log("Click on third button")}
		>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.Platform value={filter.platform} onChange={(val) => setFilter({ ...filter, platform: val })} />

					<FilterInput.Age
						value={filter.age}
						minOnChange={(val) => setFilter({ ...filter, age: [val, (filter.age && filter.age[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, age: [(filter.age && filter.age[0]) || 0, val] })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />
					<FilterInput.StatusChange
						value={filter.status}
						minOnChange={(val) => setFilter({ ...filter, status: [val, (filter.status && filter.status[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, status: [(filter.status && filter.status[0]) || 0, val] })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Location value={filter.location} onChange={(val) => setFilter({ ...filter, location: val })} />

					<FilterInput.Lable value={filter.lable} onChange={(val) => setFilter({ ...filter, lable: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Followers
						value={filter.followers}
						minOnChange={(val) => setFilter({ ...filter, followers: [val, (filter.followers && filter.followers[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, followers: [(filter.followers && filter.followers[0]) || 0, val] })}
					/>

					<FilterInput.Task value={filter.task} onChange={(val) => setFilter({ ...filter, task: val })} />
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function DiscoverClientsFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);
	const onClearFilter = () => setFilter({});

	const onFilter = () => console.log("on click filter");

	return (
		<Filter
			title="Clients"
			info="20 new Clients"
			infoBtnTitle="Add Client"
			onExport={() => console.log("Click on clear filter button")}
			onInfoBtn={() => console.log("Click on third button")}
		>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.Industry value={filter.industry} onChange={(val) => setFilter({ ...filter, platform: val })} />

					<FilterInput.Lable value={filter.lable} onChange={(val) => setFilter({ ...filter, lable: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Company value={filter.company} onChange={(val) => setFilter({ ...filter, platform1: val })} />

					<FilterInput.Email value={filter.email} onChange={(val) => setFilter({ ...filter, email: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />

					<FilterInput.Task value={filter.task} onChange={(val) => setFilter({ ...filter, task: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Location value={filter.location} onChange={(val) => setFilter({ ...filter, location: val })} />
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function InfluencersFilter() {
	const tabs = ["Influencer", "Audience", "Performance", "Campaign"];
	const [tabName, setTabName] = React.useState("Influencer");

	const onFilter = () => console.log("on click filter");

	const [numOfFilterTab1, setNumOfFilterTab1] = React.useState(0);
	const [filterTab1, setFilterTab1] = React.useState({});
	React.useEffect(() => setNumOfFilterTab1(Object.keys(filterTab1).filter((key) => filterTab1[key].length > 0).length), [filterTab1]);
	const onClearFilterTab1 = () => setFilterTab1({});

	const [numOfFilterTab2, setNumOfFilterTab2] = React.useState(0);
	const [filterTab2, setFilterTab2] = React.useState({});
	React.useEffect(() => setNumOfFilterTab2(Object.keys(filterTab2).filter((key) => filterTab2[key].length > 0).length), [filterTab2]);
	const onClearFilterTab2 = () => setFilterTab2({});

	const [numOfFilterTab3, setNumOfFilterTab3] = React.useState(0);
	const [filterTab3, setFilterTab3] = React.useState({});
	React.useEffect(() => setNumOfFilterTab3(Object.keys(filterTab3).filter((key) => filterTab3[key].length > 0).length), [filterTab3]);
	const onClearFilterTab3 = () => setFilterTab3({});

	const [numOfFilterTab4, setNumOfFilterTab4] = React.useState(0);
	const [filterTab4, setFilterTab4] = React.useState({});
	React.useEffect(() => setNumOfFilterTab4(Object.keys(filterTab4).filter((key) => filterTab4[key].length > 0).length), [filterTab4]);
	const onClearFilterTab4 = () => setFilterTab4({});

	return (
		<Filter
			title="All Influencers"
			info="More than 290+ new Influencers"
			infoBtnTitle="Add Influencer"
			onExport={() => console.log("Click on clear filter button")}
			onInfoBtn={() => console.log("Click on third button")}
			tabs={tabs}
			setTab={setTabName}
			tabName={tabName}
		>
			<FilterTab name="Influencer" tabName={tabName}>
				<Row>
					<Col lg={3} xs={6}>
						<FilterInput.Platform
							value={filterTab1.platform}
							onChange={(val) => setFilterTab1({ ...filterTab1, platform: val })}
						/>
						<FilterInput.Followers
							value={filterTab1.followers}
							minOnChange={(val) =>
								setFilterTabfilterTab1({
									...filterTab1,
									followers: [val, (filterTab1.followers && filterTab1.followers[1]) || 0],
								})
							}
							maxOnChange={(val) =>
								setFilterTabfilterTab1({
									...filterTab1,
									followers: [(filterTab1.followers && filterTab1.followers[0]) || 0, val],
								})
							}
						/>
						<FilterInput.MinMaxOnes
							lable="Reach multiplier"
							value={filterTab1.reachMultipler}
							minOnChange={(val) =>
								setFilterTab1({
									...filterTab1,
									reachMultipler: [val, (filterTab1.reachMultipler && filterTab1.reachMultipler[1]) || 0],
								})
							}
							maxOnChange={(val) =>
								setFilterTab1({
									...filterTab1,
									reachMultipler: [(filterTab1.reachMultipler && filterTab1.reachMultipler[0]) || 0, val],
								})
							}
						/>
						<FilterInput.Hashtags
							value={filterTab1.hashtags}
							onChange={(val) => setFilterTab1({ ...filterTab1, hashtags: val })}
						/>
					</Col>
					<Col lg={3} xs={6}>
						<FilterInput.DiseaseArea value={filterTab1.area} onChange={(val) => setFilterTab1({ ...filterTab1, area: val })} />

						<FilterInput.Engagement
							minOnChange={(val) =>
								setFilterTab1({
									...filterTab1,
									engagement: [val, (filterTab1.engagement && filterTab1.engagement[1]) || 0],
								})
							}
							maxOnChange={(val) =>
								setFilterTab1({
									...filterTab1,
									engagement: [(filterTab1.engagement && filterTab1.engagement[0]) || 0, val],
								})
							}
						/>
						<FilterInput.MinMaxOnes
							lable="Real Followers"
							value={filterTab1.array5}
							minOnChange={(val) =>
								setFilterTab1({ ...filterTab1, array5: [val, (filterTab1.array5 && filterTab1.array5[1]) || 0] })
							}
							maxOnChange={(val) =>
								setFilterTab1({ ...filterTab1, array5: [(filterTab1.array5 && filterTab1.array5[0]) || 0, val] })
							}
						/>

						<FilterInput.Brands value={filterTab1.brand} onChange={(val) => setFilterTab1({ ...filterTab1, brand: val })} />
					</Col>
					<Col lg={3} xs={6}>
						<FilterInput.Location
							value={filterTab1.location}
							onChange={(val) => setFilterTab1({ ...filterTab1, location: val })}
						/>
						<FilterInput.MinMaxOnes
							lable="Likes"
							value={filterTab1.array6}
							minOnChange={(val) =>
								setFilterTab1({ ...filterTab1, array6: [val, (filterTab1.array6 && filterTab1.array6[1]) || 0] })
							}
							maxOnChange={(val) =>
								setFilterTab1({ ...filterTab1, array6: [(filterTab1.array6 && filterTab1.array6[0]) || 0, val] })
							}
						/>
						<FilterInput.Interests
							value={filterTab2.interestes}
							onChange={(val) => setFilterTab2({ ...filterTab2, interestes: val })}
						/>

						<FilterInput.TotalCampaigns
							value={filterTab1.totalCampaings}
							onChange={(val) => setFilterTab1({ ...filterTab1, totalCampaings: val })}
						/>
					</Col>
					<Col lg={3} xs={6}>
						<FilterInput.Age
							value={filterTab1.age}
							minOnChange={(val) => setFilterTab1({ ...filterTab1, age: [val, (filterTab1.age && filterTab1.age[1]) || 0] })}
							maxOnChange={(val) => setFilterTab1({ ...filterTab1, age: [(filterTab1.age && filterTab1.age[0]) || 0, val] })}
						/>

						<FilterInput.MinMaxOnes
							lable="Comments"
							value={filterTab1.minMaxComments}
							minOnChange={(val) =>
								setFilterTab1({
									...filterTab1,
									minMaxComments: [val, (filterTab1.minMaxComments && filterTab1.minMaxComments[1]) || 0],
								})
							}
							maxOnChange={(val) =>
								setFilterTab1({
									...filterTab1,
									minMaxComments: [(filterTab1.minMaxComments && filterTab1.minMaxComments[0]) || 0, val],
								})
							}
						/>

						<FilterInput.Mentions
							value={filterTab1.mentions}
							onChange={(val) => setFilterTab1({ ...filterTab1, mentions: val })}
						/>

						<FilterInput.MinMaxOnes
							lable="Last 30 Days"
							value={filterTab1.minMax30Days}
							minOnChange={(val) =>
								setFilterTab1({
									...filterTab1,
									minMax30Days: [val, (filterTab1.minMax30Days && filterTab1.minMax30Days[1]) || 0],
								})
							}
							maxOnChange={(val) =>
								setFilterTab1({
									...filterTab1,
									minMax30Days: [(filterTab1.minMax30Days && filterTab1.minMax30Days[0]) || 0, val],
								})
							}
						/>
					</Col>
				</Row>

				<FilterButtons numFilter={numOfFilterTab1} onFilter={onFilter} onClear={onClearFilterTab1} />
			</FilterTab>

			<FilterTab name="Audience" tabName={tabName}>
				<Row>
					<Col lg={3} xs={6}>
						<div className={style.minFormGrupe}>
							<FilterInput.Age
								value={filterTab2.age}
								minOnChange={(val) =>
									setFilterTab1({ ...filterTab1, age: [val, (filterTab1.age && filterTab1.age[1]) || 0] })
								}
								maxOnChange={(val) =>
									setFilterTab1({ ...filterTab1, age: [(filterTab1.age && filterTab1.age[0]) || 0, val] })
								}
							/>
							<FilterInput.InputPercentage
								value={filterTab2.minAge}
								onChange={(val) => setFilterTab2({ ...filterTab2, minAge: val })}
							/>
						</div>
						<div className={style.minFormGrupe}>
							<FilterInput.Brands value={filterTab2.brand} onChange={(val) => setFilterTab2({ ...filterTab2, brand: val })} />

							<FilterInput.InputPercentage
								value={filterTab2.minBrands}
								onChange={(val) => setFilterTab2({ ...filterTab2, minBrands: val })}
							/>
						</div>

						<div className={style.minFormGrupe}>
							<FilterInput.Symptoms
								value={filterTab2.symptoms}
								onChange={(val) => setFilterTab2({ ...filterTab2, symptoms: val })}
							/>

							<FilterInput.InputPercentage
								value={filterTab2.minSyptoms}
								onChange={(val) => setFilterTab2({ ...filterTab2, minSyptoms: val })}
							/>
						</div>
					</Col>
					<Col lg={3} xs={6}>
						<div className={style.minFormGrupe}>
							<FilterInput.Gender
								value={filterTab2.gender}
								onChange={(val) => setFilterTab2({ ...filterTab2, gender: val })}
							/>

							<FilterInput.InputPercentage
								value={filterTab2.minGender}
								onChange={(val) => setFilterTab2({ ...filterTab2, minGender: val })}
							/>
						</div>

						<div className={style.minFormGrupe}>
							<FilterInput.Ethnicity
								value={filterTab2.enthnicity}
								onChange={(val) => setFilterTab2({ ...filterTab2, enthnicity: val })}
							/>
							<FilterInput.InputPercentage
								value={filterTab2.minEthicity}
								onChange={(val) => setFilterTab2({ ...filterTab2, minEthicity: val })}
							/>
						</div>
					</Col>
					<Col lg={3} xs={6}>
						<div className={style.minFormGrupe}>
							<FilterInput.Location
								value={filterTab2.location}
								onChange={(val) => setFilterTab2({ ...filterTab2, location: val })}
							/>

							<FilterInput.InputPercentage
								value={filterTab2.minLocation}
								onChange={(val) => setFilterTab2({ ...filterTab2, minLocation: val })}
							/>
						</div>

						<div className={style.minFormGrupe}>
							<FilterInput.Interests
								value={filterTab2.interestes}
								onChange={(val) => setFilterTab2({ ...filterTab2, interestes: val })}
							/>
							<FilterInput.InputPercentage
								value={filterTab2.minInterests}
								onChange={(val) => setFilterTab2({ ...filterTab2, minInterests: val })}
							/>
						</div>
					</Col>
					<Col lg={3} xs={6}>
						<div className={style.minFormGrupe}>
							<FilterInput.Language
								value={filterTab2.language}
								onChange={(val) => setFilterTab2({ ...filterTab2, language: val })}
							/>

							<FilterInput.InputPercentage
								value={filterTab2.minLanguage}
								onChange={(val) => setFilterTab2({ ...filterTab2, minLanguage: val })}
							/>
						</div>

						<div className={style.minFormGrupe}>
							<FilterInput.PatientPopulation
								value={filterTab2.patientPopulation}
								onChange={(val) => setFilterTab2({ ...filterTab2, patientPopulation: val })}
							/>
							<FilterInput.InputPercentage
								value={filterTab2.minPopulation}
								onChange={(val) => setFilterTab2({ ...filterTab2, minPopulation: val })}
							/>
						</div>
					</Col>
				</Row>

				<FilterButtons numFilter={numOfFilterTab2} onFilter={onFilter} onClear={onClearFilterTab2} />
			</FilterTab>

			<FilterTab name="Performance" tabName={tabName}>
				<Row>
					<Col lg={3} xs={6}>
						<FilterInput.CostPerClick
							value={filterTab3.array}
							minOnChange={(val) =>
								setFilterTab3({ ...filterTab3, array: [val, (filterTab3.array && filterTab3.array[1]) || 0] })
							}
							maxOnChange={(val) =>
								setFilterTab3({ ...filterTab3, array: [(filterTab3.array && filterTab3.array[0]) || 0, val] })
							}
						/>
					</Col>
					<Col lg={3} xs={6}>
						<FilterInput.CostPerTarget
							value={filterTab3.array2}
							minOnChange={(val) =>
								setFilterTab3({ ...filterTab3, array2: [val, (filterTab3.array2 && filterTab3.array2[1]) || 0] })
							}
							maxOnChange={(val) =>
								setFilterTab3({ ...filterTab3, array2: [(filterTab3.array2 && filterTab3.array2[0]) || 0, val] })
							}
						/>
					</Col>
					<Col lg={3} xs={6}>
						<FilterInput.PostType
							value={filterTab3.postType}
							onChange={(val) => setFilterTab3({ ...filterTab3, postType: val })}
						/>
					</Col>
					<Col lg={3} xs={6}>
						<FilterInput.MinMaxOnes
							lable="Price"
							value={filterTab3.array3}
							minOnChange={(val) =>
								setFilterTab3({ ...filterTab3, array3: [val, (filterTab3.array3 && filterTab3.array3[1]) || 0] })
							}
							maxOnChange={(val) =>
								setFilterTab3({ ...filterTab3, array3: [(filterTab3.array3 && filterTab3.array3[0]) || 0, val] })
							}
						/>
					</Col>
				</Row>

				<FilterButtons numFilter={numOfFilterTab3} onFilter={onFilter} onClear={onClearFilterTab3} />
			</FilterTab>

			<FilterTab name="Campaign" tabName={tabName}>
				<Row>
					<Col lg={3} xs={6}>
						<FilterInput.NumberBox
							lable="Influencers needed"
							value={filterTab4.influencers}
							onChange={(val) => setFilterTab4({ ...filterTab4, influencers: val })}
						/>
					</Col>
					<Col lg={3} xs={6}>
						<FilterInput.MinMaxOnes
							lable="Audience overlap"
							value={filterTab4.minMaxAudience}
							minOnChange={(val) =>
								setFilterTab4({
									...filterTab4,
									minMaxAudience: [val, (filterTab4.minMaxAudience && filterTab4.minMaxAudience[1]) || 0],
								})
							}
							maxOnChange={(val) =>
								setFilterTab4({
									...filterTab4,
									minMaxAudience: [(filterTab4.minMaxAudience && filterTab4.minMaxAudience[0]) || 0, val],
								})
							}
						/>
					</Col>
					<Col lg={3} xs={6}>
						<FilterInput.PrioritizeBy
							value={filterTab4.prioritizeBy}
							onChange={(val) => setFilterTab4({ ...filterTab4, prioritizeBy: val })}
						/>
					</Col>
				</Row>

				<FilterButtons numFilter={numOfFilterTab4} onFilter={onFilter} onClear={onClearFilterTab4} />
			</FilterTab>
		</Filter>
	);
}

export function ClientsFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);
	const onClearFilter = () => setFilter({});

	const onFilter = () => console.log("on click filter");
	return (
		<Filter
			title="Clients"
			info="More than 290+ new Clients"
			infoBtnTitle="Add Influencer"
			onExport={() => console.log("Click on clear filter button")}
			onInfoBtn={() => console.log("Click on third button")}
		>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.Industry value={filter.industry} onChange={(val) => setFilter({ ...filter, platform: val })} />

					<FilterInput.CampaignStatus
						value={filter.statusChange}
						onChange={(val) => setFilter({ ...filter, statusChange: val })}
					/>

					<FilterInput.Market value={filter.market} onChange={(val) => setFilter({ ...filter, market: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Company value={filter.company} onChange={(val) => setFilter({ ...filter, platform1: val })} />
					<FilterInput.DateRange
						startDate={(filter.date && filter.date[0]) || null}
						endDate={(filter.date && filter.date[1]) || null}
						onChange={(d) => setFilter({ ...filter, date: d })}
					/>

					<FilterInput.Lable value={filter.lable} onChange={(val) => setFilter({ ...filter, lable: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />

					<FilterInput.MinMaxOnes
						lable="Numbers of Campaign"
						value={filter.minMaxCampaign}
						minOnChange={(val) =>
							setFilter({ ...filter, minMaxCampaign: [val, (filter.minMaxCampaign && filter.minMaxCampaign[1]) || 0] })
						}
						maxOnChange={(val) =>
							setFilter({ ...filter, minMaxCampaign: [(filter.minMaxCampaign && filter.minMaxCampaign[0]) || 0, val] })
						}
					/>

					<FilterInput.Task value={filter.task} onChange={(val) => setFilter({ ...filter, task: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Location value={filter.location} onChange={(val) => setFilter({ ...filter, location: val })} />

					<FilterInput.MinMaxOnes
						lable="Revenue"
						value={filter.age2}
						minOnChange={(val) => setFilter({ ...filter, age2: [val, (filter.age2 && filter.age2[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, age2: [(filter.age2 && filter.age2[0]) || 0, val] })}
					/>
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function ReportsFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);
	const onClearFilter = () => setFilter({});

	const onFilter = () => console.log("on click filter");
	return (
		<Filter title="Filter" infoBtnTitle="Add Campaings" hideExport={true} onInfoBtn={() => console.log("Click on third button")}>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.Company value={filter.company} onChange={(val) => setFilter({ ...filter, platform1: val })} />

					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />

					<FilterInput.StartDate value={filter.startDate} onChange={(val) => setFilter({ ...filter, startDate: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Product value={filter.product} onChange={(val) => setFilter({ ...filter, product: val })} />

					<FilterInput.Platform value={filter.platform} onChange={(val) => setFilter({ ...filter, platform: val })} />

					<FilterInput.EndDate value={filter.startDate} onChange={(val) => setFilter({ ...filter, startDate: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Report value={filter.report} onChange={(val) => setFilter({ ...filter, report: val })} />

					<FilterInput.PromotionType
						value={filter.promotionType}
						onChange={(val) => setFilter({ ...filter, promotionType: val })}
					/>

					<FilterInput.Budget
						value={filter.age}
						minOnChange={(val) => setFilter({ ...filter, age: [val, (filter.age && filter.age[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, age: [(filter.age && filter.age[0]) || 0, val] })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Location value={filter.location} onChange={(val) => setFilter({ ...filter, location: val })} />

					<FilterInput.NumbersInfluencer
						value={filter.numbersInfluencer}
						minOnChange={(val) =>
							setFilter({
								...filter,
								numbersInfluencer: [val, (filter.numbersInfluencer && filter.numbersInfluencer[1]) || 0],
							})
						}
						maxOnChange={(val) =>
							setFilter({
								...filter,
								numbersInfluencer: [(filter.numbersInfluencer && filter.numbersInfluencer[0]) || 0, val],
							})
						}
					/>

					<FilterInput.Lable value={filter.lable} onChange={(val) => setFilter({ ...filter, lable: val })} />
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function FinanceFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);
	const onClearFilter = () => setFilter({});

	const onFilter = () => console.log("on click filter");
	return (
		<Filter title="Financial Statment" 
		hideExport={true} 
		infoBtnTitle="Add Statement" 
		info="More than 290+ new Statements"
		onInfoBtn={() => console.log("Click on third button")}>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.Type value={filter.type} onChange={(val) => setFilter({ ...filter, type: val })} />

					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />

					<FilterInput.StartDate value={filter.startDate} onChange={(val) => setFilter({ ...filter, startDate: val })} />

				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Platform value={filter.platform} onChange={(val) => setFilter({ ...filter, platform: val })} />

					<FilterInput.Location value={filter.location} onChange={(val) => setFilter({ ...filter, location: val })} />

					<FilterInput.EndDate value={filter.endDate} onChange={(val) => setFilter({ ...filter, endDate: val })} />

				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Industry value={filter.industry} onChange={(val) => setFilter({ ...filter, platform: val })} />

					<FilterInput.Subject value={filter.subject} onChange={(val) => setFilter({ ...filter, subject: val })} />
					<FilterInput.Status value={filter.status} onChange={(val) => setFilter({ ...filter, status: val })} />

				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Company value={filter.company} onChange={(val) => setFilter({ ...filter, platform1: val })} />

					<FilterInput.Amount
						value={filter.amount}
						minOnChange={(val) => setFilter({ ...filter, amount: [val, (filter.amount && filter.amount[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, amount: [(filter.amount && filter.amount[0]) || 0, val] })}
					/>
					<FilterInput.Lable value={filter.lable} onChange={(val) => setFilter({ ...filter, lable: val })} />

				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function AvailableCampaingsFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);
	const onClearFilter = () => setFilter({});
	const onFilter = () => console.log("on click filter");
	return (
		<Filter title="Available Campaings" info="20 new Campaigns" hideExport={true}>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.Company value={filter.company} onChange={(val) => setFilter({ ...filter, platform1: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Platform value={filter.platform} onChange={(val) => setFilter({ ...filter, platform: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.PostType value={filter.postType} onChange={(val) => setFilter({ ...filter, postType: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DateRange
						startDate={(filter.date && filter.date[0]) || null}
						endDate={(filter.date && filter.date[1]) || null}
						onChange={(d) => setFilter({ ...filter, date: d })}
					/>
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function AdminCampaignsFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);
	const onFilter = () => console.log("on click filter");
	const onClearFilter = () => setFilter({});
	return (
		<Filter
			title="Campaigns"
			info="20 new Campaign"
			infoBtnTitle="Add Campaign"
			hideExport={false}
			onInfoBtn={() => console.log("Click on craete campaing")}
			onExport={() => console.log("Click on export")}
		>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.Company value={filter.company} onChange={(val) => setFilter({ ...filter, platform1: val })} />

					<FilterInput.Platform value={filter.platform} onChange={(val) => setFilter({ ...filter, platform: val })} />

					<FilterInput.StartDate value={filter.startDate} onChange={(val) => setFilter({ ...filter, startDate: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Client value={filter.client} onChange={(val) => setFilter({ ...filter, client: val })} />

					<FilterInput.NumbersInfluencer
						value={filter.numberInflueancer}
						minOnChange={(val) =>
							setFilter({
								...filter,
								numberInflueancer: [val, (filter.numberInflueancer && filter.numberInflueancer[1]) || 0],
							})
						}
						maxOnChange={(val) =>
							setFilter({
								...filter,
								numberInflueancer: [(filter.numberInflueancer && filter.numberInflueancer[0]) || 0, val],
							})
						}
					/>

					<FilterInput.EndDate value={filter.endDate} onChange={(val) => setFilter({ ...filter, endDate: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Location value={filter.location} onChange={(val) => setFilter({ ...filter, location: val })} />

					<FilterInput.InfluencerSize
						value={filter.influencerSize}
						onChange={(val) => setFilter({ ...filter, influencerSize: val })}
					/>

					<FilterInput.Budget
						value={filter.minMaxBudget}
						minOnChange={(val) =>
							setFilter({ ...filter, minMaxBudget: [val, (filter.minMaxBudget && filter.minMaxBudget[1]) || 0] })
						}
						maxOnChange={(val) =>
							setFilter({ ...filter, minMaxBudget: [(filter.minMaxBudget && filter.minMaxBudget[0]) || 0, val] })
						}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />

					<FilterInput.PromotionType
						value={filter.numbersInfluencer}
						onChange={(val) => setFilter({ ...filter, numbersInfluencer: val })}
					/>
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function IncomeAccountFilter() {
	const [dateRange, setDateRange] = React.useState([new Date(), new Date()]);
	const [startDate, endDate] = dateRange;

	const onFilter = () => console.log("on click filter");

	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);
	const onClearFilter = () => setFilter({});
	return (
		<Filter title="Account Statement" info="20 new Campaigns" onExport={() => console.log("Click on export")}>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.TextSelect
						lable="Search Statement"
						value={filter.searchStatemnet}
						onChange={(val) => setFilter({ ...filter, searchStatemnet: val })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DateRange
						startDate={(filter.date && filter.date[0]) || null}
						endDate={(filter.date && filter.date[1]) || null}
						onChange={(d) => setFilter({ ...filter, date: d })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.StatementType
						value={filter.statementType}
						onChange={(val) => setFilter({ ...filter, statementType: val })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Amount
						value={filter.amount}
						minOnChange={(val) => setFilter({ ...filter, amount: [val, (filter.amount && filter.amount[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, amount: [(filter.amount && filter.amount[0]) || 0, val] })}
					/>
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function IncomeAffiliateFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);
	const onClearFilter = () => setFilter({});

	const [dateRange, setDateRange] = React.useState([new Date(), new Date()]);
	const [startDate, endDate] = dateRange;

	const onFilter = () => console.log("on click filter");
	return (
		<Filter title="Affiliate Program" info="20 new Affiliates" onExport={() => console.log("Click on export")}>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.TextSelect
						lable="Search User"
						value={filter.searchUser}
						onChange={(val) => setFilter({ ...filter, searchUser: val })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DateRange
						startDate={(filter.date && filter.date[0]) || null}
						endDate={(filter.date && filter.date[1]) || null}
						onChange={(d) => setFilter({ ...filter, date: d })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Platform value={filter.platform} onChange={(val) => setFilter({ ...filter, platform: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Amount
						value={filter.amount}
						minOnChange={(val) => setFilter({ ...filter, amount: [val, (filter.amount && filter.amount[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, amount: [(filter.amount && filter.amount[0]) || 0, val] })}
					/>
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function BenefitsFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);
	const onClearFilter = () => setFilter({});

	const onFilter = () => console.log("on click filter");
	return (
		<Filter title="Benefits" info="20 new Benefits" infoBtnTitle={"Hide"} onInfoBtn={() => null}>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.TextSelect
						lable="Search Benefit"
						value={filter.searchBenefit}
						onChange={(val) => setFilter({ ...filter, searchBenefit: val })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Location value={filter.location} onChange={(val) => setFilter({ ...filter, location: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Category value={filter.category} onChange={(val) => setFilter({ ...filter, category: val })} />
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function CampaignsFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);

	const onFilter = () => console.log("on click filter");
	const onClearFilter = () => setFilter({});
	return (
		<Filter
			title="Campaigns"
			info="20 new Affiliates"
			infoBtnTitle="Create Campaign"
			onInfoBtn={() => console.log("Click on craete campaing")}
			onExport={() => console.log("Click on export")}
		>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.TextSelect
						lable="Search Campaign"
						value={filter.searchCampaing}
						onChange={(val) => setFilter({ ...filter, searchCampaing: val })}
					/>

					<FilterInput.Platform value={filter.platform} onChange={(val) => setFilter({ ...filter, platform: val })} />

					<FilterInput.StartDate value={filter.startDate} onChange={(val) => setFilter({ ...filter, startDate: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Product value={filter.product} onChange={(val) => setFilter({ ...filter, product: val })} />

					<FilterInput.PromotionType
						value={filter.promotionType}
						onChange={(val) => setFilter({ ...filter, promotionType: val })}
					/>

					<FilterInput.EndDate value={filter.startDate} onChange={(val) => setFilter({ ...filter, startDate: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Location value={filter.location} onChange={(val) => setFilter({ ...filter, location: val })} />

					<FilterInput.InfluencerSize
						value={filter.influencerSize}
						onChange={(val) => setFilter({ ...filter, influencerSize: val })}
					/>

					<FilterInput.Budget
						value={filter.age}
						minOnChange={(val) => setFilter({ ...filter, age: [val, (filter.age && filter.age[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, age: [(filter.age && filter.age[0]) || 0, val] })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />

					<FilterInput.NumbersInfluencer
						value={filter.numbersInfluencer}
						minOnChange={(val) =>
							setFilter({
								...filter,
								numbersInfluencer: [val, (filter.numbersInfluencer && filter.numbersInfluencer[1]) || 0],
							})
						}
						maxOnChange={(val) =>
							setFilter({
								...filter,
								numbersInfluencer: [(filter.numbersInfluencer && filter.numbersInfluencer[0]) || 0, val],
							})
						}
					/>
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function SecoundReportFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);

	const onFilter = () => console.log("on click filter");
	const onClearFilter = () => setFilter({});
	return (
		<Filter
			title="Reports"
			info="2 New Reports This Month"
			infoBtnTitle="Create Report"
			onInfoBtn={() => console.log("Click on craete report")}
			onExport={() => console.log("Click on export")}
		>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.TextBox
						lable="Search Report"
						value={filter.searchReport}
						onChange={(val) => setFilter({ ...filter, searchReport: val })}
					/>

					<FilterInput.Platform value={filter.platform} onChange={(val) => setFilter({ ...filter, platform: val })} />
					<FilterInput.DateRange
						startDate={(filter.date && filter.date[0]) || null}
						endDate={(filter.date && filter.date[1]) || null}
						onChange={(d) => setFilter({ ...filter, date: d })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Product value={filter.product} onChange={(val) => setFilter({ ...filter, product: val })} />

					<FilterInput.PromotionType
						value={filter.promotionType}
						onChange={(val) => setFilter({ ...filter, promotionType: val })}
					/>

					<FilterInput.Budget
						value={filter.age}
						minOnChange={(val) => setFilter({ ...filter, age: [val, (filter.age && filter.age[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, age: [(filter.age && filter.age[0]) || 0, val] })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Location value={filter.location} onChange={(val) => setFilter({ ...filter, location: val })} />

					<FilterInput.InfluencerSize
						value={filter.influencerSize}
						onChange={(val) => setFilter({ ...filter, influencerSize: val })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />

					<FilterInput.NumbersInfluencer
						value={filter.numbersInfluencer}
						minOnChange={(val) =>
							setFilter({
								...filter,
								numbersInfluencer: [val, (filter.numbersInfluencer && filter.numbersInfluencer[1]) || 0],
							})
						}
						maxOnChange={(val) =>
							setFilter({
								...filter,
								numbersInfluencer: [(filter.numbersInfluencer && filter.numbersInfluencer[0]) || 0, val],
							})
						}
					/>
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function SpecificReportFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);

	const onFilter = () => console.log("on click filter");
	const onClearFilter = () => setFilter({});
	return (
		<Filter
			title="Report Name"
			info="50 Influencers completed [Campaign Name]"
			infoBtnTitle="Upgrade"
			onInfoBtn={() => console.log("Click on upgrade")}
			onExport={() => console.log("Click on export")}
		>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.MinMaxOnes
						lable="Reach"
						value={filter.age}
						minOnChange={(val) => setFilter({ ...filter, age: [val, (filter.age && filter.age[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, age: [(filter.age && filter.age[0]) || 0, val] })}
					/>

					<FilterInput.Engagement
						value={filter.engagement}
						minOnChange={(val) => setFilter({ ...filter, engagement: [val, (filter.engagement && filter.engagement[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, engagement: [(filter.engagement && filter.engagement[0]) || 0, val] })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.MinMaxOnes
						lable="Number of Likes"
						value={filter.minMaxLikes}
						minOnChange={(val) =>
							setFilter({ ...filter, minMaxLikes: [val, (filter.minMaxLikes && filter.minMaxLikes[1]) || 0] })
						}
						maxOnChange={(val) =>
							setFilter({ ...filter, minMaxLikes: [(filter.minMaxLikes && filter.minMaxLikes[0]) || 0, val] })
						}
					/>
					<FilterInput.CostPerTarget
						value={filter.array3}
						minOnChange={(val) => setFilter({ ...filter, array3: [val, (filter.array3 && filter.array3[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, array3: [(filter.array3 && filter.array3[0]) || 0, val] })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.MinMaxOnes
						lable="Number of Comments"
						value={filter.array4}
						minOnChange={(val) => setFilter({ ...filter, array4: [val, (filter.array4 && filter.array4[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, array4: [(filter.array4 && filter.array4[0]) || 0, val] })}
					/>
					<FilterInput.CostPerClick
						value={filter.array5}
						minOnChange={(val) => setFilter({ ...filter, array5: [val, (filter.array5 && filter.array5[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, array5: [(filter.array5 && filter.array5[0]) || 0, val] })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.MinMaxOnes
						lable="Website Clicks"
						value={filter.array6}
						minOnChange={(val) => setFilter({ ...filter, array6: [val, (filter.array6 && filter.array6[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, array6: [(filter.array6 && filter.array6[0]) || 0, val] })}
					/>
					<FilterInput.InfluencerSize
						value={filter.influencerSize}
						onChange={(val) => setFilter({ ...filter, influencerSize: val })}
					/>
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function SocialMediaFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);

	const onClearFilter = () => setFilter({});
	const onFilter = () => console.log("on click filter");
	return (
		<Filter
			title="Social Media Listening Report"
			info="2 New Reports This Month"
			infoBtnTitle="Get Report"
			onInfoBtn={() => console.log("Click on Get Report")}
			onExport={() => console.log("Click on export")}
		>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.TextSelect
						lable="Search SML Report"
						value={filter.searchReport}
						onChange={(val) => setFilter({ ...filter, searchReport: val })}
					/>

					<FilterInput.Platform value={filter.platform} onChange={(val) => setFilter({ ...filter, platform: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Stakeholder value={filter.stakeholder} onChange={(val) => setFilter({ ...filter, stakeholder: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Language value={filter.language} onChange={(val) => setFilter({ ...filter, language: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}


export function ServeysFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);

	const onFilter = () => console.log("on click filter");
	const onClearFilter = () => setFilter({});
	return (
		<Filter
			title="Surveys"
			info="More than 290+ new Reports"
			infoBtnTitle="Create Survey"
			onInfoBtn={() => console.log("Click on Survey")}
			onExport={() => console.log("Click on Survey")}
		>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.Company value={filter.company} onChange={(val) => setFilter({ ...filter, platform1: val })} />
					
					<FilterInput.Industry value={filter.industry} onChange={(val) => setFilter({ ...filter, platform: val })} />
					
					<FilterInput.Language
						value={filter.language}
						onChange={(val) => setFilterTab2({ ...filterTab2, language: val })}
					/>
					
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Client value={filter.client} onChange={(val) => setFilter({ ...filter, client: val })} />

					<FilterInput.Participants
						value={filter.age}
						minOnChange={(val) => setFilter({ ...filter, age: [val, (filter.age && filter.age[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, age: [(filter.age && filter.age[0]) || 0, val] })}
					/>

					<FilterInput.DateRange
						startDate={(filter.date && filter.date[0]) || null}
						endDate={(filter.date && filter.date[1]) || null}
						onChange={(d) => setFilter({ ...filter, date: d })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Location value={filter.location} onChange={(val) => setFilter({ ...filter, location: val })} />

					<FilterInput.Questions
						value={filter.age}
						minOnChange={(val) => setFilter({ ...filter, age: [val, (filter.age && filter.age[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, age: [(filter.age && filter.age[0]) || 0, val] })}
					/>

					<FilterInput.Lable value={filter.lable} onChange={(val) => setFilter({ ...filter, lable: val })} />
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />

					<FilterInput.Budget
						value={filter.age}
						minOnChange={(val) => setFilter({ ...filter, age: [val, (filter.age && filter.age[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, age: [(filter.age && filter.age[0]) || 0, val] })}
					/>

					
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}

export function SocialMediaListingFilter() {
	const [numOfFilter, setNumOfFilter] = React.useState(0);
	const [filter, setFilter] = React.useState({});
	React.useEffect(() => setNumOfFilter(Object.keys(filter).filter((key) => filter[key].length > 0).length), [filter]);

	const onFilter = () => console.log("on click filter");
	const onClearFilter = () => setFilter({});
	return (
		<Filter
			title="Social Media Listening"
			info="More than 290+ new Reports"
			infoBtnTitle="Create SML"
			onInfoBtn={() => console.log("Click on SML")}
			onExport={() => console.log("Click on SML")}
		>
			<Row>
				<Col lg={3} xs={6}>
					<FilterInput.Company value={filter.company} onChange={(val) => setFilter({ ...filter, platform1: val })} />
					<FilterInput.DiseaseArea value={filter.area} onChange={(val) => setFilter({ ...filter, area: val })} />
					<FilterInput.Lable value={filter.lable} onChange={(val) => setFilter({ ...filter, lable: val })} />
					
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Client value={filter.client} onChange={(val) => setFilter({ ...filter, client: val })} />
					<FilterInput.Platform value={filter.platform} onChange={(val) => setFilter({ ...filter, platform: val })} />
					
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Stakeholder value={filter.stakeholder} onChange={(val) => setFilter({ ...filter, stakeholder: val })} />
					<FilterInput.DateRange
						startDate={(filter.date && filter.date[0]) || null}
						endDate={(filter.date && filter.date[1]) || null}
						onChange={(d) => setFilter({ ...filter, date: d })}
					/>
				</Col>
				<Col lg={3} xs={6}>
					<FilterInput.Language
						value={filter.language}
						onChange={(val) => setFilterTab2({ ...filterTab2, language: val })}
					/>
					<FilterInput.Budget
						value={filter.age}
						minOnChange={(val) => setFilter({ ...filter, age: [val, (filter.age && filter.age[1]) || 0] })}
						maxOnChange={(val) => setFilter({ ...filter, age: [(filter.age && filter.age[0]) || 0, val] })}
					/>
				</Col>
			</Row>

			<FilterButtons numFilter={numOfFilter} onFilter={onFilter} onClear={onClearFilter} />
		</Filter>
	);
}