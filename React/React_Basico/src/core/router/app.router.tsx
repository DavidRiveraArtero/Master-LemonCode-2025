import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { switchRoutes } from "./routes";
import { ListMemberScene, MemberDetailScene, ListRickMorty,RickDetail } from "@/scenes";


export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/*CAMBIAR EL PRIMER ROUTE POR UNA LANDING*/}
        <Route path={switchRoutes.root} element={<ListMemberScene />} /> 
        <Route path={switchRoutes.list_member} element={<ListMemberScene />} />
        <Route path={switchRoutes.details_member} element={<MemberDetailScene/>}/>
        <Route path={switchRoutes.list_rick} element={<ListRickMorty/>}/>
        <Route path={switchRoutes.detail_rick} element={<RickDetail/>}/>
        <Route path="*"  element={<Navigate to={switchRoutes.root}/>} />
      </Routes>
    </Router>
  );
};
