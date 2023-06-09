import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from "../components/pages/Inicio";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { Proyectos } from "../components/pages/Proyectos";
import { Snipets } from "../components/pages/Snipets";
import { Contacto } from "../components/pages/Contacto";
import { AppSalon } from "../components/pages/AppSalon";
import { BienesRaices } from "../components/pages/BienesRaices";

export const Rutas = () => {

    return (
        <BrowserRouter>
            {/* LAYOUT */}
            <section className="navbar">
                <Nav />
            </section>

            {/* Contenido Central y Rutas */}
            <section id='content' className="content">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/proyectos/appsalon" element={<AppSalon />} />
                    <Route path="/proyectos/bienesraices" element={<BienesRaices />} />
                    <Route path="/snipets" element={<Snipets />} />
                    <Route path="/contacto" element={<Contacto />} />

                    <Route path="*" element={
                        <div className="jumbo">
                            <h1>Error 404</h1>
                            <p>Página o ruta no encontrada</p>
                        </div>
                    }></Route>
                </Routes>
            </section>

            <section className="foot">
                <Footer />
            </section>

        </BrowserRouter>

    )
} 