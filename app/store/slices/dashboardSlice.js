import {  createSlice } from "@reduxjs/toolkit";

export const DashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        newClient: [],
        newInfuencer: [],
        editInfuencerData: [],
        editClientData: [],
        newCampaignInfo: [],
        newCampaignTarget: [],
        newCampaignInstruct: [],
        createReportData: [],
        filterInfoData: [],
        messageData: "",
        emailData: [],
        commentData: [], 
        labelData: [],
        scheduleData: [],
    },
    reducers:{
        addNewClient: (state, action) => {
            state.newClient = [...state.newClient, action.payload]
        },
        addNewInfuencer: (state, action) => {
            state.newInfuencer = [...state.newInfuencer, action.payload]
        },
        editInfuencer: (state, action) => {
            state.editInfuencerData = [...state.editInfuencerData, action.payload]
        },
        editClient: (state, action) => {
            state.editClientData = [...state.editClientData, action.payload]
        },
        addNewCampaignTarget: (state, action) => {
            state.newCampaignTarget = [...state.newCampaignTarget, action.payload]
        },
        addNewCampaignInstruct: (state, action) => {
            state.newCampaignInstruct = [...state.newCampaignInstruct, action.payload]
        },
        createReport: (state, action) => {
            state.createReportData = [...state.createReportData, action.payload]
        },
        filterBySelect: (state, action) => {
            state.filterInfoData = [...state.filterInfoData, action.payload]
        },
        message: (state, action) => {
            state.messageData = action.payload
        },
        email: (state, action) => {
            state.emailData = [...state.emailData, action.payload]
        },
        comment: (state, action) => {
            state.commentData = action.payload
        },
        label: (state, action) => {
            state.labelData = [...state.labelData, action.payload]
        },
        schedule: (state, action) => {
            state.scheduleData = [...state.scheduleData, action.payload]
        },
    }
})

export const {addNewClient, addNewInfuencer,editInfuencer, editClient, addNewCampaignInfo, addNewCampaignTarget, addNewCampaignInstruct,createReport, filterBySelect, email, comment, label,message, schedule} = DashboardSlice.actions;
export default DashboardSlice.reducer;