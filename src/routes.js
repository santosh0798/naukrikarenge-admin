// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import CompanyTables from "views/Dashboard/Tables/CompanyTables";
import Billing from "views/Dashboard/Billing";
import AddJobPost from "views/Dashboard/Post/addJobPost"
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  DocumentIcon,
} from "components/Icons/Icons";
import PostTables from "views/Dashboard/Tables/postTables";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
    type: "both"
  },
  {
    path: "/candidate-table",
    name: "Candidate Table",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
    type: "both"
  },
  {
    path: "/company-table",
    name: "Companies Table",
    icon: <StatsIcon color="inherit" />,
    component: CompanyTables,
    layout: "/admin",
    type: "admin"
  },
  {
    path: "/billing",
    name: "Transaction",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
    type: "both"
  },
  {
    path: "/signin",
    name: "Sign In",
    icon: <DocumentIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
    type: "none"

  },
  {
    path: "/signup",
    name: "Sign Up",
    icon: <DocumentIcon color="inherit" />,
    component: SignUp,
    layout: "/auth",
    type: "none"

  },
  {
    path: "/add-job-post",
    name: "Add Job Post",
    icon: <DocumentIcon color="inherit" />,
    component: AddJobPost,
    layout: "/admin",
    type: "both"

  },
  {
    path: "/view-job-post",
    name: "View Job Post",
    icon: <DocumentIcon color="inherit" />,
    component: PostTables,
    layout: "/admin",
    type: "both"

  }

];
export default dashRoutes;
