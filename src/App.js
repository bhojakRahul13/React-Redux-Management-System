import React from "react";
import "./App.css";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import AdminLogin from "./components/authComponents/AdminLogin";
import Login from "./components/authComponents/Login";
import StudentSignUp from "./components/singupComponents/StudnetSignUp";
import TeacherSignUp from "./components/singupComponents/TeacherSignUp";
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./components/authComponents/ForgetPassword";
import NewPassword from "./components/authComponents/NewPassword";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import NavBar from "./pages/NavBar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Login} key={1} />
              <Route exact path="/admin-login" component={AdminLogin} key={2} />
              <Route
                exact
                path="/student-sign-up"
                component={StudentSignUp}
                key={3}
              />
              <ProtectedRoute
                exact
                path="/teacher-sign-up"
                component={TeacherSignUp}
                key={4}
              />
              <ProtectedRoute
                exact
                path="/dashboard"
                component={Dashboard}
                key={5}
              />
              <Route
                exact
                path="/forget-password"
                component={ForgetPassword}
                key={6}
              />
              <Route
                exact
                path="/new-password"
                component={NewPassword}
                key={7}
              />

           
              <Route
                exact
                path="/edit/:id"
                component={Edit}
                key={8}
              />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
