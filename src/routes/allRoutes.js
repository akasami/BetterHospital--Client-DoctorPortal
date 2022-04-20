import React from "react"
import { Redirect } from "react-router-dom"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Dashboard2 from "../pages/Dashboard2.js/index.js"

// Pages Calendar
import Calendar from "../pages/Calendar/index"





//Pages
import PagesStarter from "../pages/Utility/pages-starter"
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import PagesTimeline from "../pages/Utility/pages-timeline"
import PagesFaqs from "../pages/Utility/pages-faqs"
import PagesPricing from "../pages/Utility/pages-pricing"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"
import PagesInvoice from "../pages/Utility/invoice"

//Ui
import UiAlert from "../pages/Ui/UiAlert"
import UiButtons from "../pages/Ui/UiButtons"
import UiCards from "../pages/Ui/UiCards"
import UiCarousel from "../pages/Ui/UiCarousel"
import UiColors from "../pages/Ui/UiColors"
import UiDropdown from "../pages/Ui/UiDropdown"
import UiGeneral from "../pages/Ui/UiGeneral"
import UiGrid from "../pages/Ui/UiGrid"
import UiImages from "../pages/Ui/UiImages"
import UiLightbox from "../pages/Ui/UiLightbox"
import UiModal from "../pages/Ui/UiModal"
import UiProgressbar from "../pages/Ui/UiProgressbar"
import UiSweetAlert from "../pages/Ui/UiSweetAlert"
import UiTabsAccordions from "../pages/Ui/UiTabsAccordions"
import UiTypography from "../pages/Ui/UiTypography"
import UiVideo from "../pages/Ui/UiVideo"
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout"
import UiRating from "../pages/Ui/UiRating"
import UiRangeSlider from "../pages/Ui/UiRangeSlider"
import UiNotifications from "../pages/Ui/ui-notifications"
import UiImageCropper from "../pages/Ui/ui-image-cropper"

// Forms
import BasicElements from "../pages/Forms/BasicElements"
import FormLayouts from "../pages/Forms/FormLayouts"
import FormAdvanced from "../pages/Forms/FormAdvanced"
import FormEditors from "../pages/Forms/FormEditors"
import FormValidations from "../pages/Forms/FormValidations"
import FormRepeater from "../pages/Forms/FormRepeater"
import FormUpload from "../pages/Forms/FormUpload"
import FormWizard from "../pages/Forms/FormWizard"
import FormXeditable from "../pages/Forms/FormXeditable"
import FormMask from "../pages/Forms/FormMask"

//Tables
import BasicTables from "../pages/Tables/BasicTables"
import DatatableTables from "../pages/Tables/DatatableTables"
import ResponsiveTables from "../pages/Tables/ResponsiveTables"
import EditableTables from "../pages/Tables/EditableTables"

// Charts
import ChartApex from "../pages/Charts/Apexcharts"
import ChartjsChart from "../pages/Charts/ChartjsChart"
import EChart from "../pages/Charts/EChart"
import SparklineChart from "../pages/Charts/SparklineChart"
import ChartsKnob from "../pages/Charts/charts-knob"

//Icons

import IconUnicons from "../pages/Icons/IconUnicons"
import IconBoxicons from "../pages/Icons/IconBoxicons"
import IconDripicons from "../pages/Icons/IconDripicons"
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign"
import IconFontawesome from "../pages/Icons/IconFontawesome"



// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Register1 from "../pages/AuthenticationInner/Register"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Custom Defined Pages @BetterHospital
import AddDoctor from '../pages/AddDoctor';
import RemoveDoctor from '../pages/RemoveDoctor';
import ViewDoctor from '../pages/ViewDoctor';
import AddBloodRequest from "../pages/AddBloodRequest";
import AddNewNurse from '../pages/AddNewNurse';
import RemoveNurse from '../pages/RemoveNurse';
import AddAppointment from '../pages/AddAppointment';
import CancelAppointment from '../pages/CancelAppointment';
import AddRoom from '../pages/AddRoom';
import AddPatient from '../pages/AddPatient';
import AdmitPatient from '../pages/AdmitPatient';
import DischargePatient from '../pages/DischargePatient';
import AddRadiologyRequest from '../pages/AddRadiologyRequest';

// @ Doctor Portal
import ViewPatients from "../pages/ViewPatients"
import SearchPatient from '../pages/SearchPatient'

const userRoutes = [

  { path: "/viewpatient", component: ViewPatients },
  { path: "/searchpatient", component: SearchPatient },

  { path: "/adddoctor", component: AddDoctor },
  { path: "/removedoctor", component: RemoveDoctor },
  { path: "/viewdoctor", component: ViewDoctor },
  { path: "/addbloodrequest", component: AddBloodRequest },
  { path: "/addnewnurse", component: AddNewNurse },
  { path: "/removenurse", component: RemoveNurse },
  { path: "/addnewappointment", component:AddAppointment },
  { path: "/cancelappointment", component:CancelAppointment },
  { path: "/addnewroom", component: AddRoom },
  { path: "/addnewpatient", component: AddPatient },
  { path: "/admitpatient", component: AdmitPatient },
  { path: "/dischargepatient", component: DischargePatient },
  { path: "/radiology", component: AddRadiologyRequest },
   

  { path: "/dashboard", component: Dashboard },
  { path : '/dashboard2' , component : Dashboard2},
  { path: "/calendar", component: Calendar },

  
  //Utility
  { path: "/pages-starter", component: PagesStarter },
  { path: "/pages-timeline", component: PagesTimeline },
  { path: "/pages-faqs", component: PagesFaqs },
  { path: "/pages-pricing", component: PagesPricing },
  { path: "/invoice", component: PagesInvoice },

  // Ui
  { path: "/ui-alerts", component: UiAlert },
  { path: "/ui-buttons", component: UiButtons },
  { path: "/ui-cards", component: UiCards },
  { path: "/ui-carousel", component: UiCarousel },
  { path: "/ui-colors", component: UiColors },
  { path: "/ui-dropdowns", component: UiDropdown },
  { path: "/ui-general", component: UiGeneral },
  { path: "/ui-grid", component: UiGrid },
  { path: "/ui-images", component: UiImages },
  { path: "/ui-lightbox", component: UiLightbox },
  { path: "/ui-modals", component: UiModal },
  { path: "/ui-progressbars", component: UiProgressbar },
  { path: "/ui-sweet-alert", component: UiSweetAlert },
  { path: "/ui-tabs-accordions", component: UiTabsAccordions },
  { path: "/ui-typography", component: UiTypography },
  { path: "/ui-video", component: UiVideo },
  { path: "/ui-session-timeout", component: UiSessionTimeout },
  { path: "/ui-rating", component: UiRating },
  { path: "/ui-rangeslider", component: UiRangeSlider },
  { path: "/ui-notifications", component: UiNotifications },
  { path: "/ui-image-cropper", component: UiImageCropper },

  // Forms
  { path: "/basic-elements", component: BasicElements },
  { path: "/form-layouts", component: FormLayouts },
  { path: "/form-advanced", component: FormAdvanced },
  { path: "/form-editors", component: FormEditors },
  { path: "/form-repeater", component: FormRepeater },
  { path: "/form-uploads", component: FormUpload },
  { path: "/form-wizard", component: FormWizard },
  { path: "/form-validation", component: FormValidations },
  { path: "/form-xeditable", component: FormXeditable },
  { path: "/form-mask", component: FormMask },

  // Tables
  { path: "/tables-basic", component: BasicTables },
  { path: "/tables-datatable", component: DatatableTables },
  { path: "/tables-responsive", component: ResponsiveTables },
  { path: "/tables-editable", component: EditableTables },

  //Charts
  { path: "/apex-charts", component: ChartApex },
  { path: "/chartjs-charts", component: ChartjsChart },
  { path: "/e-charts", component: EChart },
  { path: "/sparkline-charts", component: SparklineChart },
  { path: "/charts-knob", component: ChartsKnob },




  // Icons
  { path: "/icons-unicons", component: IconUnicons },
  { path: "/icons-boxicons", component: IconBoxicons },
  { path: "/icons-dripicons", component: IconDripicons },
  { path: "/icons-materialdesign", component: IconMaterialdesign },
  { path: "/icons-fontawesome", component: IconFontawesome },




    // //profile
    { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  
  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },

    // Authentication Inner
    { path: "/pages-login", component: Login1 },
    { path: "/pages-register", component: Register1 },
    { path: "/page-recoverpw", component: Recoverpw },
    { path: "/auth-lock-screen", component: LockScreen },
]

export { userRoutes, authRoutes  }