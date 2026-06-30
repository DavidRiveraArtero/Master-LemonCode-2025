import React from "react"
import { Home } from "@/app"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router"
import { AppRoutes } from "./routes"


export const AppRutas:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.root} Component={Home} />
        <Route path={AppRoutes.list} />
        <Route path={AppRoutes.detail}/>
        <Route path="*" element={<Navigate to={AppRoutes.root}/>} />
      </Routes>
    </Router>
  )
}